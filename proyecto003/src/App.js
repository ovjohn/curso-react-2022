import './App.css'

function App(){
  return (
    <div>
      <form onSubmit={calcularSuma}>
        <p>Ingrese primer Valor:
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="numer" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  ); 
};

function calcularSuma(evento){
  evento.preventDefault();
  const v1 = parseInt(evento.target.valor1.value, 10);
  const v2 = parseInt(evento.target.valor2.value, 10);
  const sumar = v1 + v2;
  alert('La suma es: '+sumar);

};

export default App;

