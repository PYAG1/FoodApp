"use client";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import NavBar from "@/components/navigation/Navbar";
import { getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import { OrderRef } from "../../../config/firebaseConfig";
import { Item, Order } from "@/utils/types";
import { Disclosure } from '@headlessui/react'

const orders = [
  {
    orderNum: "WU88191111",
    date: "January 22, 2021",
    invoiceHref: "#",
    total: "$238.00",
    orderItems: [
      {
        id: 1,
        name: "Machined Pen and Pencil Set",
        price: "$70.00",
        
        img:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg",
          quantity:0,
          totalprice:0
      },
      // More products...
    ],
  },
  // More orders...
];





export default function Page() {
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("displayName") as string;
  const [orderHistory,setorderHistory] = useState<Array<Order>>([]) 



  const getOrderHistory = async (username: string) => {
    try {
      const q = query(OrderRef, where("user", "==", username));
      const snapshot = await getDocs(q);

      // Map the documents and include the document ID
      const orderHistoryData = snapshot.docs.map((doc) => ({
        ...doc.data(),

      }));

      // Do something with the orderHistory data (e.g., set it in state, return it, etc.)
     //@ts-ignore
setorderHistory(orderHistoryData)
      // Handle loading state if needed
      setLoading(false);
    } catch (error) {
      // Handle errors, show a toast message, etc.
      console.error("Error fetching order history:", error);
      toast.error("Failed to Fetch");

      // Handle loading state if needed
      setLoading(false);
    }
  };

  console.log(orderHistory)

  useEffect(() => {
    getOrderHistory(username);
  }, [getOrderHistory]);

  return (
    <div className="bg-white w-full font-[Manrope]">
      <NavBar />
      {loading ? (
        <div className=" w-full h-[90vh] bg-white flex justify-center items-center">
          <ClipLoader size={35} className=" text-background" />
        </div>
      ) : (
        
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and download
              invoices.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Recent orders</h2>

            <div className=" space-y-12">
              {orderHistory.map((order) => (
                 <Disclosure as="div" key={order?.orderNum}>
                       {({ open }) => (
                  <>
                <div key={order?.orderNum}>
                  <h3 className="sr-only">
                    Order placed on{" "}
                    <time dateTime={order?.date}>{order?.date}</time>
                  </h3>

                  <div className="rounded-lg bg-gray-50 py-6 px-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                    <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                      <div className="flex justify-between sm:block">
                        <dt className="font-medium text-gray-900">
                          Date placed
                        </dt>
                        <dd className="sm:mt-1">
                          <time dateTime={order?.date}>{order?.date}</time>
                        </dd>
                      </div>
                      <div className="flex justify-between pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">
                          Order number
                        </dt>
                        <dd className="sm:mt-1">{order?.orderNum}</dd>
                      </div>
                      <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                        <dt>Total amount</dt>
                        <dd className="sm:mt-1">{order?.total}</dd>
                      </div>
                    </dl>
                    /
                    <Disclosure.Button>
                    <a
                      href={order?.invoiceHref}
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                    >
                      View Details
                      <span className="sr-only">for order {order?.orderNum}</span>
                    </a>
                    </Disclosure.Button>
                  </div>
                  <Disclosure.Panel as="dd">
                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <caption className="sr-only">Products</caption>
                    <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3 pr-8 font-normal sm:table-cell"
                        >
                          Total Price
                        </th>
                        <th
                          scope="col"
                          className="w-0 py-3 text-right font-normal"
                        >
                          Info
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                      {order?.orderItems.map((product) => (
                        <tr key={product.id}>
                          <td className="py-6 pr-8">
                            <div className="flex items-center">
                              <img
                                src={product.img}
                                alt={product.name}
                                className="mr-6 h-16 w-16 rounded object-cover object-center"
                              />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {product.name}
                                </div>
                                <div className="mt-1 sm:hidden">
                                 Ghc {product.price}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="hidden py-6 pr-8 sm:table-cell">
                           Ghc {product.price}
                          </td>
                          <td className="hidden py-6 pr-8 sm:table-cell">
                           Ghc {product.totalprice}
                          </td>
                     
                          <td className="whitespace-nowrap py-6 text-right font-medium">
                            <p  className="text-indigo-600">
                              Quantity: 
                              <span className=" lg:inline">{product.quantity}</span>
                              <span className="sr-only">, {product.name}</span>
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </Disclosure.Panel>
                </div>
                </>)}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
