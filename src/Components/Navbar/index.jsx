import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  // função para rolar até a seção "Sobre Nós"
  const scrollToSobreNos = () => {
    if (location.pathname !== "/") {
      // se o usuário não estiver na página HomePage, redirecione-o para a página HomePage
      navigate("/");
      setTimeout(() => {
        const sobreNos = document.getElementById("sobreNos");
        sobreNos.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    // role até a seção "Sobre Nós"
    document.getElementById("sobreNos").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-800 py-3 w-screen h-28">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded hover:text-white"
          >
            Home
          </a>
          <button
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded hover:text-white"
            onClick={scrollToSobreNos}
          >
            Sobre Nós
          </button>
          <a
            href="/choiceUser"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded hover:text-white"
          >
            Login
          </a>
        </div>
      </div>
      <div className=" flex justify-end p-8 py-2 text-sm text-white dark:text-white font-medium ">
          name@gmail.com
        </div>
    </nav>
  );
};

export default Navbar;
