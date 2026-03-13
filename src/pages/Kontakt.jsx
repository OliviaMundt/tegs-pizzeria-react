import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Plain from '../components/Plain';
import Team from '../components/Team';
import ContactHero from '../components/ContactHero';

class Kontakt extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <Plain/>
        <ContactHero />
        <Team />
        <Footer />
      </div>
    );
  }
}


export default Kontakt;