import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Propiedades
// Extraccion de division de componetes
// Hace referencias a que un componente lo puedes dividie en varios componentes hijos,
// bajando la complejidad, diviendo un componente en varios subcomponentes.


// Componente Funcional , con uso de Extraccion
function Hijo2 (props){
    return(
      <div className="componente">
        <h2>{ props.titulo }</h2>
        <h3>{ props.subtitulo}</h3>
        <p>{  props.cuenta }</p>
      </div>
  );
}

// Componentes de Clase
// Uso de ECMASCRIPT 6 para hacer uso de las clases
// uso de Propiedades

class Hijo1 extends React.Component{
  render(){
    return (
      <div className="componente">
        <h2>{ this.props.titulo }</h2>
        <h3>{ this.props.subtitulo}</h3>
        <p>{  this.props.cuenta }</p>
      </div>
    );
  }
}

// Composicion de componentes
// Se refiere a que un componente puede estar compuesto a uno o mas componentes hijos (subcomponentes)
function Padre(props) {
  // uso de Propiedades

  const propiedades = {
    titulo:"Hijo 2",
    subtitulo:"Contador (Componente Funcional)",
    cuenta : 10
  }

  return(
    <div className="padre">
      <h1>{ "Componente Padre" }</h1>
      <h3>{ "Functional Components ( Padre )" }</h3>
        <div className="componentes">
          <Hijo1
              titulo="Hijo 1"
              subtitulo="Contador (Class Componente)"
              cuenta={ 1 } />
              {/* uso de operador spreat para pasar las pripiedades desde el padre*/}
          <Hijo2 {...propiedades}/>
        </div>
    </div>
  );
}

ReactDOM.render(
    <Padre />,
    document.getElementById('root')
);