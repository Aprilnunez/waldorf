import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {

    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                    <button onClick={action}> Productos </button>
                    <NavItem text="Como Comprar" />
                    <NavItem text="Carrito" />
                    <NavItem text="Contacto" />

                </ul>
                
                <NavCart action={action} />
            </div>
        </nav>
    )
}

export default Nav;