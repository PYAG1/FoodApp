"use client";

import TextField from "@/core-ui/TextField";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import * as Y from "yup";
import { auth } from "../../../config/firebaseConfig";
import {

  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/utils/store/cartSlice";

export default function Page() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState<Boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Y.object().shape({
      email: Y.string().required("email is required"),
      password: Y.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true); // Set loading to true on form submission
      await signin(values.email, values.password);
      setLoading(false);
    },
  });
  const signin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential?.user;

      if (user) {
        const displayName: string | null = user.displayName as string;

        localStorage.setItem("displayName", displayName);

        React.useEffect(() => {
          // Check if window is defined (client-side) before using localStorage
          if (typeof window !== 'undefined') {
            const storedDisplayName = localStorage.getItem('displayName');
      
      dispatch(setCurrentUser(storedDisplayName))
         
          }
        }, []);
        router.push("/main");
        toast.success("Signed in");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-between min-h-full bg-background  flex-1">
      <div className="flex flex-1 flex-col w-full h-screen  justify-center items-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 ">
          <div>
            <h1 className="text-left font-[Oswald]  text-primary font-semibold text-2xl mb-5">
              Mascot Bites
            </h1>
          </div>

          <div className="py-4">
            <div>
              <form
                onSubmit={formik.handleSubmit}
                action="#"
                method="POST"
                className="space-y-6 font-[Manrope]"
              >
                <TextField
                  label="Email"
                  placeholder="Enter your email"
                  type="text"
                  id="email"
                  {...formik}
                />

                <TextField
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                  {...formik}
                />

                <button
                  type="submit"
                  className="w-full font-manrope  rounded-md bg-primary  py-3 text-sm font-semibold leading-6 text-background shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {loading ? <BeatLoader size={8} color={"#fff"} /> : "Sign in"}
                </button>
                <div className="flex items-center justify-end">
                  <div className="text-sm flex justify-end leading-6">
                    <button className="underline manrope text-[#4c4c4c]  hover:text-primary">
                      <Link href="/signup">Don&apos;t have an account?</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-0">
          <p className="font-manrope text-gray-500 text-sm text-center">
            All rights reserved, {new Date().getFullYear()}. Powered by PYAG
          </p>
        </div>
      </div>
    </div>
  );
}
