

import { Link } from 'react-router-dom'
import './menu.css'

function menus(){
    return(
        <>
        <header className="menu">
            <Link to="/" > <span>frontend.dev</span> </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        
        
        </header>
        </>
    )
}

export default menus