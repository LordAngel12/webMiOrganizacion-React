// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  // const [mostrar, actualizarMostrar] = useState(true);
  // const manejarClick = () => {
  //  console.log("Mostrar/Ocultar elemento", !mostrar);
  //  actualizarMostrar(!mostrar);
  // };

  console.log(props);

  return (
    <section className="orgSection">
      <h3 className="titulo">Mi organizacion</h3>
      <img src="/img/bottonAdd.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
