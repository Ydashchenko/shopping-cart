import githubLogo from './pics/white-gh.jpeg'
import './styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <span>Copyright © </span>
            <span>{(new Date().getFullYear())}</span>
            <a rel='noreferrer' href="https://github.com/Ydashchenko" target="_blank">Yevhenii Dashchenko</a>
            <a rel='noreferrer' href="https://github.com/Ydashchenko" target="_blank"><img src={githubLogo} alt={githubLogo} className="github"/></a>
        </footer>    
    )
}