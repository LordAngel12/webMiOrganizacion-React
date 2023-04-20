import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front Programación",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const manejarCambio = (e) => {
    console.log("cambio" , e.target.value)
    props.actualizarEquipo (e.target.value)

  }

  return (
    <div className="Lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Selecionar Equipo</option>
        {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>
        )}
      </select>
    </div>
  );
};

export default ListaOpciones;
