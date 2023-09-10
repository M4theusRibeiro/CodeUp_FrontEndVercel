import './styles.css'
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <>      
     <nav>
            <h1>Seja bem vindo ao site da code up!</h1>
            <ui>
                <li>
                    <Link to="terminal">Terminal</Link>
                </li>
                <li>
                    <Link to="cadastro">Cadastro</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="app">App</Link>
                </li>
            </ui>
        </nav>
    </>

  );
}

