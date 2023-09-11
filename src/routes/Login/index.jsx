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

    const handleVoltar = () => {
        Redirecionamento(navigate, '/')
    } 
    const handleCadastrar = () => {
        Redirecionamento(navigate, '/cadastro')
    } 

    return (

        <div className='fundo'>
            <div className='container'>
                <div className='header'>
                    <div className='button'>
                        <button className='buttonVoltar' onClick={handleVoltar}>Voltar</button>
                    </div>
                    <div className='titulo'>
                        CodeUp
                    </div>
                </div>
                <div className='section'>

                    <div className='lado_branco'>
                        <h1>Entrar</h1>

                        <div id='containerInput'>
                            <label id='email'>Email:</label>
                            <input className='inputCadastro' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div id='containerInput'>
                            <label id='senha'>Senha:</label>
                            <input className='inputCadastro' value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <button className='buttonForm' onClick={logar}>Login</button>
                    </div>
                    <div className='lado_cinza'>
                        <p className='txtForm'>Não tem conta ainda?</p>
                        <button className='buttonForm' onClick={handleCadastrar}>
                            Cadastre-se
                        </button>
                    </div>



                </div>
            </div>
        </div>




    );
}
