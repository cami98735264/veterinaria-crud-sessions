import { useEffect, useState } from "react";
import LoggerHandler from "../../utils/LoggerHandler.js";
import CrearFormulario from "../CrearFormulario/CrearFormulario.js";
import axios from "axios";
import RequestURL from "../../utils/RequestURL.js";
import handleCancelarCita from "./handleCancelarCita.js";


const CancelarCita = () => {
    const [elementos, setElementos] = useState([]);
    const [consultas, setConsultas] = useState([]);
    useEffect(() => {
        const getUsuarioCitas = async () => {
            try {
                const request = await axios.get(`/api/consultas/get`, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        "Include": "application/json"
                    }
                });
                const consultasObtenidas = request.data.data;
                setConsultas(consultasObtenidas);
            } catch(err) {
                console.log(err);
                setElementos([]);
            }
        }
        getUsuarioCitas();
    }, []);
    useEffect(() => {
        const setTipoElementos = () => {
            setElementos([
                {
                    key: 1,
                    type: "select",
                    name: "select1",
                    label: "Selecciona la cita a cancelar:",
                    options: [{value: "", text: "Seleccione una cita"}, ...consultas.map(x => {
                        const parsedDate = new Date(x.fecha_entrada);
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
                        // put that in a dictionary to organize the data
                        
                        return  {value: x.id_consulta, text: `${x.id_consulta} | ${formattedDate} | ${x.tipo_consulta.nombre} | ${x.animale.nombre} | ${x.tipo_consulta.precio}`}

                    })]
                }
            ])
        }
        setTipoElementos();
    }, [consultas])
    return (
        <LoggerHandler>
            <CrearFormulario idFormulario={"cancelar-cita"} elementos={elementos} botonTexto={"Cancelar Cita"} onSubmit={handleCancelarCita} titulo={"Cancelar citas previamente hechas"}></CrearFormulario>
        </LoggerHandler>
    )


}


export default CancelarCita;