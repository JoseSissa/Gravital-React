import { CardHomeProject } from "../components/card_home_project/CardHomeProject";
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
                    <div className="header_home-vector">
                        <a href="https://www.instagram.com/gravital.co/" target="_blank" rel="noreferrer">Síguenos</a>
                        <img src="../../public/assets/images/icons/arrow-up-banner.png" alt="Arrow up logo" />
                    </div>
                </header>
                <section className="ourServices_home">
                    <h5 className="h5">Nuestros <br/>Servicios</h5>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div>
                        <img src="../../public/assets/images/proyecto-1-home.jpg" alt="Image of Gudmud project" />
                        <img src="../../public/assets/images/proyecto-2-home.jpg" alt="Image of Territorios de Oportunidad project" />
                        <img src="../../public/assets/images/proyecto-3-home.jpg" alt="Image of Vanka project" />
                        <img src="../../public/assets/images/nuestros-vector.png" alt="Image of a slogan" />
                    </div>
                </section>
                <section className="transformation_home">
                    <h4>Transformación digital de empresas bajo la practicidad, la funcionalidad y la atracción</h4>
                    <p>Nos atraen los desarrollos que trascienden en la belleza y la coherencia. Somos un equipo multidisciplinario con múltiples ideas que gravitan hacía las realidades de nuestros clientes</p>
                    <a href="#">
                        Conoce nuestros proyectos {">>"}
                    </a>
                </section>
                <section className="projects">
                    <h5 className="h5">Proyectos <br/>Destacados</h5>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <img src="../../public/assets/images/proyectos-vector.png" alt="Image of a slogan" />
                    <CardHomeProject 
                        imageUrl={'../../public/assets/images/proyectos-1.jpg'}
                        link={'#'}
                        title={'Gudmud'}
                        text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
                    />
                    <CardHomeProject 
                        imageUrl={'../../public/assets/images/proyectos/Agora_Holding/agoraholding22.png'}
                        link={'#'}
                        title={'Ágora Holding'}
                        text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
                    />
                    <CardHomeProject 
                        imageUrl={'../../public/assets/images/proyectos/Maizarte/maizarte12.png'}
                        link={'#'}
                        title={'Maizarte'}
                        text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
                    />
                </section>
            </main>
        </>
    )
}