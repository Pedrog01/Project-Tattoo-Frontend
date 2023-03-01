import React,{useState} from "react"
import "./styleUser.scss"

    const SignUpUser = () =>{
      const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        Birthdate: "",
        password: "",
      });

      const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value  
        })
      }

      return (
      <div className="container">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-slate-100 mx-8 md:mx-0 shadow rounded-xl sm:p-10 bg-slate ">
              <div class="max-w-md mx-auto bg-white">
                <div class="flex items-center space-x-5">
                  <div class="h-14 w-14 bg-red-700 rounded-full flex flex-shrink-0 justify-center items-center text-red-200 text-2xl font-mono">
                    S
                  </div>
                  <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 class="leading-relaxed font-bold">Sing Up</h2>
                    <p class="text-sm text-gray-500 font-normal leading-relaxed ">
                      Welcome 
                    </p>
                  </div>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex items-center space-x-4">
                      <div class="flex flex-col">
                        <label class="leading-loose font-bold">First Name</label>
                        <div class="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Name"
                            value={setUser.city}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose font-bold ">Last Name</label>
                        <div class="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            class="pr-4 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Last Name"
                            value={setUser.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  
                    <div class="flex flex-col">
                      <label class="leading-loose font-bold ">Phone</label>
                      <input
                        type="number"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="(00)90000-0000"
                        value={setUser.phone}
                        onChange={handleChange}
                      />
                    </div>
                   
                    <div class="flex flex-col">
                      <label class="leading-loose font-bold ">Birthdate</label>
                      <input
                        type="date"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder=""
                        value={setUser.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose font-bold ">Email</label>
                      <input
                        type="email"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Email"
                        value={setUser.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose font-bold ">Password</label>
                      <input
                        type="password"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="********"
                      />
                    </div>
                  </div>
                  <div class="pt-4 flex items-center space-x-4">
                    <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                      <svg
                        class="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>{" "}
                      Cancel
                    </button>
                    <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      );
    }



export default SignUpUser