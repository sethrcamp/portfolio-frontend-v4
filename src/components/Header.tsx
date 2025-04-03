import {NavLink} from "react-router-dom";
import SCInitialsLogo from '../assets/SC-initials-logo.svg';
import '../styles/header/header.scss';
import HamburgerIcon from "./HamburgerIcon";
import useScreenSize from "../utils/hooks/useScreenSize";
import {useEffect, useState} from "react";

const Header = () => {
    const { isDesktop, isMobile } = useScreenSize();
    const [ menuIsOpen, setMenuIsOpen ] = useState(false);

    return (
        <header>
            <NavLink to='/'>
                <img className={isMobile ? 'mobile' : ''}
                     src={SCInitialsLogo}
                     alt="The initials 'S.C.' for Seth Campbell."
                />
            </NavLink>
            {
                isDesktop &&
                <nav>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/industry-experience'>Industry Experience</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                </nav>
            }
            {
                isMobile &&
                <HamburgerIcon
                    isOpen={menuIsOpen}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
            }

        </header>
    );
};

export default Header;