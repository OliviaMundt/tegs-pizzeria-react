import React from 'react';
import Header from '../components/Header';
import MenuHero from '../components/MenuHero';
import MenuPage from '../components/MenuPage';
import Footer from '../components/Footer';

class Menu extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <MenuHero />
        <MenuPage />
        <Footer />
      </div>
    );
  }
}


export default Menu;