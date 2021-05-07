import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Composicion de componentes
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


// Extraccion de divisio de componetes
// Componentes de Clase
// ECMASCRIPT 6

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


// Componentes Funcionales
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


ReactDOM.render(
    <Padre />,
    document.getElementById('root')
);