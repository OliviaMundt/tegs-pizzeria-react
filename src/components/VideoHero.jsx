import React from 'react';

function Welcome() {
    return (
        <section className="video-hero">
            <video controls muted loop playsInline className="back-video" id="bgVideo">
                <source src="/eatingpizza.mp4" type="video/mp4"/>
            </video>

            <div className="hero-content">
                <h1>Hantverk i varje slice</h1>
            </div>
        </section>
    );
}

export default Welcome;