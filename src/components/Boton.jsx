import React from 'react';
import '../styles/Boton.css';

function Boton(props){
  const esOperador=(contenido)=>{
    return isNaN(contenido) && contenido!= "=" && contenido!= "CLEAR"
  }

  const esIgual= (contenido)=>{
    return contenido == "="
  }

  return(
    <div className={`boton-contenedor ${esOperador(props.children)? 'operador' :""}${esIgual(props.children) ? 'igual' : ""}`.trim()} onClick={()=> props.manejarClicks(props.children)}>
    {props.children}
    </div>
  )
}

export default Boton