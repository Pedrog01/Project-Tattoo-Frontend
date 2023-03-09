import React from "react";

import perfil from "../../stylesheet/assents/perfil.jpg" 
import "./style.scss"

const ProfileUser = () => {
  return (
    <div className="profile-page-container bg-slate-400">
      <div className="corner">
        <h1 className="text-white text-2xl">Perfil do Usuário</h1>
        <img className="perfil" src={perfil}></img>
        <h2 className="text-white">Tião</h2>
        <h3 className="text-white">13-99783906</h3>
      </div>
    </div>
  );
};

export default ProfileUser;
