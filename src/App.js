import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const equipos = [
    {
      titulo: "Programación",
      ColorPrimario: "#57C278",
      ColorSegundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      ColorPrimario: "#82CFFA",
      ColorSegundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      ColorPrimario: "#A6D157",
      ColorSegundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      ColorPrimario: "#E06B69",
      ColorSegundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      ColorPrimario: "#DB6EBF",
      ColorSegundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      ColorPrimario: "#FFBA05",
      ColorSegundario: "#FFF5D9",
    },

    {
      titulo: "Innovación y Gestión",
      ColorPrimario: "#FF8A29",
      ColorSegundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario  equipos={equipos.map((equipo) => equipo.titulo )}/> : <div></div>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => {
        console.log("Equipo :", equipo);
        return <Equipo datos={equipo} key={equipo.titulo} />;
      })}
    </div>
  );
}

export default App;
