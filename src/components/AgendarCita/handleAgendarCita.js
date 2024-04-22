import utils from "../../authorization_submits/index.js";
import RequestURL from "../../utils/RequestURL";
import axios from "axios";


const handleAgendarCita = async (e) => {
    e.preventDefault();
    const {select1, select2} = {select1: document.getElementById("select1").value, select2: document.getElementById("select2").value};
    try {
        const request = await axios({
            withCredentials: true,
            url: `${RequestURL}/api/consultas/create`,
            method: "POST",
            headers: {
                "Include": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                id_tipoconsulta: select1,
                id_tipoanimal: select2,
                fecha: new Date()
            }
        });
        await utils.summonSuccessMessage(request.data.message);
    } catch(err) {
        console.log(JSON.stringify(err));
        if(err.code === "ERR_NETWORK") {
            await utils.summonErrorMessage("Ha ocurrido un error al intentar acceder a la API del servidor, al parecer se encuentra caida.")
        } else {
            await utils.summonErrorMessage(err.response.data.message)
        }
    }
}

export default handleAgendarCita;