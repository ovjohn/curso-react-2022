import './App.css'
import  { useState } from 'react';


//Funcion Numero Aleatorio
/*function App(){

  function numeroAleatorio(){
    const valor = Math.trunc(Math.random() * 10);
    setNumero(valor);
  }

  const [numero, setNumero] = useState(0);

  return(
    <div>
      <p>El numero aleatorio es:{numero}</p>
      <button onClick={numeroAleatorio}>Generar Aleatorio</button>

    </div>
  );
};
*/

//Funcion Numeros Aleatorios
function App(){

  const [numerosAleatorios, setNumero] = useState([0,0,0,0,0]);


  const aleatorio = new Array(5);

  function generarNumerosAleatorios(){
  for (let i = 0; i < aleatorio.length; i++) {
    aleatorio[i] = Math.trunc( Math.random()*10 );
    setNumero(aleatorio);    
  }
  };

  return(
    <div>
      <p>Numero aleatorio:</p>
      {numerosAleatorios.map(n => (<p>{n}</p>))}
      <button onClick={generarNumerosAleatorios}>Generar Numero Aleatorio</button>
    </div>
  );
};


export default App;
