import "./ListaOpciones.css";

const ListaOpciones = () => {
  const equipos = [
    "Programación",
    "Front Programación",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  return (
    <div className="Lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
