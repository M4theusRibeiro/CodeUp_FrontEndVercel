import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Redirecionamento from '../../components/Redirects/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const logar = async () => {
        const dadosJson = {
            email: email,
            senha: senha
        };

        const apiUrl = 'http://localhost:8080/usuario/login';

        try {
            const response = await axios.post(apiUrl, dadosJson);

            if (response.status === 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'success',
                    title: 'Logado com sucesso!'
                });

                await Redirecionamento(navigate, '/terminal');
                // Aguarde o redirecionamento
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação Post:', error);
        }
    };

    return (
        <div className='fundo'>
            <div className='container'>
                <h1>Login</h1>
                <p>Seja bem vindo novamente!</p>
                <span id='containerInput'>
                    <label id='email'>Email:</label>
                    <input className='inputLogin' value={email} onChange={(e) => setEmail(e.target.value)} />
                </span>
                <span id='containerInput'>
                    <label id='senha'>Senha:</label>
                    <input className='inputLogin' value={senha} onChange={(e) => setSenha(e.target.value)} />
                </span>
                <button onClick={logar}>Login</button>
            </div>
        </div>
    );
}
