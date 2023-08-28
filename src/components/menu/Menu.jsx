import { useState } from 'react';
import './menu.css'

export function Menu() {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <section>
            <div className='menu-mobile'>
                <img src="../../../public/assets/images/icons/menu-logo.png" alt="Gravital logo" />
                <div className='hamburguer'>
                    <button onClick={handleClick} className='hamburguer_button'></button>
                </div>
            </div>
            <nav className={`menu ${showMenu ? 'show-menu' : null}`}>
                <header className='menu-header'>
                    <img src="../../../public/assets/images/icons/menu-logo.png" alt="Gravital logo" />
                    <div className='hamburguer'>
                        <button onClick={handleClick} className='hamburguer_button'></button>
                    </div>
                </header>
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#"><img src="../../public/assets/images/icons/menu-logo.png" alt="Grávital logo" /></a></li>
                    <li><a href="#">Vacantes</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </section>
    )
}