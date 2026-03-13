import React, { useState } from 'react';

function Pictures() {
    // 1. Vi skapar en siffra (index) som håller koll på vilken bild som är i mitten
    const [currentIndex, setCurrentIndex] = useState(1); // Startar på bild 2 (index 1)

    const images = [
        { src: "/bild1.png", alt: "Pizza 1" },
        { src: "/bild2.png", alt: "Pizza 2" },
        { src: "/bild3.png", alt: "Pizza 3" }
    ];

    // 2. Funktioner för att byta bild
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // 3. Logik för att bestämma vilken klass varje bild ska ha
    const getClassName = (index) => {
        if (index === currentIndex) return "slide center";
        if (index === (currentIndex - 1 + images.length) % images.length) return "slide left";
        if (index === (currentIndex + 1) % images.length) return "slide right";
        return "slide"; // För bilder som är gömda
    };

    return (
        <div className="carousel-container">
            {images.map((img, index) => (
                <img 
                    key={index}
                    className={getClassName(index)} 
                    src={img.src} 
                    alt={img.alt}
                    onClick={index === (currentIndex - 1 + images.length) % images.length ? prevSlide : nextSlide}
                />
            ))}
        </div>
    );
}

export default Pictures;