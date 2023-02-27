import React, { useState, useEffect } from "react";
import connection from "../../Api/connection";

const SignUp = () => {
  const [admin, setAdmin] = useState({
    firstname: "",
    email: "",
    cnpj: "",
    tel: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   connection.post("http://localhost:3000/admins")
  //   .then(resp => {
  //     setAdmin(resp.data)
  //     console.log(resp.data) 
  //   }).catch(err => {
  //     console.err(err)
  //   })
  // };

  return (
    <div className="flex items-center min-h-screen bg-zinc-900"> 
      <div class="px-8 py-6 mx-10 mt-4 text-left bg-white rounded-md shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 class="text-2xl font-bold text-center">Cadastre-se</h3>
        <div className="form-data">
          <div class="mt-4">
            {/* <form onSubmit={handleSubmit}>  */}
            <form onSubmit=""> 
              <div class="mt-4">
                <label class="block" for="Name">
                  FirstName
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Bryan Alvares Cabral"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.firstname}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
              <label class="block" for="t-email">
                  Email
                  <input
                    type="text"
                    name="email"
                    placeholder="bryan@gmail.com"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.email}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
              <label class="block" for="cnpj">
                  CNPJ
                  <input
                    type="text"
                    placeholder="337.568.658-96"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.cnpj}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
                <label class="block" for="tel">
                  Telephone
                  <input
                    type="text"
                    placeholder="(13)9999-8888"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.tel}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
                <label class="block" for="address">
                  Address
                  <input
                    type="text"
                    placeholder="Rua: Alvarés Cabral, 57, Seabra"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.address}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
              <label class="block" for="pws">
                  Password
                  <input
                    type="password"
                    placeholder="..."
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.password}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div class="mt-4">
              <label class="block" for="cpf">
                  Confirm Password
                  <input
                    type="password"
                    placeholder="..."
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={setAdmin.confirmPassword}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div>
              <button class="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-800">SignUp</button>
              </div>
               <div class="mt-5 text-grey-dark">
                  Already have an account?
                  <a class="px-2 text-blue-600 hover:underline" href="#">
                      Log in
                  </a>
              </div> 
            </form>
          </div>
        </div>
      </div>
      <div className="img px-2">
        <img className="h-25 w-55" src="https://files.tecnoblog.net/wp-content/uploads/2021/08/tatuagem-apps-1.jpg" alt="tattoReal"></img>
      </div>
    </div>
  );
};



export default SignUp;
