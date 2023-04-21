import "./Equipo.css";

const Equipo = (props) => {


  const{ ColorPrimario ,ColorSegundario , titulo } = props.datos


  const estilosTitulo = { borderColor:ColorPrimario}

  const obj = {
    backgroundColor: ColorSegundario
  }

  return (
    <section className="equipo" style={obj}>
      <h3 style={estilosTitulo}> {titulo} </h3>
      <div className="Colaboradores"></div>
    </section>
  );
};

  

export default Equipo;