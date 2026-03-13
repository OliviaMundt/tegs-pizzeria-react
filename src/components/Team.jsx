import React from 'react';

function Team() {
    return (
        <section className="team-section">
            <div className="team-grid">
                
                <div className="team-card">
                    <img src="/sofia.png" alt="Sofia Lind"/>
                    <div className="card-info">
                        <h1>SOFIA LIND</h1>
                        <span className="role">RESTAURANGCHEF</span>
                        <p>Drift, gästupplevelse och personal. Ser till att vinet matchar pizzan.</p>
                        <a href="mailto:sofia@tegspizzeria.se">sofia@tegspizzeria.se</a>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/johan.png" alt="Johan Ek"/>
                    <div className="card-info">
                        <h1>JOHAN EK</h1>
                        <span className="role">KÖKSCHEF / HEAD CHEF</span>
                        <p>Råvaruinköp, menyutveckling och leverantörsrelationer.</p>
                        <a href="mailto:johan@tegspizzeria.se">johan@tegspizzeria.se</a>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/matteo.png" alt="Matteo Ricci"/>
                    <div className="card-info">
                        <h1>MATTEO RICCI</h1>
                        <span className="role">HEAD PIZZAIOLO</span>
                        <p>Ansvarig för degen, vedugnen och hantverket. Väktare av 485 grader och den perfekta kanten.</p>
                        <a href="mailto:matteo@tegspizzeria.se">matteo@tegspizzeria.se</a>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/emil.png" alt="Emil Berg"/>
                    <div className="card-info">
                        <h1>EMIL BERG</h1>
                        <span className="role">HEAD SOMMELIER</span>
                        <p>Curator av vinlistan och barens utbud. Expert på att matcha italienska druvor och svala drycker med rökiga pizzakanter.</p>
                        <a href="mailto:emil@tegspizzeria.se">emil@tegspizzeria.se</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Team; 