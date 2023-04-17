import { useState } from "react";
import "./MiOrg.css";

const MiOrg = () => {
  const [mostrar, actualizarMostrar] = useState(true);
  const manejarClick = () => {
   console.log("Mostrar/Ocultar Elemento", !mostrar);
   actualizarMostrar(!mostrar);
  };

  return (
    <section className="orgSection">
      <h3 className="titulo">Mi organizacion</h3>
      <img src="/img/bottonAdd.png" alt="add" onClick={manejarClick}></img>
    </section>
  );
};

export default MiOrg;
