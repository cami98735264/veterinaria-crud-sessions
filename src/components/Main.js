import { useContext } from "react"
import loginContext from "../index.js";
import { Navigate } from "react-router-dom";
import axios from "axios"
const Main = () => {
    const handleLogout = async () => {
        try {
            const response = await axios({
                url: "http://localhost:3000/api/auth/logout",
                method: "POST",
                withCredentials: true,
                headers: {
                    Include: "application/json",
                    "Content-Type": "application/json"
                }
            });
            window.alert(response.data.message);
            window.location.href = "/login";
        } catch(err) {
            window.alert(err.response.data.message)
        }
    }
    const context = useContext(loginContext);
    const userData = context.userData;
    const isLogged = context.isLogged
    return (
        <>
        {isLogged ? <>
        <h1>Bienvenido! {userData.correo}, tu teléfono es: {userData.telefono} y estás actualmente logeado!</h1>
        <br></br>
        <button onClick={handleLogout}>¡Cerrar sesión!</button>
        </> : <Navigate to={"/login"} replace={true}></Navigate>}
        </>
    )
}


export default Main