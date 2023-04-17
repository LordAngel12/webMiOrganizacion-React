import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manjenar Envio", e);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborado.</h2>
        <CampoTexto titulo="Nombre" placeholder="ingresar nombre " required />
        <CampoTexto titulo="Puesto" placeholder="ingresar puesto "required/>
        <CampoTexto titulo="Foto" placeholder="ingresar enlace de foto "required />
        <ListaOpciones />
        <Boton texto="Crear" />
      </form>
    </section>
  );
};

export default Formulario;
