import React from 'react';

function Welcome() {
    return (
        <section className="welcome-section">
            <div className="welcome">            
                <h2>Välkommen till Tegs Pizzeria</h2>
            </div>
            <p>Att "tega" är ett gammalt uttryck för att vara tyst eller hålla munnen stängd. På Tegs Pizzeria tar vi det bokstavligt, fast på bästa möjliga sätt. 
                Vår filosofi är enkel: när maten är riktigt bra, då behövs inga ord.
            <br /><br />
            Våra pizzor gräddas i en 485-graders vedeldad ugn där värmen och röken gör magi med råvarorna. 
            Resultatet är en tunn, krispig botten med frasiga kanter och en luftighet som smälter i munnen.
            Vi toppar med noga utvalda italienska ingredienser där rökigheten lyfter smakerna till nya nivåer. Det är helt enkelt pizzor som är så goda att man tystnar av ren njutning. Håll käften vad gott, helt enkelt.

            Läsa mer om oss?</p>
            <a href="omoss.html" className="btn">Läs mer om oss?</a>
        </section>

    );
}

export default Welcome;