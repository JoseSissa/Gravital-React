import './CardHomeProject.css'

export function CardHomeProject ({ imageUrl, title, text, link }) {
    return (
        <article className='project_home'>
            <img src={imageUrl} alt="Image of project" />
            <h5 className="h5">{title}</h5>
            <p>{text}</p>
            <a className="text" href={link}>ver más {">>"}</a>
        </article>
    )
}