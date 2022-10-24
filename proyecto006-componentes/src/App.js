import { useState } from 'react';
import './App.css'
import Dado from './Dado';

function App(){

  function numeroAleatorio(){
    return Math.trunc(Math.random()*6)+1
  };
  
  function tirarDado(){
    setNumero1(numeroAleatorio());
    setNumero2(numeroAleatorio());
    setNumero3(numeroAleatorio());
  }

  const [numero1, setNumero1] = useState(numeroAleatorio());
  const [numero2, setNumero2] = useState(numeroAleatorio());
  const [numero3, setNumero3] = useState(numeroAleatorio());

  return(
    <div>
      <Dado valor = {numero1} />
      <Dado valor = {numero2} />
      <Dado valor = {numero3} />
      <button onClick={tirarDado}>Tirar Dado</button>
    </div>
  );
};
export default App;
