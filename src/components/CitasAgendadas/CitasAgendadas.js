import { useContext, useEffect, useState } from "react"
import loginContext from "../../index.js";
import LoggerHandler from "../../utils/LoggerHandler.js";
import CrearTabla from "../CrearTabla/CrearTabla.js";
import axios from "axios";
import RequestURL from "../../utils/RequestURL.js";
import './CitasAgendadas.css';
const CitasAgendadas = () => {
    const [consultas, setConsultas] = useState([]);
    useEffect(() => {
        const fetchConsultas = async () => {
            try {
                const request = await axios.get(`${RequestURL}/api/consultas/get`, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        "Include": "application/json"
                    }
                });
                const toSet = request.data.data.map(consulta => {
                    const parsedDate = new Date(consulta.fecha_entrada);
                    const hours = parsedDate.getHours();
                    const parsedDataInfo = {
                        day: parsedDate.getDate().toString().padStart(2, '0'),
                        month: (parsedDate.getMonth() + 1).toString().padStart(2, '0'),
                        year: parsedDate.getFullYear(),
                        hours: parsedDate.getHours(),
                        minutes: parsedDate.getMinutes().toString().padStart(2, '0'),
                        ampm: hours >= 12 ? 'p.m.' : 'a.m.',
                        formattedHours: hours % 12 === 0 ? 12 : hours % 12
                    }
                    const formattedDate = `${parsedDataInfo.day}/${parsedDataInfo.month}/${parsedDataInfo.year} ${parsedDataInfo.formattedHours}:${parsedDataInfo.minutes} ${parsedDataInfo.ampm}`
                    return {
                        "id_usuario": consulta.id_usuario,
                        "id_consulta": consulta.id_consulta,
                        "tipo_animal": consulta.animale.nombre,
                        "tipo_consulta": consulta.tipo_consulta.nombre,
                        "fecha": formattedDate,
                        "estado": consulta.estado
                    }
                });
                setConsultas(toSet);
                console.log(consultas);
            } catch(err) {
                console.log(err);
                setConsultas([]);
            }
        }
        fetchConsultas();
    }, []);

    const tableTitles = ["ID de Usuario", "ID de Consulta", "Tipo de Animal", "Tipo de Consulta", "Fecha", "Estado"];

    return (
        <LoggerHandler redirectUrl={"/login"}>
            <h1 id="citas-agendadas-title">Citas Agendadas</h1>
            <CrearTabla titulos={tableTitles} elementos={consultas}></CrearTabla>
        </LoggerHandler>
    )
}


export default CitasAgendadas;