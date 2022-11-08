import '../styles/Boton.css';
import '../styles/BotonClear.css';


const BotonClear=(props)=>{
  return(
    <div className='boton-contenedor clear' onClick={props.manejarClear}>{props.children}</div>
  )
}

export default BotonClear