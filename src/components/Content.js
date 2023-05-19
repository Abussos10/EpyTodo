import React from "react";
import "../styles/Register.css"; // Importez le fichier CSS pour le style du contenu principal

function Content()
{
    return (Register());
}

function Login()
{
    //state (état, données)

    //comportements

    // affichage (render)
    return (
        <main>
            <div className="content">
                <h1 className="login">sign in</h1>
                <p className="description"> sign in to save your chechout details for next time, view your to do list.</p>
                <div className="email"><input id="emailAddress" type="email" placeholder="email" size="32" minLength="3" maxLength="30"/></div>
                <div className="password"><input id="password" type="email" placeholder="password" size="32" minLength="3" maxLength="30"/></div>
                <div className="container-button-login"><button>sign in</button></div>
                <h2>don't have an account?</h2>
                <div className="container-button-register"><button>sign up</button></div>
            </div>
        </main>
    );
}

function Register()
{
    //state (état, données)

    //comportements

    // affichage (render)
    return (
        <main>
            <div className="content">
                <h1 className="register">register</h1>
                <div className="first-name"><input id="first-name" type="email" placeholder="first name" size="32" minLength="3" maxLength="30"/></div>
                <div className="last-name"><input id="last-name" type="email" placeholder="last name" size="32" minLength="3" maxLength="30"/></div>
                <div className="email"><input id="emailAddress" type="email" placeholder="email" size="32" minLength="3" maxLength="30"/></div>
                <div className="password"><input id="password" type="email" placeholder="password" size="32" minLength="3" maxLength="30"/></div>
                <div className="container-button-register"><button>sign up</button></div>
            </div>
        </main>
    );
}

export default Content;