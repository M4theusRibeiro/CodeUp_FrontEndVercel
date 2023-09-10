import './styles.css';
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

    return (
        <div className='fundo'>
     
            <div className='container'>
                <h1>Cadastro</h1>
                <p>Cadastre-se agora na CodeUP e adentre no mundo da programação com o pé direito!</p>
                <span id='containerInput'>
                    <label id='nome'>Nome:</label>
                    <input className='inputCadastro' value={nome} onChange={(e) => setNome(e.target.value)} />
                </span>
                <span id='containerInput'>
                    <label id='email'>Email:</label>
                    <input className='inputCadastro' value={email} onChange={(e) => setEmail(e.target.value)} />
                </span>
                <span id='containerInput'>
                    <label id='senha'>Senha:</label>
                    <input className='inputCadastro' value={senha} onChange={(e) => setSenha(e.target.value)} />
                </span>
                <span id='containerInput'>
                    <label id='idade'>Idade:</label>
                    <input className='inputCadastro' value={idade} onChange={(e) => setIdade(e.target.value)} />
                </span>
                <button onClick={cadastrar}>Cadastro</button>
            </div>

        </div>
    );
}
