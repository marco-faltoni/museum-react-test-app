import React from "react";
import fb from "../img/fb.svg"
import ig from "../img/ig.svg"
import tw from "../img/twit.svg"

const Nav = () => {
    // const { pathname } = useLocation();
    
    return (
        <div className="nav">
            <div className="top-bar">
                <h1>The <br/> Museum</h1>
                <ul>
                    <li>
                        Visita
                    </li>
                    <li>
                        Cosa Vedere
                    </li>
                    <li >
                        <span className="active"></span>
                        Chi Siamo
                    </li>
                    <li>
                        Attività
                    </li>
                    <li>
                        Agenda
                    </li>
                    <li>
                        <div className="social-eng">
                            <h2>ENG</h2>
                            <img src={fb} alt="fb"/>
                            <img src={ig} alt="ig"/>
                            <img src={tw} alt="tw"/>
                        </div>
                    </li>
                </ul>
                
            </div>
            
            <div className="jumbo">
                <h1>Archivio Storico</h1>
                <h4>Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.</h4>
            </div>
            
        </div>
    );
};

export default Nav;