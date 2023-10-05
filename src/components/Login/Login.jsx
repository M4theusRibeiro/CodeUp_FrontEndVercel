import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
import logo from "../../assets/Codeup-big.png"
import Button from '../Button'
import Input from '../Input'
import styles from './Login.module.css'

const Login = () => {
    const [login, setLogin] = React.useState('');
    const [senha, setSenha] = React.useState('')
    const [dados, setDados] = React.useState(null)

    

    function logar(){
        const corpoRequisicao = {
            // Aqui você pode definir os dados que deseja enviar no corpo da requisição
            // Exemplo: username e password
            email: 'dev@sptech.school',
            senha: '12345678'
        };
      
        const config = {
            method: 'POST',
            url: '/usuarios/login',
            headers: {
              'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
            },
            data: JSON.stringify(corpoRequisicao) // Converte o corpo para JSON e o inclui na requisição
        };

        api.post("/usuarios/login", corpoRequisicao, config)
        .then((respostaObtida) => {
            setDados(respostaObtida.data) 
        })
        .catch((erroOcorrido) => {
            console.log(erroOcorrido);
        })
        .finally(() =>{
            console.log(dados)
        })
    }
    logar()
    
    return (<>
        <nav className={styles.container + " " + styles.nav}>
            <Link className={styles.link} to="/">Voltar</Link>
            <img className={styles.logo} src={logo} alt="Logo CodeUp" />
        </nav>
        <section className={styles.container + " " + styles.containerLogin}>
            <div className={styles.login}>
                <h1 className={styles.titulo}>Login</h1>
                <div>
                    <Input
                        className={styles.input}
                        label="Email"
                        id="login"
                        type="text"
                        value={login}
                        setValue={setLogin} />

                    <Input
                        className={styles.input2}
                        label="Senha"
                        id="senha"
                        type="password"
                        value={senha}
                        setValue={setSenha} />
                    <Button texto="Entrar" onClick={logar} className={styles.button}/>
                </div>

            </div>
            <div className={styles.preCadastro}>
                <p className={styles.p}>Não tem conta ainda?</p>
                <Button className={styles.button} texto="Cadastre-se" seila="awdhaiwd"/> 

            </div>
        </section>
    </>
    )
}

export default Login