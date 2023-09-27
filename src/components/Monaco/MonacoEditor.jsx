import Monaco, { useMonaco } from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react';

import Amy from './themes/Amy.json';
import MonokaiBrightTheme from './themes/Monokai Bright.json';
import Monokai from './themes/Monokai.json';

import './monaco.css';
import axios from 'axios';

function MonacoEditor() {
  const [data, setData] = useState([]);
  const monaco = useMonaco();
  const [conteudoMonaco, setConteudoMonaco] = useState();
  const [theme, setTheme] = useState('vs-dark'); // Initialize with vs-dark theme
  const [errorMessages, setErrorMessages] = useState([]);
  const [consoleMessages, setConsoleMessages] = useState([]);

  useEffect(() => {
    // A URL da API que você deseja acessar
    const apiUrl = 'http://localhost:8080/fases/1';


    const config = {
      headers: {
        'Authorization': `Bearer ${sessionStorage.BearerToken}` // Adiciona o cabeçalho de autorização com o token
      }
    };

    // Faz a solicitação GET usando Axios
    axios.get(apiUrl, config)
      .then((response) => {
        setData(response.data); // Define os dados recebidos no estado
        setConteudoMonaco(data.conteudo_exec)
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error);
      });
    }, []);
    console.log(data.conteudo_exec);
    
    
    


  const editorRef = useRef(null);

  const handleSave = () => {
    //Salvar no banco assim
    console.log(editorRef.current.getValue())
  }

  function handleEditorValidation(markers) {
    // Filtra apenas os marcadores de erro
    const errorMarkers = markers.filter((marker) => marker.severity === monaco.MarkerSeverity.Error);

    // Obtém as mensagens de erro dos marcadores
    const errorMessages = errorMarkers.map((marker) => marker.message);

    // Atualiza o estado com as mensagens de erro
    setErrorMessages(errorMessages);
  }

  function validar(){

    // Pega o conteudo do editor
    var conteudo = editorRef.current.getValue(); 

    // Números para fazer o teste
    const listaNumeros = [5,6,7,8,9,10,11,22,13,14];

    // Total de acertos necessários para passar 
    const acertosNecessarios = 5;
    let acertosTotais = 0;

    // Inicio dos testes
    for(var i = 0; i < listaNumeros.length; i+=2){
      
      //Chamando a função digitada
      const exec = `
      ${conteudo}
      exercicio(${listaNumeros[i]}, ${listaNumeros[i+1]});
      `
      
      // Executa o teste
      const resultado = eval(exec);

      // Valida se acertou o teste
      if(resultado === listaNumeros[i] + listaNumeros[i+1]){
        acertosTotais++;
        console.log("Acertou")
      }
    }
    
    
    var msg = `O seu código não está correto! Acertou um total de ${acertosTotais} dos testes`
    if(acertosNecessarios === acertosTotais){
      msg = `O seu código está correto! Acertou um total de ${acertosTotais} dos testes`
    }
    setConsoleMessages(msg)

  }

  

  const listaTemas = ['vs', 'vs-dark', 'hc-black', Amy, MonokaiBrightTheme, Monokai]
  const handleThemeChange = (event) => {
    if (event.target.value === 0) {
      monaco.editor.setTheme('vs');

    } else if (event.target.value === 1) {
      monaco.editor.setTheme('vs-dark');

    } else if (event.target.value === 2) {
      monaco.editor.setTheme('hc-black');

    } else {
      monaco.editor.defineTheme('meu-tema', listaTemas[event.target.value]);
      monaco.editor.setTheme('meu-tema');
    }

  };

  const criarCookies = () =>{
    setcookie("user", "John", time() + 3600, "/");
  }

  return (
    
    <div>
      <select id='selectTemas' onChange={handleThemeChange} >
        <option value='0'>Visual Studio</option>
        <option value='1'>Visual Studio Dark</option>
        <option value='2'>High Contrast Black</option>
        <option value='3'>Amy</option>
        <option value='4'>MonokaiBrightTheme</option>
        <option value='5'>Monokai</option>
      </select>
      
      <button className='botao' onClick={validar}>Verificar</button>
        <button className='botao' onClick={handleSave}>Salvar</button>
      <span className='monacoContainer'>

        <div className='monaco'>
          <Monaco
            height='100vh'
            width='50vw'
            theme={theme}
            defaultLanguage='javascript'
            value={conteudoMonaco}
            onChange={(textoDigitado) => setConteudoMonaco(textoDigitado)}
            onValidate={handleEditorValidation}
          />
        </div>

        <div id='console' className='console'>
        {consoleMessages}
      {/* Exibe mensagens de erro */}
      {errorMessages.length > 0 && (
        <div>
          <h2>Mensagens de Erro:</h2>
          <ul>
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}
        </div>
      </span>




    </div>
  )
}

export default MonacoEditor;
