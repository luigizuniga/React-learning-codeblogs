import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Extraccion de division de componetes
// Hace referencias a que un componente lo puedes dividie en varios componentes hijos,
// bajando la complejidad, diviendo un componente en varios subcomponentes.

// Componentes de Clase
// Uso de ECMASCRIPT 6 para hacer uso de las clases

class Hijo1 extends React.Component{
  render(){
    return (
      <div clasName="componente">
        <h2>{ "Hijo 1" }</h2>
        <h3>{ "Class Components" }</h3>
        <p>{ "Contador" }</p>
        <p>{ "1" }</p>
      </div>
        );
    }
}

// Componente Funcional , con uso de Extraccion

function Hijo2 (props){
  return(
    <div clasName="componente">
      <h2>{ "Hijo 2" }</h2>
      <h3>{ "Class  Components" }</h3>
      <p>{ "Contador" }</p>
      <p>{ "2" }</p>
    </div>
 );
}

// Composicion de componentes
// Se refiere a que un componente puede estar compuesto a uno o mas componentes hijos (subcomponentes)
function Padre(props) {
  return(
    <div className="padre">
      <h1>{ "Componente Padre" }</h1>
      <h3>{ "Functional Components" }</h3>
        <div className="componentes">
          <Hijo1 />
          <Hijo2 />
        </div>
    </div>
  );
}

ReactDOM.render(
    <Padre />,
    document.getElementById('root')
);