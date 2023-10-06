import React from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import logo from "../../assets/Codeup-big.png";
import Button from "../Button";
import Input from "../Input";
import styles from "./Login.module.css";

const Login = () => {
  /* Login */
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const [loginCadastro, setLoginCadastro] = React.useState(false);

  /* Cadastro */
  const [nome, setNome] = React.useState("");
  const [dataNasc, setDataNasc] = React.useState("");

  return (
    <>
      <nav className={styles.container + " " + styles.nav}>
        <Link className={styles.link} to="/">
          Voltar
        </Link>
        <img className={styles.logo} src={logo} alt="Logo CodeUp" />
      </nav>

      <section className={styles.container + " " + styles.containerLogin}>
        {/* Login */}
        {loginCadastro && (
          <div className={styles.login}>
            <h1 className={styles.titulo}>Login</h1>
            <div>
              <Input
                className={styles.input}
                label="Email"
                id="email"
                type="text"
                value={email}
                setValue={setEmail}
              />

              <Input
                className={styles.input2}
                label="Senha"
                id="senha"
                type="password"
                value={senha}
                setValue={setSenha}
              />
              <Button texto="Entrar" className={styles.button} />
            </div>
          </div>
        )}
        {/* Div intermediária */}
        <div className={styles.preCadastro}>
          {loginCadastro ? 
          <>
            <p className={styles.p}>Não tem conta ainda?</p>
            <Button
              className={styles.button}
              texto="Cadastre-se"
              value={loginCadastro}
              setValue={setLoginCadastro}
            />
          </> : <>
            <p className={styles.p}>Já tem conta?</p>
            <Button
              className={styles.button}
              texto="Entrar"
              value={loginCadastro}
              setValue={setLoginCadastro}
            />
          </>}

          
        </div>
        {/* Cadastro */}
        {!loginCadastro && (
          <div className={styles.login}>
            <h1 className={styles.titulo}>Cadastre-se</h1>
            <div>
              <Input
                className={styles.input}
                label="Nome"
                id="nome"
                type="text"
                value={nome}
                setValue={setNome}
              />

              <Input
                className={styles.input + " " + styles.date}
                label="Data de Nascimento"
                id="nome"
                type="date"
                value={dataNasc}
                setValue={setDataNasc}
              />
              <Input
                className={styles.input}
                label="Email"
                id="email"
                type="text"
                value={email}
                setValue={setEmail}
              />

              <Input
                className={styles.input2}
                label="Senha"
                id="senha"
                type="password"
                value={senha}
                setValue={setSenha}
              />
              <Button texto="Cadastre-se" className={styles.button} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
