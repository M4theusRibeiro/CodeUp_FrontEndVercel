import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A URL da API que você deseja acessar
    const apiUrl = 'http://localhost:8080/usuario';

    // Faz a solicitação GET usando Axios
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data); // Define os dados recebidos no estado
        setLoading(false); // Define o estado de carregamento como falso
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Dados da API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
