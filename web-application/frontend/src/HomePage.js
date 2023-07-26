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
      <Link to="/Dosha/Vata" style={{textDecoration:"none"}}>
              <h2 className="dosha-title">Vata Dosha</h2>
             
          <p className="dosha-description">Vata consists mostly of the two elements air and space (also known as ether) and is generally described as cold, light, dry, rough, flowing, and spacious. Autumn represents vata for its cool, crisp days.</p>
          </Link>
            </div>
         <div className="dosha dosha-pitta">

              <Link to="/Dosha/Pitta" style={{textDecoration:"none"}}>
                  <h2 className="dosha-title">Pitta Dosha</h2>
          <p className="dosha-description">Known for being associated with a tenacious personality, the pitta dosha is based on fire and water. It’s commonly described as hot, light, sharp, oily, liquid, and mobile. Summer is known as pitta season for its sunny, hot days.</p>
                 
              </Link>
            </div>
        <div className="dosha dosha-kapha">
        <Link to="/Dosha/Kapha" style={{textDecoration:"none"}}>
              <h2 className="dosha-title">Kapha Dosha</h2>
          <p className="dosha-description">Kapha is based on earth and water. It can be described as steady, stable, heavy, slow, cold, and soft. Spring is known as kapha season, as many parts of the world slowly exit hibernation.</p>
             
          </Link> 
            </div>
        
      </div>
    </div>
  );
};

export default HomePage;
