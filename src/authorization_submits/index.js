import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const onSubmitLogin = async (e) => {
    e.preventDefault();
    const {email, contraseña} = {email: document.getElementById("email").value, contraseña: document.getElementById("contraseña").value};
    try {
        const request = await axios({
            withCredentials: true,
            url: "http://localhost:3000/api/auth/login",
            method: "POST",
            headers: {
                "Include": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                email: email,
                contraseña: contraseña
            }

        })
        console.log(request.data)
        window.location.href = "/";
    } catch(err) {
        window.alert(err.response.data.message);
    }
}


const onSubmitRegister = async (e) => {
    e.preventDefault();
    const {email, contraseña, telefono, direccion} = {email: document.getElementById("email").value, contraseña: document.getElementById("contraseña").value, telefono: document.getElementById("telefono").value, direccion: document.getElementById("direccion").value }
    try {
        const request = await axios({
            withCredentials: true,
            url: "http://localhost:3000/api/auth/register",
            method: "POST",
            headers: {
                "Include": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                email: email,
                contraseña: contraseña,
                telefono: telefono,
                direccion: direccion
            }

        })
        window.location.href = "/";
    } catch(err) {
        window.alert(err.response.data.message);
    }
}

export default { onSubmitLogin, onSubmitRegister }