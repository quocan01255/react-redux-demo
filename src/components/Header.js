import 'bootstrap/dist/css/bootstrap.css';
import { memo, useContext } from 'react';
import { CategoriesContext } from './HomePage.js'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../auth/login/ActionCreators.js';

function NavItem({ title, navTo, accessToCart }) {
    const handleNavClick = () => {
        navTo(title)
        accessToCart(false)
    }

    return (
        <li className={`nav-item`}>
            <a className="nav-link" href="#" onClick={handleNavClick}>{title}</a>
        </li>
    )
}

function Header({ navTo, accessToCart }) {
    const categories = useContext(CategoriesContext)

    const handleHomeClick = () => {
        navTo('')
        accessToCart(false)
    }

    const handleCartClick = () => {
        accessToCart(true)
    }

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#" onClick={handleHomeClick}>Home</a>
            <a className="navbar-brand" href="#" onClick={handleCartClick}>Cart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {categories.map(category => (
                        <NavItem key={category} title={category} navTo={navTo} accessToCart={accessToCart} />
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default memo(Header);