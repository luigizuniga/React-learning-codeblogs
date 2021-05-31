import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
};

class Hijo1 extends React.Component {
  // Declaracion del State - Fuera del Contructor
  state={
    titulo:"Hijo 1",
    subtitulo:"Contador",
    cuenta:1
  }

  constructor(props) {
    super(props);
    this.dismunuir = this.dismunuir.bind(this);
    this.aumentar = this.aumentar.bind(this);
    //#region Declaracion State - Opcional

    /* Declaracion del state - Opcional dentro del Constructor
     this.state = {
     titulo:'Hijo 1',
     subtitulo: 'Contador (Componente Funcional)',
     cuenta: 1
    */

    //#endregion
   }

   //#region Metodos de Clase
    /* Metodos de Clase
     Declaracion de metodos que usara el State
     * No heredan el this de la clase
     * Para el uso de los metodos se hace uso de bind(this)
     * Se recomienda utilozar arrow functional para los metodos
     */
    //#endregion

  dismunuir(){
    if(this.state.cuenta <= 0){
      this.setState({
        ...this.state,
        cuenta:0
      });
    }else{
      this.setState({
        ...this.state,
        cuenta:this.state.cuenta - 1
      });
    }
  }

  aumentar=()=>{
    this.setState({
      ...this.state,
      cuenta: this.state.cuenta+1
    });
  }

  render(){
    return (
      <div className="componente">
        <h2>{this.state.titulo}</h2>
        <h3>{this.state.subtitulo}</h3>
        <div className="controles">
          <span className="control" onClick={ this.dismunuir }>-</span>
          <span className="control" onClick={ this.aumentar }>+</span>
          {
          //#region uso de SetState Opcionar
          /* <span className="control" onClick={ ()=>{
            this.state.cuenta++; // No realizar de esta manera utilizar setState
            this.forceUpdate(); // Esto forza a la actualizacion del componente
          }}>+</span> */
            //#endregion
          }
        </div>
        <p>{this.state.cuenta}</p>
      </div>
    );
  }
}

function Hijo2(props) {
  // Declaracion de State - Componente Funcional
  const [ state, setState ] = useState(
    {
      titulo: "Hijo 2",
      subtitulo: "Contador (Componente de Clase)",
      cuenta: 10
    }
  );


  //#region Modificacion de State en un componente Funcional
  /*
   * Para modificar el stado solo debemos llamar a la funcion que declaramos
   * para este tipo de componente no existe this
  */
  //#endregion
  const disminuir = () =>{
    if(state.cuenta <= 0){
      setState({
        ...state,
        cuenta: 0
      })
    }else{
      setState({
        ...state,
        cuenta:state.cuenta - 1
      })
    }
  }

  const aumentar =()=>{
    setState({
      ...state,
      cuenta:state.cuenta + 1
    })
  }

  return (
    <div className="componente">
      <h2>{state.titulo}</h2>
      <h3>{state.subtitulo}</h3>
      <div className="controles">
        <span className="control" onClick={ disminuir }>-</span>
        <span className="control" onClick={ aumentar }>+</span>
      </div>
      <p>{state.cuenta}</p>
    </div>
  );
}

function Padre(props) {
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


// #region Metodos del Ciclo de Vida
/* componentDidMount
 * componentWillUnmount

Estos métodos nos permiten lanzar una acción al momento en que se monta un componente y otra acción cuando se desmonta.

*/
// #endregion

class HijoLifeCycle extends React.Component {
  state={
    tituloH1: "Ciclo de Vida - DidMount and Unmount",
    tituloH2: "Hijo 1",
    subtitulo: "Contador (Componente Clase)",
    cuenta: 1
  }

  intervalo = null;

  /*Inicializa un intervalo después de que el componente es montado*/
  componentDidMount(){
    console.log("componentDidMount");
    this.intervalo = setInterval(() => {
      this.setState({
        cuenta:this.state.cuenta + 1
      });
      console.log(this.state);
    },1000)
  }

  /* Elimina el intervalo despues que el componente es desmontado*
   * con esto no dejar porcesos en basura que consuman recursos innecesarios
  */
  componentWillUnmount(){
    console.log("componentWillUnmount");
    clearInterval(this.intervalo);
  }

  render(){
    return(
      <div className="componente">
        <h1>{ this.state.tituloH1 }</h1>
        <h2>{ this.state.tituloH2 }</h2>
        <p>{ this.state.subtitulo }</p>
      </div>
    )
  }
}


function PadreLifeCycle(props){
  const [ ver, setVer ] = useState(false)
  const verComponente =()=>{
    setVer(!ver);
  }

  const title = "Componente Padre";
  return(
    <div className="padre">
      <h1>{ title }</h1>
     <button onClick={ verComponente }>
       { ver ? "Ocultar" : "ver" }
     </button>
     <div className="componentes">
      {
        ver ? (<HijoLifeCycle />) : ("")
      }
     </div>
    </div>
  )

}



ReactDOM.render(
  // <Padre {...propiedades} />,
  <PadreLifeCycle {...propiedades } />,
  document.getElementById('root')
);