import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-text">Prakriti</h1>
        <h7 className="hero-subtext">Discover Your Dosha</h7>
        <p>-Know your body</p>

      </div>
      <div className="dosha-section">

            <div className="dosha dosha-vata">
      <Link to="/Dosha" style={{textDecoration:"none"}}>
              <h2 className="dosha-title">Vata Dosha</h2>
              <p className="dosha-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.</p>
          </Link>
            </div>
         <div className="dosha dosha-pitta">

              <Link to="/Dosha" style={{textDecoration:"none"}}>
                  <h2 className="dosha-title">Pitta Dosha</h2>
                  <p className="dosha-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.</p>
              </Link>
            </div>
        <div className="dosha dosha-kapha">
        <Link to="/Dosha" style={{textDecoration:"none"}}>
              <h2 className="dosha-title">Kapha Dosha</h2>
              <p className="dosha-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.</p>
          </Link> 
            </div>
        
      </div>
    </div>
  );
};

export default HomePage;
