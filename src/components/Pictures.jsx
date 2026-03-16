import React, { useState } from 'react';

function Pictures() {
    const [currentIndex, setCurrentIndex] = useState(1); 

    const images = [
        { src: "/bild1.png", alt: "Pizza 1" },
        { src: "/bild2.png", alt: "Pizza 2" },
        { src: "/bild3.png", alt: "Pizza 3" }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const getClassName = (index) => {
        if (index === currentIndex) return "slide center";
        if (index === (currentIndex - 1 + images.length) % images.length) return "slide left";
        if (index === (currentIndex + 1) % images.length) return "slide right";
        return "slide"; 
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