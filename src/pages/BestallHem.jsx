import React from 'react';
import Header from '../components/Header';
import VideoHero from '../components/VideoHero';
import TitleOrder from '../components/TitleOrder';
import Order from '../components/Order';
import Footer from '../components/Footer';

class Menu extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <VideoHero />
        <TitleOrder /> 
        <Order /> 
        <Footer />
      </div>
    );
  }
}


export default Menu;