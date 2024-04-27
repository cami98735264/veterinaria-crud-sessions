import { Navigate } from "react-router-dom";
import loginContext from "../index.js";
import { useContext, useEffect } from "react";
import Header from "../components/Header/Header.js";
import linksHeader from "./linksHeader.js";


const LoggerHandler = ({ children, redirectUrl }) => {
const context = useContext(loginContext);
const isLogged = context.isLogged;
if(context.completed) {
    return (
        <>
        {isLogged ? <>
        <Header email={context.userData.correo} elementos={linksHeader}></Header>
        {children}
        </> : <Navigate to={!redirectUrl ? "/login" : redirectUrl}></Navigate>}
        </>
    )
    }
    
}
export default LoggerHandler;