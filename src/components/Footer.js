import React from "react";
import fiat from "../img/fiat.svg";
import social from "../img/social-icons.png";

const Footer = () => {
    
    return (
        <div className='container-footer'>
            <div className="foot-top">
                <div className="foot-left">
                    <div className="partner">
                        <h2>THE MUSEUM</h2>
                        <p id="ptag">Via Sant Ottavio, 44 - 10126 Torino</p>
                        <img className="fiat" src={fiat} alt="fiat"/>
                        <img className="social" src={social} alt="social"/>
                    </div>
                    <div className="main-contact">
                        <ul>
                            <li className="some">STAMPA</li>
                            <li className="some">STATUTO E CODICE ETICO</li>
                            <li className="some">PRIVACY</li>
                            <li>
                                <img src="" alt=""/>
                                <p>011.0062713</p>
                            </li>
                            <li>
                                <img src="" alt=""/>
                                <p>info@themuseum.it</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="foot-right">
                    <h2>Resta sempre aggiornato su mostre, workshop ed eventi </h2>
                    <h4>email</h4>
                    <h2 id="news">ISCRIVITI ALLA NEWSLETTER</h2>
                </div>
            </div>
            <div className="foot-bottom">
                <h4>2020 THE MUSEUM</h4>
                <h4>Publicis Sapient</h4>
            </div>
        </div>
    );
};

export default Footer;