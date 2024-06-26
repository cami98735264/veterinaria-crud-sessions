import loginContext from "../../index.js";
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import './FormCredenciales.css';

const FormCredenciales = (props) => {
    const context = useContext(loginContext);
    const generateRedirect = (keyword) => process.env.REACT_APP_PRODUCTION === "true" ? "/veterinaria-crud-sessions/#/" + keyword : "/#/" + keyword;               
    
    return (
        <>
        {!context.isLogged ?
        <form className="formCredenciales" id={props.idFormulario} onSubmit={props.onSubmit}>
            <div className="header-credenciales">
                <h1>¡Ingresa tus datos para {props.motivo}!</h1>
            </div>
            <div className="inputs-credenciales">
                <div>
                    <label htmlFor="email">Ingresa tu email:</label>
                    <input type="email" id="email" required name="email" placeholder="juan123@gmail.com"></input>
                </div>
                <div>
                    <label htmlFor="contraseña">Ingresa tu contraseña:</label>
                    <input type="password" id="contraseña" required name="contraseña" placeholder="$#hG_as$d@>_lty0"></input>
                </div>
                {props.esRegistro && <>
                    <div>
                    <label htmlFor="telefono">Ingresa tu número de teléfono:</label>
                    <input type="tel" required name="telefono" id="telefono" placeholder="312569xxxx"></input>
                </div>
                <div>
                    <label htmlFor="direccion">Ingresa tu dirección:</label>
                    <input type="text" required name="direccion" id="direccion" placeholder="Avenida 3ra, Calle 51, Torres del Peñón. Bloque 21, Casa 5"></input>
                </div>
                </>} 
            </div>
            <div className="bottom-credenciales">
                <button className="boton-submit-credenciales">{props.motivo}</button>
                <span className="span-link-credentials"><a href={props.motivo === "Iniciar Sesión" ? generateRedirect("signup") : generateRedirect("login")}>{props.motivo === "Iniciar Sesión" ? "Registrarse" : "Iniciar Sesión"}</a></span>
            </div>
        </form> : <Navigate to={"/"} replace={true}></Navigate>}
        </>
  )   

}

export default FormCredenciales;