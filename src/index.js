import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Propiedades, recordar que son de solo lectura para su modificacion se hace uso de los STATE
// estas propiedades seran heredaras desde el metodo render

const propiedades = {
  hijo1:{
    titulo:"Hijo 1",
    subtitulo:"Contador (Componente Funcional)",
    cuenta : 1
  },
  hijo2:{
    titulo:"Hijo 2",
    subtitulo:"Contador (Componente de Clase)",
    cuenta : 10
  }
}

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
  //Verificacion de las props (objeto json)
  console.log(props)
  return(
    <div className="padre">
      <h1>{ "Componente Padre" }</h1>
      <h3>{ "Functional Components ( Padre )" }</h3>
        <div className="componentes">
          <Hijo1 {...props.hijo1}/>
          <Hijo2 {...props.hijo2}/>
        </div>
    </div>
  );
}

ReactDOM.render(
    <Padre {...propiedades}/>,
    document.getElementById('root')
);