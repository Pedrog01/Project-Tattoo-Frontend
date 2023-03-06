import React, { useState } from "react";
import { useParams } from "react-router-dom";

const passwordRecuperation = () => {

  // const { token } = useParams()
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");


  // const [fail, setFail] = useState(false)
  // const [success, setSuccess] = useState(false)

  return (
    <div class="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12 w-screen h-screen">
      <div className="relative py-3 sm:max-w-sm sm:mx-auto h-screen w-screen">
        <div className="max-w-md mx-auto">
          <div className="text-center block pl-2 text-xl self-start text-gray-700">
            <h2 class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              Change Password
            </h2>
            <form class="mt-4 space-y-4 lg:mt-4 md:space-y-5" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex items-start"></div>
              <button
                type="submit"
                class="w-full px-1 py-2 mt-1 text-white bg-blue-800 hover:bg-blue-500"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default passwordRecuperation;
