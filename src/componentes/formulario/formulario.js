import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manjenar Envio");

    let datosAenviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };

    console.log(datosAenviar);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborado.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="ingresar nombre "
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="ingresar puesto "
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="ingresar enlace de foto "
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
          valor={equipo}
          actualizarEquipo={actualizarEquipo} />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};

export default Formulario;
