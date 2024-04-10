import { useContext } from "react"
import loginContext from "../index.js";
import { Navigate } from "react-router-dom";
import Header from "./Header.js";
import { GrConfigure } from "react-icons/gr";
import { FaFolderPlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { MdFolderOff } from "react-icons/md";


import utilFunctions from 
"../authorization_submits/index.js";

import axios from "axios";
const linksHeader = [{id: 4, nombre: "Configuración de la cuenta", url: "/account/config", icon: <GrConfigure style={{marginRight: "10px"}}/>}, {id: 3, nombre: "Citas Agendadas", url: "/citas", icon: <FaFolderPlus style={{marginRight: "10px"}}/> }, {id: 2, nombre: "Cancelar Cita", url: "/citas/cancelar", icon: <MdFolderOff style={{marginRight: "10px"}}/>}, {id: 1, nombre: "Agendar Cita", url: "/citas/agendar", icon: <MdAssignmentAdd style={{marginRight: "10px"}}/>}];
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