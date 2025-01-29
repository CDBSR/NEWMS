
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/' className='nav-link' >Home</Link>
            <Link to='/users' className='nav-link' >Users</Link>
        </div>
    );
}