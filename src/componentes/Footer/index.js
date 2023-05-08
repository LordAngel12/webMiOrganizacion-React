import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://github.com/LordAngel12">
          <img src="/img/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/miguelangelpotes/">
          <img src="./img/linkedin2.png" alt="Linkedin" />
        </a>
      </div>
      <img src="./img/FaviconICo.png" alt="org" />
      <strong className="">Desarrollado por AngelDev</strong>
    </footer>
  );
};

export default Footer;
