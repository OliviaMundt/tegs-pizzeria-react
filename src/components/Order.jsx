import React, { useState } from 'react';

function ThankYouMessage(props) {
    return (
        <div className="thank-you-box" style={{ display: 'block', marginTop: '20px', textAlign: 'center' }}>
            Tack för din beställning, <strong>{props.customerName}</strong>! 
        </div>
    );
}

function Order() {
    const [name, setName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsSubmitted(true); 
    };

    return (
        <section className="order-section">
            <div className="order-box">
                <h3>Beställning</h3>
                
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="order-form">
                        <label htmlFor="customer-name">Namn:</label>
                        <input 
                            type="text" 
                            id="customer-name" 
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />

                        <label htmlFor="address">Adress:</label>
                        <input type="text" id="address" name="address" required />

                        <label htmlFor="phone">Telefonnummer:</label>
                        <input type="tel" id="phone" name="phone" required />

                        <label htmlFor="order-details">Vad som önskas:</label>
                        <textarea id="order-details" name="order-details" rows="4" required></textarea>

                        <label htmlFor="code">Rabattkod:</label>
                        <input type="text" id="code" name="code" required />

                        <button type="submit" id="order-btn" className="submit-btn">Skicka Beställning</button>
                    </form>
                ) : (
                    <ThankYouMessage customerName={name} />
                )}
            </div>
        </section>
    );
}

export default Order;