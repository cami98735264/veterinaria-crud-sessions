import { useContext } from "react"
import loginContext from "../../index.js";
import { Link } from 'react-router-dom';
import "./Main.css";
import veterinarioSvg from '../../assets/vet-png.png'
import linksHeader from "../../utils/linksHeader.js";
import LoggerHandler from "../../utils/LoggerHandler.js";

const Main = () => {
    const context = useContext(loginContext);
    const { isAdmin } = context.userData;
    const isLogged = context.isLogged;
    console.log("Estado " + isLogged)
    return (
        <LoggerHandler redirectUrl={"/login"} isLogged={isLogged}>
            <section className="mainSection">
                <div className="img-main">
                    <img src={veterinarioSvg} alt="veterina-img"></img>
                </div>
                <div className='text-mainsection-container'>
                    <h3>¡Bienvenido a nuestro portal de veterinaria señor {isAdmin ? "adminitrador" : "usuario"}!</h3>
                    <p>En el siguiente portal, podrá tener la capacidad de hacer las siguientes acciones:</p>
                    <ul>
                        {linksHeader.map(elemento => <li key={elemento.id}>➜ <Link to={elemento.url}>{elemento.nombre}</Link></li>)}
                    </ul>
                </div>
            </section>
        </LoggerHandler>
    )
}


export default Main