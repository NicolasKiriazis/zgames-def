//Import Css//
import '../Navbar/Navbar.css'

//Import Js Bootstrap//
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Importando react router//
import { Link } from 'react-router-dom'

//Importando assets//
import logo from '../../assets/zgames-logo.png'
import CartWidget from '../Navbar/CartWidget'


const Navbar = () => {

    return (

        <div>

            <nav className="nav-edit  navbar navbar-expand-lg">

                <div className="collapse navbar-collapse">

                    <Link to="/"> <img src={logo} alt="logo-zgames"></img> </Link>

                    <ul className navbar-nav>


                        <li> <button className="boton nav-item dropdown">

                            <Link to="/category/:id" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Categorias</Link></button>

                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="/">Playstation 5</a></li>
                                <li><a class="dropdown-item" href="/">Playstation 4</a></li>

                            </ul>

                        </li>

                        <Link to="/products"><li><button className="boton">Juegos</button> </li> </Link>
                        <li> <button className="boton">Contacto</button> </li>
                        <li>  <CartWidget /> </li>
                    </ul>
                </div>
            </nav>

        </div>


    )





}

export default Navbar