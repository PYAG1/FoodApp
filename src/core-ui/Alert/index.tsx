import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { AlertTypes } from "./types";
import toast from "react-hot-toast";

export default function Alert({ type, message, toastAction }: AlertTypes) {
 
  return (
    <div
      className={`${
        toastAction.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="rounded-md bg-green-50 p-4 absolute right-[50%] top-8">
        <div className="flex">
          <div className="flex-shrink-0">
            {type === "success" ? (
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            ) : (
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">{message}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={() => toast.dismiss(toastAction.id)}
                className={` inline-flex rounded-md  p-1.5 focus:ring-offset-2 focus:outline-none focus:ring-2 ${
                  type === "success"
                    ? " bg-green-50 text-green-500 hover:bg-green-100  focus:ring-green-600  focus:ring-offset-green-50 "
                    : " bg-red-50 text-red-800 hover:bg-red-100  focus:ring-red-600"
                }`}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
