import React, { useState, useEffect } from 'react';
import './DoshaPage.css';
import { useParams } from 'react-router-dom';

const DoshaPage = () => {
  const [doshaData, setDoshaData] = useState(null);
  const { doshaName } = useParams();
  console.log(doshaName)

  const updateDoshaData = (doshaName) => {
    const vataData = {
      name: 'Vata',
      description: "Those with the vata dosha are usually described as slim, energetic, and creative. They’re known for thinking outside the box but can become easily distracted. What’s more, their mood is highly dependent on the weather, people around them, and foods they eat",
      strengths:"Creative, energetic, enthusiastic, imaginative, quick-thinking.",
      weakness: "forgetful, anxious, unstable mood, can get overwhelmed easily, highly sensitive to the cold, has trouble sleeping, irregular appetite and eating patterns, prone to digestive issues and gas, poor circulation",
      balanceTips: [
        "Establish a routine and stick to it.",
        "Keep warm and maintain a regular sleep schedule.",
        "Practice calming activities like yoga, meditation, and deep breathing.",
        "Eat warm, nourishing foods and avoid excessive cold or raw foods.",
        "Use warming spices like ginger, cinnamon, and cumin in cooking."
      ],
    };
    const pittaData = {
      name: 'Pitta',
      description: "Those with the pitta dosha are often described as focused, determined, and organized. They have a strong digestion and tend to be of medium build. However, they can be prone to anger and irritability when out of balance.",
      strengths: "Intelligent, focused, determined, organized, good digestion.",
      weakness: "Anger, irritability, impatience, inflammation, heartburn, skin rashes, excessive body heat.",
      balanceTips: [
        "Avoid excessive heat and direct sunlight.",
        "Engage in cooling activities like swimming or spending time in nature.",
        "Practice moderation in work and exercise.",
        "Choose cooling foods like fresh fruits, vegetables, and herbs.",
        "Practice relaxation techniques and avoid situations that provoke anger."
      ],
    };
    
    const kaphaData = {
      name: 'Kapha',
      description: "Those with the kapha dosha are often described as calm, compassionate, and strong. They have a sturdy build and good endurance. However, they can be prone to weight gain and lethargy when out of balance.",
      strengths: "Calm, compassionate, strong, stable, good endurance.",
      weakness: "Weight gain, lethargy, attachment, congestion, slow digestion, difficulty letting go.",
      balanceTips: [
        "Engage in regular exercise to stimulate metabolism and circulation.",
        "Avoid excessive consumption of heavy, oily, and sweet foods.",
        "Incorporate spices like ginger, black pepper, and turmeric into meals.",
        "Stay mentally active and challenge yourself with new experiences.",
        "Practice invigorating activities like brisk walking, dancing, or yoga."
      ],
    };
  
    let selectedDoshaData = null;
  
    if (doshaName === 'Vata') {
      selectedDoshaData = vataData;
    } else if (doshaName === 'Pitta') {
      selectedDoshaData = pittaData;
    } else if (doshaName === 'Kapha') {
      selectedDoshaData = kaphaData;
    }
  
    setDoshaData(selectedDoshaData);
  };
  

  useEffect(() => {
    updateDoshaData(doshaName);
  }, [doshaName]);

  useEffect(() => {
    if (doshaData) {
      console.log(doshaData);
    }
  }, [doshaData]);

  if (!doshaData) {
    return <div>Loading...</div>;
  }

  const { name, description,strengths,balanceTips,weakness } = doshaData;
  

  return (
    <div className="dosha-page">
      <h1 className="dosha-title">{name} Dosha</h1>
      <div className="dosha-description">{description}</div>
      <div className="balance-tips">
      <h2 className="balance-tips-title">Strengths:</h2>
      <div className="dosha-description">{strengths}</div>
      <h2 className="balance-tips-title">Weakness:</h2>
      <div className="dosha-description">{weakness}</div>
        <h2 className="balance-tips-title">Tips to Balance {name} Dosha:</h2>
        <ul className="balance-tips-list">
          {balanceTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoshaPage;
