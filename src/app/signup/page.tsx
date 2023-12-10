"use client";


import TextField from "@/core-ui/TextField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import * as Y from "yup";
import { UserRef, auth } from "../../../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Page() {
  const [loading, setLoading] = React.useState<Boolean>(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", username: "" },
    validationSchema: Y.object().shape({
      email: Y.string().required("email is required"),
      password: Y.string().required("Password is required"),
      username: Y.string().required("Username is required")
    }),
    onSubmit: async (values) => {
      setLoading(true); // Set loading to true on form submission
await signup(values.email,values.password,values.username)
      setLoading(false);
    },
  });

  const signup = async (email: string, password: string, username: string) => {
    try {
      // Check if the email already exists
      const emailSnapshot = await getDoc(doc(UserRef, email));
      if (emailSnapshot.exists()) {
        toast.error("Email Already exist", {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
  
      // Check if the username already exists
      const usernameSnapshot = await getDoc(doc(UserRef, username));
      if (usernameSnapshot.exists()) {
  
        toast.error("Username already exist", {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
  
      // If email and username are unique, proceed with user creation
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential?.user;
  
      if (user) {
        // Add user data to the 'users' collection in Firestore
        await setDoc(doc(UserRef, email), { email, username });
  
        toast.success('Your Account has been created', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
    } catch (error: any) {
      toast.error(error.message || 'Error', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
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
                  label="Username"
                  placeholder="Enter a username"
                  type="text"
                  id="username"
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
                  className="w-full font-[Manrope]  rounded-md bg-primary  py-3 text-sm font-semibold leading-6 text-background shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {loading ? <BeatLoader size={8} color={"black"} /> : "Sign up"}
                </button>
                <div className="flex items-center justify-end">
                  <div className="text-sm flex justify-end leading-6">
                    <button className="underline manrope text-[#4c4c4c]   hover:text-primary">
                      <Link href="/signin">Have an account?</Link>
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
