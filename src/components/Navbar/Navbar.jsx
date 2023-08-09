import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

            {/*Brand*/} 
                <a href="#" className="navbar-brand">Music Center</a>




            {/*Links*/}

                <ul className="navbar-nav">
                    <li className="nav-items">
                        <a href="#" className="nav-link">Guitarras</a>    
                    </li>
                    <li className="nav-items">
                        <a href="#" className="nav-link">Teclados</a>    
                    </li>
                    <li className="nav-items">
                        <a href="#" className="nav-link">Consolas</a>    
                    </li>
                    <li className="nav-items">
                        <a href="#" className="nav-link">Microfonos</a>    
                    </li>
                    <li className="nav-items">
                        <a href="#" className="nav-link">Accesorios</a>    
                    </li>
                </ul>

            {/*CartWidget*/}
                <CartWidget/>
            
            </div>
        </nav>
    );
}; 

export default Navbar;