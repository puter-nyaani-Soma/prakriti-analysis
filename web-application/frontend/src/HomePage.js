import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-text">Prakriti Analysis</h1>
        <p className="hero-subtext">Discover Your Dosha</p>
      </div>
      <div className="dosha-section">
        <div className="dosha dosha-vata">
          <h2 className="dosha-title">Vata Dosha</h2>
          <p className="dosha-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.</p>
        </div>
        <div className="dosha dosha-pitta">
          <h2 className="dosha-title">Pitta Dosha</h2>
          <p className="dosha-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.</p>
        </div>
        <div className="dosha dosha-kapha">
          <h2 className="dosha-title">Kapha Dosha</h2>
          <p className="dosha-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
