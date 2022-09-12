import styles from './style.module.css'
import { Link } from "react-router-dom" 

function TelaInicial() {
    return ( 
        <>
        <div className={styles.div}>
        <h1 className={styles.h1}> ...Task it!</h1>
        <p className={styles.p}>...Your favorite task manager...</p>

        <Link to="/Home">
        <button className={styles.button}>Get start</button>
        </Link>

        </div>
        </>
     );
}

export default TelaInicial;