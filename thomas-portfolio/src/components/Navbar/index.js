import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {

    function scroll(){
        document.querySelector('#about_me').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }



    return(
        <section className="hero is-dark is-fullheight">
        <div className="hero-body" id="hero_picture">
            <div className="container has-text-centered">
                <br/>
                <a className="title" href="https://www.linkedin.com/in/thomas-argent-78181569/">
                    <img id="head_shot" src="assets/images/head_shot.png" alt="head_shot"/>
                </a>
                <h1 className="title">
                    Thomas Argent
                </h1>
                <p onClick={()=> scroll()}>
                    <i className="fas fa-arrow-down fa-3x arrow"></i>
                </p>
            </div>
        </div>
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
                <div className="container is-size-4">
                    <ul>
                        <li><Link to="/" >About Me</Link> </li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                    </ul>

                </div>
            </nav>
        </div>
    </section>
    );
}

export default Navbar;