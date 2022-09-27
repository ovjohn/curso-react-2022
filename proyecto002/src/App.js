import './App.css'

// *************************************************  Ejercicio Numero 1 ****
/*function retornarAleatorio(){
  return Math.trunc(Math.random() * 10);
}

function App(){
  const siglo = 21
  const persona ={
    nombre: 'Juan',
    edad: 34
  }

  return(
    <div>
      <h1>Título de Nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un Objeto</h3>
      <p>{persona.nombre} tiene {persona.edad}</p>
      <h>LLamada a un método</h>
      <p>Un valor aleatorio llamando a un método</p>
      {retornarAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      3+3 = {3 + 3}
    </div>
  );
}*/

// *************************************************  Ejercicio Numero 2 ****
/*
function App(){
const navegadores = ['http://www.google.com','http://www.bing.com','http://www.yahoo.com'];
return(
  <div>
    <a href={navegadores[0]}>Google</a><br />
    <a href={navegadores[1]}>Bing</a><br />
    <a href={navegadores[2]}>Yahoo</a><br />
  </div>
  );
};
*/
// *************************************************  Ejercicio Numero 3 ****

function devolverTituto(titulo){
  return (<div>{titulo}</div>);
};

function App(){
  return (
  <div>
    {devolverTituto('Hola Mundo')}
    {devolverTituto('Fin de Hola mundo')}
  </div>)
};

export default App;