import loginContext from "../../index.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import RequestURL from "../../utils/RequestURL.js";
import CrearFormulario from "../CrearFormulario/CrearFormulario.js";
import handleAgendarCita from "./handleAgendarCita.js";
import LoggerHandler from "../../utils/LoggerHandler.js";

const AgendarCita = () => {
    const context = useContext(loginContext);
    const [elementos, setElementos] = useState([]);
    const [tipoConsultas, setTipoConsultas] = useState([]);
    const [animales, setTipoAnimales] = useState([]);
    useEffect(() => {
        const getTipoAnimales = async () => {
            try {
                const request = await axios.get(`${RequestURL}/api/animales/get`, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        "Include": "application/json"
                    }
                });
                setTipoAnimales(request.data.data);
            } catch(err) {
                console.log(err);
                setElementos([]);
            }
        }
        const getTipoConsultas = async () => {
            try {
                const request = await axios.get(`${RequestURL}/api/tipoconsultas/get`, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        "Include": "application/json"
                    }
                });
                setTipoConsultas(request.data.data);
            } catch(err) {
                console.log(err);
                setElementos([]);    
            }
        }
        getTipoConsultas();
        getTipoAnimales();
    }, []);
    useEffect(() => {
        const setTipoElementos = () => {
            setElementos([
                {
                    key: 1,
                    type: "select",
                    name: "select1",
                    label: "Seleccione el tipo de consulta que desea agendar:",
                    options: [
                        {value: "", text: "Seleccione un tipo de consulta"},
                        ...tipoConsultas.map(x => ({value: x.id_tipo, text: x.nombre}))
                    ]
                },
                {
                    key: 2,
                    type: "select",
                    name: "select2",
                    label: "Seleccione el tipo de animal que posee:",
                    options: [
                        {value: "", text: "Seleccione un tipo de animal"},
                        ...animales.map(x => ({value: x.animal_id, text: x.nombre}))
                    ]
                }
            ]);
            console.log(elementos);
        }
        if(tipoConsultas.length > 0 && animales.length > 0) {
            setTipoElementos();
        };
    }, [tipoConsultas]);
    return (
        <LoggerHandler>
            <section>
                <CrearFormulario onSubmit={handleAgendarCita} idFormulario={"agendar-cita"}  titulo={"¡Agenda tu cita ahora!"} botonTexto={"Agendar Cita"} elementos={elementos}></CrearFormulario>
            </section>
        </LoggerHandler>
    );

}

export default AgendarCita;