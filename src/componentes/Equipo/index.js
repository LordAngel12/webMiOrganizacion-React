import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
  const { ColorPrimario, ColorSegundario, titulo } = props.datos;
  const { colaboradores } = props;

  const obj = {
    backgroundColor: ColorSegundario,
  };
  const estilosTitulo = { borderColor: ColorPrimario };

  return (
    <section className="equipo" style={obj}>
      <h3 style={estilosTitulo}> {titulo} </h3>
      <div className="colaboradores">
        
        {
        colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index}/>
        )}
      </div>
    </section>
  );
};
export default Equipo;
