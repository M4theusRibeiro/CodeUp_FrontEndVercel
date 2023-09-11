import './styles.css'
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Redirecionamento from '../../components/Redirects/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [idade, setIdade] = useState('');

    const navigate = useNavigate(); 
    
    const cadastrar = () => {
        // Suponha que você tenha um objeto de dados que deseja enviar no corpo da solicitação POST
        const dadosJson = {
            nome: nome,
            email: email,
            senha: senha,
            idade: idade,
        };

        // A URL do servidor para onde você deseja enviar a solicitação POST
        const apiUrl = 'http://localhost:8080/usuario'; // Substitua pela sua URL real

        // Realize a solicitação POST usando Axios
        axios
            .post(apiUrl, dadosJson)
            .then((response) => {
                console.log(response.status)

                if(response.status == 200){

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
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Cadastrado com sucesso!'
                      })
                      Redirecionamento(navigate, '/login')
                }

                console.log('Resposta do servidor:', response.data);
            })
            .catch((error) => {
                // Ocorreu um erro durante a solicitação, e você pode lidar com ele aqui
                console.error('Erro ao fazer a solicitação POST:', error);
            });
    };

    const handleVoltar = () => {
        Redirecionamento(navigate, '/')
    }
    const handleLogin = () => {
        Redirecionamento(navigate, '/login')
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

                <div className='lado_cinza'>
                     <p className='txtForm'>Já tem conta?</p>
                    <button className='buttonForm' onClick={handleLogin}>
                        Entrar
                    </button>
                </div>

        <div className='lado_branco'>
            <h1>Cadastre-se</h1>
            <div id='containerInput'>
                    <label id='nome'>Nome:</label>
                    <input className='inputCadastro' value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div id='containerInput'>
                    <label id='email'>Email:</label>
                    <input className='inputCadastro' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div id='containerInput'>
                    <label id='senha'>Senha:</label>
                    <input className='inputCadastro' value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div id='containerInput'>
                    <label id='idade'>Idade:</label>
                    <input className='inputCadastro' value={idade} onChange={(e) => setIdade(e.target.value)} />
                </div>
                <button className='buttonForm' onClick={cadastrar}>Cadastre-se</button>
        </div>
               
              
            </div>
            </div>
        </div>
    );
}
