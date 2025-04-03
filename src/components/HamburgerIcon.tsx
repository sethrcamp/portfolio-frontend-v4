import '../styles/header/hamburger-icon.scss';
import React from "react";
import classNames from "classnames";

type HamburgerIconProps = {
    isOpen?: boolean,
    onClick?: () => void
};

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen = false, onClick }) => {
    return (
        <div id='hamburger-icon'
             className={classNames({ isOpen })}
             onClick={() => onClick && onClick()}
        >
            <section id='hamburger-patty-1'></section>
            <section id='hamburger-patty-2'></section>
            <section id='hamburger-patty-3'></section>
        </div>)
    ;
};

export default HamburgerIcon;