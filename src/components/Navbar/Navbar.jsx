import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

            {/*Brand*/} 
                <Link to="/">Music Center</Link>




            {/*Links*/}

                <ul className="navbar-nav">

                    <li className="nav-items">
                        <NavLink to="/category/guitars">Guitarras</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/category/consoles">Consolas</NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/category/mics">Microfonos</NavLink>
                    </li>
                    
                </ul>

            {/*CartWidget*/}
                <CartWidget/>
            
            </div>
        </nav>
        </div>
    );
}; 

export default Navbar;