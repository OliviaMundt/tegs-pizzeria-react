 import React from 'react';
 
 function History() {
     return (
       <section className="history-section">
        <div className="history-container">
            
            <div className="history-text-box">
                <h2 className="section-title">Vår resa</h2>
                <p>
                    Det började med en enkel tanke: varför smakar inte pizzan här som den gör i Neapel? 
                    Med två säckar mjöl och en gammal vedugn började vi experimentera i garaget.
                </p>
                <p>
                    Idag, tio år senare, är filosofin densamma. Vi fuskar inte med jästiden. 
                    Vi importerar tomaterna från San Marzano. Och vi älskar varje sekund av det.
                </p>
                
                <p className="signature">Familjen Tegs</p>
            </div>

            <div className="history-image-wrapper">
                <img src="../media/omoss.png" alt="Pizzabagare in action"/>
            </div>

        </div>
    </section>
    );
}

export default History;