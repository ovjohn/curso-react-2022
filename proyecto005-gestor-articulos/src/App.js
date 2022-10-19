import { useState } from 'react';
import './App.css'


function generalFila(articulo){
  return(
    <tr key={articulo.codigo}>
      <th>
        {articulo.codigo}
      </th>
      <th>
        {articulo.descripcion}
      </th>
      <th>
        {articulo.precio}
      </th>
    </tr>
  );

};

function App(){

  function eliminarUltimaFila(){
    if(articulos){
      const temporal = Array.from(articulos);
      temporal.pop();
      setArticulos(temporal);
      };
    };
    

    const [ articulos, setArticulos ] = useState([
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12
    },
    {
      codigo: 2,
      descripcion: 'naranjas',
      precio: 20 
    },
    {
      codigo: 3,
      descripcion: 'peras',
      precio: 18.4
    }]);
   
  
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(generalFila)}         
        </tbody>        
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar Articulo</button>
    </div>
  );
};

export default App;

