import { useContext } from "react"
import loginContext from "../../index.js";
import { Navigate } from "react-router-dom";
import Header from "../Header/Header.js";
import { Link } from 'react-router-dom';
import { GrConfigure } from "react-icons/gr";
import { FaFolderPlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { MdFolderOff } from "react-icons/md";
import "./Main.css";
import veterinarioSvg from '../../assets/vet-png.png'

const linksHeader = [{id: 4, nombre: "Configuración de la cuenta", url: "/account/config", icon: <GrConfigure className="icons" />}, {id: 3, nombre: "Citas Agendadas", url: "/citas", icon: <FaFolderPlus className="icons"/> }, {id: 2, nombre: "Cancelar Cita", url: "/citas/cancelar", icon: <MdFolderOff className="icons"/>}, {id: 1, nombre: "Agendar Cita", url: "/citas/agendar", icon: <MdAssignmentAdd className="icons"/>}];
const Main = () => {
    const context = useContext(loginContext);
    const { correo, isAdmin } = context.userData;
    const isLogged = context.isLogged;
    return (
        <>
        {isLogged ? <>
        <Header elementos={linksHeader} email={correo}></Header>
        <section className="mainSection">
            <div>
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

        </> : <Navigate to={"/login"} replace={true}></Navigate>}
        </>
    )
}


export default Main