import './style.css'
import { Link } from "react-router-dom" 

function TelaInicial() {
    return ( 
        <>
        <div className="div">
        <h1> ...Task it!</h1>
        <p>...Your favorite task manager...</p>

        <Link to="/Home">
        <button>Get start</button>
        </Link>

        </div>
        </>
     );
}

export default TelaInicial;