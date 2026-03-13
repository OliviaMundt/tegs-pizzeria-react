import React from 'react';
import Header from '../components/Header';
import OmOssHero from '../components/OmOssHero';
import History from '../components/Values';
import Values from '../components/History';
import Footer from '../components/Footer';

class OmOss extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <OmOssHero />
        <History />
        <Values />
        <Footer />
      </div>
    );
  }
}


export default OmOss;