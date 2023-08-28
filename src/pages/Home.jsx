import { Menu } from "../components/menu/Menu";
import './Home.css'

export function Home() {
    return (
        <>
            <main>
                <header className="header_home">
                    <Menu />
                    <div>
                        <h3>Creamos experiencias <br/>digitales de</h3>
                        <h2>ALTO IMPACTO</h2>
                    </div>
                    <div>
                        <span>Síguenos</span>
                        <img src="../../public/assets/images/icons/arrow-up-banner.png" alt="Arrow up logo" />
                    </div>
                </header>
            </main>
        </>
    )
}