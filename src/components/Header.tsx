import {NavLink} from "react-router-dom";
import SCInitialsLogo from '../assets/SC-initials-logo.svg';
import '../styles/header.scss';

const Header = () => {
    return (
        <header>
            <NavLink to='/'>
                <img src={SCInitialsLogo} alt="The initials 'S.C.' for Seth Campbell."/>
            </NavLink>
            <nav>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/industry-experience'>Industry Experience</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
            </nav>
        </header>
    );
};

export default Header;