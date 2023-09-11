import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbar2 = () => {
    return (
        
        <Navbar bg="dark" data-bs-theme="dark">
            <Container >

            {/*Brand*/} 
            <Navbar.Brand >
                <Link to="/">Music Center</Link>
            </Navbar.Brand>



            {/*Links*/}

                <Nav>

                    <Nav.Link >
                        <NavLink to="/category/Guitarras">Guitarras</NavLink>
                    </Nav.Link>
                    <Nav.Link className="nav-items">
                        <NavLink to="/category/Consolas">Consolas</NavLink>
                    </Nav.Link>
                    <Nav.Link className="nav-items">
                        <NavLink to="/category/Microfonos">Microfonos</NavLink>
                    </Nav.Link>
                    
                </Nav>

            {/*CartWidget*/}
                <CartWidget/>
            
            </Container>
        </Navbar>
        
    );
}; 

export default Navbar2;