import axios from "axios";
import RequestURL from "../../utils/RequestURL";
import utils from "../../authorization_submits/index.js";

const handleCancelarCita = async (e) => {
    e.preventDefault();
    const {select1} = {select1: document.getElementById("select1").value};
    try {
        const request = await axios({
            withCredentials: true,
            url: `${RequestURL}/api/consultas/delete`,
            method: "POST",
            headers: {
                "Include": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                id_consulta: select1
            }
        });
        // remove options from select
        document.getElementById("select1").remove(document.getElementById("select1").selectedIndex);
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


export default handleCancelarCita;