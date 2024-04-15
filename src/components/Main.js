import { useContext } from "react"
import loginContext from "../index.js";
import { Navigate } from "react-router-dom";
import Header from "./Header.js";
import { GrConfigure } from "react-icons/gr";
import { FaFolderPlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { MdFolderOff } from "react-icons/md";

const linksHeader = [{id: 4, nombre: "Configuración de la cuenta", url: "/account/config", icon: <GrConfigure className="icons" />}, {id: 3, nombre: "Citas Agendadas", url: "/citas", icon: <FaFolderPlus className="icons"/> }, {id: 2, nombre: "Cancelar Cita", url: "/citas/cancelar", icon: <MdFolderOff className="icons"/>}, {id: 1, nombre: "Agendar Cita", url: "/citas/agendar", icon: <MdAssignmentAdd className="icons"/>}];
const Main = () => {
    const context = useContext(loginContext);
    const { correo, telefono } = context.userData;
    const isLogged = context.isLogged;
    return (
        <>
        {isLogged ? <>
        <Header elementos={linksHeader} email={correo}></Header>
        <h1>Bienvenido! {correo}, tu teléfono es: {telefono} y estás actualmente logeado!</h1>
        <br></br>
        </> : <Navigate to={"/login"} replace={true}></Navigate>}
        </>
    )
}


export default Main