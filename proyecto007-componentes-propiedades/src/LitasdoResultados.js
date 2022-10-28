function ListadoResultados(propiedades){
    return(
        <ul>
           {propiedades.resultado.map( e => 
            <li>La suma de {e.valor1} y {e.valor2} es {e.suma}</li>
            )}
        </ul>
    );
}

export default ListadoResultados;