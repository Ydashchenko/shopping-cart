import '../styles/home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className="home">
            <Link to="/store" className="store-btn">
                Shop Now
            </Link>
        </main>
    )
}