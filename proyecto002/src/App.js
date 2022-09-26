import './App.css'

function retornarAleatorio(){
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
}

export default App;