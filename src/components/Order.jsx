import React from 'react';

function Order() {
    return (
        <section className="order-section">
            <div className="order-box">
                <h3>Beställning</h3>
                <form action="#" method="post" className="order-form">
                    <label htmlFor="customer-name">Namn:</label>
                    <input type="text" id="customer-name" name="name" required />

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

                <div id="thank-you-box">
                    Tack för din beställning, <strong id="display-name"></strong>!
                </div>
            </div>
        </section>
    );
}

export default Order;