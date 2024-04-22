
import { GrConfigure } from "react-icons/gr";
import { FaFolderPlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { MdFolderOff } from "react-icons/md";

const linksHeader = [{id: 4, nombre: "Configuración de la cuenta", url: "/account/config", icon: <GrConfigure className="icons" />}, {id: 3, nombre: "Citas Agendadas", url: "/citas/listar", icon: <FaFolderPlus className="icons"/> }, {id: 2, nombre: "Cancelar Cita", url: "/citas/cancelar", icon: <MdFolderOff className="icons"/>}, {id: 1, nombre: "Agendar Cita", url: "/citas/agendar", icon: <MdAssignmentAdd className="icons"/>}];

export default linksHeader;