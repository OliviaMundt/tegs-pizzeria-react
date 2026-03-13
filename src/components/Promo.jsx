import React, { useState, useEffect } from 'react';

function Promo() {
    const [title, setTitle] = useState("Laddar...");
    const [description, setDescription] = useState("");
    // 1. Ny state för att styra animationen
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const deals = [
            { title: "Måndags-Margherita", desc: "Starta veckan med en klassiker för 85kr!" },
            { title: "Student-Special", desc: "Visa leg och få gratis läsk till valfri pizza." },
            { title: "Familjefest", desc: "Köp 3 valfria pizzor, få en Barn-Vesuivio på köpet!" },
            { title: "After Work", desc: "Vår lyxigaste tryffelpizza + en alkoholfri dryck för 145kr." }
        ];

        const randomDeal = deals[Math.floor(Math.random() * deals.length)];
        setTitle(randomDeal.title);
        setDescription(randomDeal.desc);

        // 2. Starta animationen efter en liten stund (100ms)
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return (
        <section className="promo-section">
            {/* 3. Här lägger vi till show-promo om isVisible är true */}
            <div className={`promo-container ${isVisible ? 'show-promo' : ''}`}>
                <h3>Dagens Erbjudande!</h3>
                <h2 id="promo-title">{title}</h2>
                <p id="promo-desc">{description}</p>
            </div>
        </section>
    );
}

export default Promo;