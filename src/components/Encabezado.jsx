function Encabezado(){
    return(
        <header className="Header_Container">
            <img className="Header_Logo" src="" alt="Logo" />
            <nav className="Header_Menu">
                <a className="Header_Menu_Enlace" href="">Inicio</a>
                <a className="Header_Menu_Enlace" href="">Candidatos</a>
                <a className="Header_Menu_Enlace" href="">Ofertas</a>
                <a className="Header_Menu_Enlace" href="">Seguimiento</a>
            </nav>
            <s className="Header_Iniciales">Iniciales</s>
            <p className="Header_Nombre">Nombre Completo</p>
            <button className="Header_Cerrar">Cerrar Sesión</button>
        </header>
    )
}

export default Encabezado