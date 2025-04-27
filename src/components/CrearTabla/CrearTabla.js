import "./CrearTabla.css";


const CrearTabla = ({ titulos, elementos }) => {
    /* [{
    "id_usuario": 9,
    "id_consulta": 5,
    "tipo_animal": "Hurón",
    "tipo_consulta": "Control de peso",
    "fecha": "21/04/2024 6:00 p.m.",
    "estado": true
}, {
    "id_usuario": 2,
    "id_consulta": 10,
    "tipo_animal": "Hurón",
    "tipo_consulta": "Control de peso",
    "fecha": "21/04/2024 6:00 p.m.",
    "estado": true
}] */


    // The expected output is a table with the following structure:
    // | ID de Usuario | ID de Consulta | Tipo de Animal | Tipo de Consulta | Fecha | Estado |
    // | 9             | 5              | Hurón          | Control de peso  | 21/04/2024 6:00 p.m. | true |
    // | 10            | 6              | Perro          | Control de peso  | 21/04/2024 6:00 p.m. | true |

    // The table should be created using the <table> tag and the <tr> and <td> tags for the rows and cells respectively.


    return (
        <table>
            <thead>
                <tr>
                    {titulos.map((titulo, index) => <th key={index}>{titulo}</th>)}
                </tr>
            </thead>
            <tbody>
                {elementos.map((elemento, index) => (
                    <tr key={index}>
                        <td>{elemento.id_usuario}</td>
                        <td>{elemento.id_consulta}</td>
                        <td>{elemento.tipo_animal}</td>
                        <td>{elemento.tipo_consulta}</td>
                        <td>{elemento.fecha}</td>
                        <td>{elemento.estado.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
    }

export default CrearTabla;