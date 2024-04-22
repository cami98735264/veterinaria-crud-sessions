import "./CrearFormulario.css";

const CrearFormulario = ({ elementos, onSubmit, idFormulario, titulo, botonTexto }) => {
    /*
    {
                    type: "select",
                    label: "Seleccione el tipo de consulta que desea agendar:",
                    options: [
                        {value: "", text: "Seleccione un tipo de consulta"},
                        ...tipoConsultas.map(x => ({value: x.id_tipo, text: x.nombre}))
                    ]
                },
                {
                    type: "select",
                    label: "Seleccione el tipo de animal que posee:",
                    options: [
                        {value: "", text: "Seleccione un tipo de animal"},
                        ...animales.map(x => ({value: x.animal_id, text: x.nombre}))
                    ]
                }
    */
    return (

        <form className="custom-formulario" id={idFormulario}>
            <h3>{titulo}</h3>
            {elementos.map(elemento =>{
                switch(elemento.type) {
                    case "select":
                        return (
                            <div key={elemento.key}>
                                <label htmlFor={elemento.name}>{elemento.label}</label>
                                <select name={elemento.name} id={elemento.name}>
                                    {elemento.options.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                                </select>
                            </div>
                        )
                    case "input":
                        return (
                            <div key={elemento.key}>
                                <label htmlFor={elemento.name}>{elemento.label}</label>
                                <input type={elemento.inputType} name={elemento.name} id={elemento.name}></input>
                            </div>
                        )
                    default:
                        return null;
                }
            })}
            <button onClick={onSubmit} type="submit">{botonTexto}</button>
        </form>
    )
}

export default CrearFormulario;