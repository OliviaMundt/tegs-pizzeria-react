import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import LittleMenu from '../components/LittleMenu';
import Lunch from '../components/Lunch';
import Promo from '../components/Promo';
import Pictures from '../components/Pictures';

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <Hero />
        <Welcome />
        <LittleMenu />
        <Lunch />
        <Promo />
        <Pictures />
        <Footer />
      </div>
    );
  }
}


export default Home;