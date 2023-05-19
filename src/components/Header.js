import React from "react";
import "../styles/Header.css"; // Importez le fichier CSS pour le style du header
import profile from './profile.png';

function Header() {
    return (
        <header className="header">
            <h1>狼 okami</h1>
            <nav><ul><li><a href="/contact" className="contact">contact</a></li></ul></nav>
            <div className="icon">
                <img src={profile} alt="icone profile" className="profile"/>
            </div>
        </header>
    );
}

export default Header;