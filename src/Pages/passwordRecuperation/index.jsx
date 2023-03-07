import React, { useState } from "react";
import { useParams } from "react-router-dom";

const passwordRecuperation = () => {
  // const { token } = useParams()
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const [fail, setFail] = useState(false)
  // const [success, setSuccess] = useState(false)

  return (
    <div className="container">
      <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12 w-screen h-screen">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-slate-100 mx-8 md:mx-0 shadow rounded-md sm:p-10 bg-slate">
            <div className="max-w-md mx-auto">
            <h1 className="flex justify-center">
                    <p className="font-Montserrat text-[#1b0096]">Change Password</p>
                  </h1>
              <div className="flex items-center space-x-5 px-4 py-2 border:none focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm rounded-md focus:outline-none">
                <div className="">
                  <form
                    className="mt-4 space-y-4 lg:mt-4 md:space-y-5"
                    action="#"
                  >
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="confirm-password"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div className="flex items-start"></div>
                    <button
                      type="submit"
                      className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-800"
                    >
                      <p className="font-Montserrat text-sm text-white">Reset password</p>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default passwordRecuperation;
