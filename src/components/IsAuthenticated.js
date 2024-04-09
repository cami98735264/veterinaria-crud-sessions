import { useEffect, useState } from "react";
import loginContext from "../index.js";
import axios from "axios";

const IsAuthenticated = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const fetchIsAuthenticated = async () => {
            try {
                const request = await axios.get("http://localhost:3000/api/auth/check", {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        "Include": "application/json"
                    }
                });
                setUserData(request.data.userData)
                setIsLoggedIn(true);
            } catch(err) {
                setIsLoggedIn(false);
            }
        }
        fetchIsAuthenticated();
    }, [])
    return <loginContext.Provider value={{ isLogged: isLoggedIn, userData: userData }}>{children}</loginContext.Provider>;

}

export default IsAuthenticated