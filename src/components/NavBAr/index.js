import {Link} from "react-router-dom"

function NavBar() {
    return ( 
        <>
        <Link to='/Home'><div>Home</div></Link>
        <Link to='/PaginaUsuario'><div>Usuarios</div></Link>
        
        </>
     );
}

export default NavBar;