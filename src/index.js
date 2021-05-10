import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Propiedades, recordar que son de solo lectura
// si necesitamos modificar las propiedades debemos hacerlo desde fuera,
// es por eso que se hace uso del metodo STATE.
// en este ejemplo se usara un contador que modicara todo el pono
// estas propiedades seran heredaras desde el metodo render

// se modifica la constante por let ya que esta se ira modificando
let propiedades = {
  hijo1: {
    titulo: "Hijo 1",
    subtitulo: "Contador (Componente Funcional)",
    cuenta: 1
  },
  hijo2: {
    titulo: "Hijo 2",
    subtitulo: "Contador (Componente de Clase)",
    cuenta: 10
  }
}

setInterval(() => {
  console.log('Propiedades Intervalo...');

  propiedades = {
    ...propiedades,
    hijo1: {
      ...propiedades.hijo1,
      cuenta: propiedades.hijo1.cuenta + 1
    },
    hijo2: {
      ...propiedades.hijo2,
      cuenta: propiedades.hijo2.cuenta + 10
    }
  }

  // Render se deja dentro de setInterval propage la modificacion de propiedades desde fuera de los componentes
  // No nos dara error de solo lectura, por que la actualizacion de propiedades viene desde fuera del componente
  // Evitamos el error de tipo: Cannot assign to read only property 'cuenta' of object '#<Object>'
  ReactDOM.render(
    <Padre {...propiedades} />,
    document.getElementById('root')
  );

}, 1000);




// Extraccion de division de componetes
// Hace referencias a que un componente lo puedes dividie en varios componentes hijos,
// bajando la complejidad, diviendo un componente en varios subcomponentes.


// Componente Funcional , con uso de Extraccion
function Hijo2(props) {
  // TypeError: Cannot assign to read only property 'cuenta' of object '#<Object>'
  // setInterval( ()=>{
  //   console.log('Intervalo...');
  //   props.cuenta++;
  // }, 1000);

  return (
    <div className="componente">
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <p>{props.cuenta}</p>
    </div>
  );
}

// Componentes de Clase
// Uso de ECMASCRIPT 6 para hacer uso de las clases
// uso de Propiedades

class Hijo1 extends React.Component {
  // Cannot assign to read only property 'cuenta'
  // aumentarCuenta(){
  //   setInterval(()=>{
  //     console.log('Intervalo...')
  //     this.props.cuenta++;
  //   }, 1000);
  // }

  render() {
    // Cannot assign to read only property 'cuenta'
    // this.aumentarCuenta();

    return (
      <div className="componente">
        <h2>{this.props.titulo}</h2>
        <h3>{this.props.subtitulo}</h3>
        <p>{this.props.cuenta}</p>
      </div>
    );
  }
}

// Composicion de componentes
// Se refiere a que un componente puede estar compuesto a uno o mas componentes hijos (subcomponentes)
function Padre(props) {
  // Verificacion de las props (objeto json)
  console.log(props)
  return (
    <div className="padre">
      <h1>{"Componente Padre"}</h1>
      <h3>{"Functional Components ( Padre )"}</h3>
      <div className="componentes">
        <Hijo1 {...props.hijo1} />
        <Hijo2 {...props.hijo2} />
      </div>
    </div>
  );
}
