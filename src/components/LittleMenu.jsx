import React from 'react';
import { Link } from 'react-router-dom';

function LittleMenu() {
    return ( 
        <section className="little-menu">
            <div className="meny-container">
                <div className="meny-links">
                    <Link to="/meny">MENY</Link>
                    <Link to="/om-oss">OM OSS</Link>
                    <Link to="/kontakt">KONTAKT</Link>
                    <Link to="/bestall">BESTÄLL HEM</Link>
                </div>

                <div className="meny-info">
                    <h3>KOSTRÅD</h3>
                    <p>En balanserad kost</p>
                    <p>är en pizza</p>
                    <p>i vardera hand.</p>
                </div>
            </div>
        </section> 
    );
}

export default LittleMenu; 