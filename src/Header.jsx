import React from "react";
import "./HeaderStyle.css"
import logo from "./assets/logo.svg"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import twitter from "./assets/twitter.png"
import youtube from "./assets/youtube.png"

function Header () {
    return (
        <>
            <header>
                <section>
                    <div>
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <nav>
                        <ul className="lista">
                            <li><a href=""><img src={facebook} alt="" /></a></li>
                            <li><a href=""><img src={instagram} alt="" /></a></li>
                            <li><a href=""><img src={twitter} alt="" /></a></li>
                            <li><a href=""><img src={youtube} alt="" /></a></li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header 