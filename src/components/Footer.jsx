import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-column">
                <h4>Öppettider</h4>
                <table className="hours-table">
                    <tbody>
                        <tr>
                            <td>Mån-Fre</td>
                            <td className="time">11.00 - 20.00</td>
                        </tr>
                        <tr>
                            <td>Lör-Sön</td>
                            <td className="className">12.00 - 20.00</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Dagens lunch</h4>
                <table className="hours-table">
                    <tbody>
                        <tr>
                            <td>Mån-Fre</td>
                            <td className="time">11:00 - 14:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="footer-column">
                <h4>Kontakt</h4>
                <p>090 - 12 34 56</p>
                <p>Bryggargatan</p>
            </div>
        </footer>
    );
}

export default Footer;