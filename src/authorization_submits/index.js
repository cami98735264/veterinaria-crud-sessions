import axios from 'axios';
import Swal from 'sweetalert2';

const summonErrorMessage = async (message) => {
    await Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        footer: '<a href="#">¿Por qué sucedió esto?</a>'
      });
};

const summonSuccessMessage = async (message) => {
    await Swal.fire({
        icon: "success",
        title: "¡Exito!",
        text: message,
      });
}


const onSubmitLogin = async (e) => {

    e.preventDefault();
    const {email, contraseña} = {email: document.getElementById("email").value, contraseña: document.getElementById("contraseña").value};
    try {
        // eslint-disable-next-line
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
        await summonSuccessMessage(request.data.message);
        window.location.href = "/";
    } catch(err) {
        console.log(JSON.stringify(err.response.status))
        if(err.response.status === 404) {
            await summonErrorMessage("Ha ocurrido un error al intentar acceder a la API del servidor, al parecer se encuentra caida.")
        } else {
            await summonErrorMessage(err.response.data.message)
        }
    }
}


const onSubmitRegister = async (e) => {
    e.preventDefault();
    const {email, contraseña, telefono, direccion} = {email: document.getElementById("email").value, contraseña: document.getElementById("contraseña").value, telefono: document.getElementById("telefono").value, direccion: document.getElementById("direccion").value }
    try {
        // eslint-disable-next-line
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
        if(err.response.status === 404) {
            await summonErrorMessage("Ha ocurrido un error al intentar acceder a la API del servidor, al parecer se encuentra caida.")
        } else {
            await summonErrorMessage(err.response.data.message)
        }
    }
}

const submitFunctions = { onSubmitLogin, onSubmitRegister, summonErrorMessage, summonSuccessMessage }
export default submitFunctions;