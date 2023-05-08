import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/github.png" alt='GitHub' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="./img/linkedin2.png" alt='Linkedin' />
            </a>
        </div>
        <img src='./img/FaviconICo.png' alt='org' />
        <strong className="">Desarrollado por AngelDev</strong>
    </footer>
}

export default Footer
