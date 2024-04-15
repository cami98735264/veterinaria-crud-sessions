import { Link } from "react-router-dom";
import "./css/Header.css";
import axios from "axios";
import utilFunctions from "../authorization_submits/index.js";
import { FaBars, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

import { useState } from "react";


const Header = ({ elementos, email }) => {
    const [toggleMobileList, setToggleMobileList] = useState(false);
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
            await utilFunctions.summonSuccessMessage(response.data.message);
            window.location.href = "/login";
        } catch(err) {
            if(err.message === "Network Error") {
                await utilFunctions.summonErrorMessage("Ha ocurrido un error al intentar acceder a la API del servidor, al parecer se encuentra caida.")
            } else {
                await utilFunctions.summonErrorMessage(err.response.data.message);
            }
        }
    }
    return(
        <>
        <header className="mainNav">
            <div className="main">
                <div>
                    <ul>
                        <li>
                        <Link to="/"  className="a-span-text-icons"><FaUserCircle className="icons" /> {email}</Link> 
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {elementos.map(x => <li key={x.id}>
                            <span>
                                <Link to={x.url}>{x.icon} {x.nombre}</Link>
                            </span>
                            </li>)}
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link onClick={handleLogout}  className="a-span-text-icons"><FaSignOutAlt className="icons"/>Cerrar Sesión</Link></li>
                    </ul>
                </div>
            </div>
            <div className="main-mobile">
                <div className="main-mobile-minimized">
                    <span><Link to="/"><FaUserCircle className="icons" /> {email}</Link></span>
                    <span className="icono-barras" onClick={() => {
        const set = toggleMobileList ? false : true;
        const mobileListOption = toggleMobileList ? "none" : "unset";

        setToggleMobileList(set);
        document.getElementById("main-mobile-list").style.display = mobileListOption;
    }}><FaBars/></span>
                </div>
                <div className="main-mobile-list" id="main-mobile-list">
                    <div>
                        <ul>
                            {elementos.map(x => <li key={x.id}><Link to={x.url}>{x.icon} {x.nombre}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link onClick={handleLogout}  className="a-span-text-icons"><FaSignOutAlt className="icons"/> Cerrar Sesión</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </header>
        </>
    )
}

export default Header;