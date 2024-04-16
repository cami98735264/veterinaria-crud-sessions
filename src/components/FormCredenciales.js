import loginContext from "../index.js";
import { useContext } from "react";
import { Navigate } from 'react-router-dom';

const FormCredenciales = (props) => {
    const context = useContext(loginContext);
    console.log(context);
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
                    <input type="email" id="email" required name="email"></input>
                </div>
                <div>
                    <label htmlFor="contraseña">Ingresa tu contraseña:</label>
                    <input type="password" id="contraseña" required name="contraseña"></input>
                </div>
                {props.esRegistro && <>
                    <div>
                    <label htmlFor="telefono">Ingresa tu número de teléfono:</label>
                    <input type="tel" required name="telefono" id="telefono"></input>
                </div>
                <div>
                    <label htmlFor="direccion">Ingresa tu dirección:</label>
                    <input type="text" required name="direccion" id="direccion"></input>
                </div>
                </>} 
            </div>
            <div className="bottom-credenciales">
                <button className="boton-submit-credenciales">{props.motivo}</button>
                <span className="span-link-credentials"><a href={props.motivo === "Iniciar Sesión" ? "/#/signup" : "/#/login"}>{props.motivo === "Iniciar Sesión" ? "Registrarse" : "Iniciar Sesión"}</a></span>
            </div>
        </form> : <Navigate to={"/"} replace={true}></Navigate>}
        </>
  )   

}

export default FormCredenciales;