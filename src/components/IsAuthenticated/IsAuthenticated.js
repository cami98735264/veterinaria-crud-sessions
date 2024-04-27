import { useEffect, useState } from "react";
import loginContext from "../../index.js";
import axios from "axios";
import RequestURL from "../../utils/RequestURL.js";

const IsAuthenticated = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [completed, setCompleted] = useState(false);
    useEffect(() => {
        const fetchIsAuthenticated = async () => {
            try {
                const request = await axios.get(`/api/auth/check`, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        "Include": "application/json"
                    }
                });
                setUserData(request.data.userData)
                setIsLoggedIn(true);
                setCompleted(true);
            } catch(err) {
                setIsLoggedIn(false);
                setCompleted(true);
            }
        }
        fetchIsAuthenticated();
    }, [])
    return <loginContext.Provider value={{ isLogged: isLoggedIn, userData: userData, completed }}>{children}</loginContext.Provider>;

}

export default IsAuthenticated