import React from 'react';
import { Link } from 'react-router-dom';


function Lunch() {
    return ( 
        <div className="lunch-section">
            <div className="lunch-box show-cheese">
                <div className="lunch-main">
                    <span className="main">Dagens lunch 100kr</span>
                    <span className="lunch-time">11.00 - 14.00 mån-fre</span>
                </div>

                <div className="lunch-details">
                    <p>
                        Valfri rätt från hela menyn!<br/>
                        Kaffe, dricka, bröd och smör ingår.
                    </p>
            
                    <Link to="/meny" className="ostmeny">Se menyn här!</Link>
                </div>

            </div>
        </div>
    );
}

export default Lunch; 