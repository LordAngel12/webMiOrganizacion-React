import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador , crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manjenar Envio");

    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };

    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo =(e) =>{
  e.preventDefault()
  crearEquipo({titulo ,colorPrimario:color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborado.</h2>
        <Campo
          titulo="Nombre"
          placeholder="ingresar nombre "
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="ingresar puesto "
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="ingresar enlace de foto "
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="ingresar titulo "
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="color"
          placeholder="ingresar el color hex "
          required
          valor={color}
          actualizarValor={actualizarColor}
          type ="color"
        />
        <Boton texto="Registrar" />
      </form>
    </section>
  );
};

export default Formulario;
