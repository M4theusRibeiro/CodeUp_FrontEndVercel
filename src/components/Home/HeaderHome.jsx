import React from "react";
import logo from "../../assets/Codeup.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import style from "./HeaderHome.module.css";

export const HeaderHome = () => {
  return (
    <header className={style.header + " container"}>
      <img src={logo} alt="Logo CodeUp" />
      <nav>
        <Link to="/">Metodologia</Link>
        <Link to="/login">Login</Link>
        <Link to="/login">
          <Button texto="Cadastre-se"/>
        </Link>
      </nav>
    </header>
  );
};
