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
  if(resultado == listaNumeros[i] + listaNumeros[i+1]){
    acertosTotais++;
    console.log("Acertou")
  }
}