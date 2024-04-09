import { useContext } from "react"
import loginContext from "../index.js";

const Page404 = ({ mensajeError }) => {
    const contexto = useContext(loginContext);
    console.log(contexto)
    return (<h1>{mensajeError}</h1>)
}

export default Page404