import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo />
      <Equipo/>
      <Equipo/>
      <Equipo/>
    </div>
  );
}

export default App;
