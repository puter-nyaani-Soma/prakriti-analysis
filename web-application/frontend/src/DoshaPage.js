

import React, { useState,useEffect } from 'react';
import './DoshaPage.css';

const DoshaPage = ({ doshaName }) => {
  const [doshaData, setDoshaData] = useState(null);

  // Fetch dosha data from an API or any other source
  // You can use useEffect hook to fetch the data

  // Once you have the dosha data, update the state
  const updateDoshaData = (doshaName) => {
    // Example data for Vata dosha
    const kaphaData = {
      name: 'Kapha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      balanceTips: [
        'Tip 1',
        'Tip 2',
        'Tip 3',
      ],
    };
    const pittaData = {
      name: 'Pitta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      balanceTips: [
        'Tip 1',
        'Tip 2',
        'Tip 3',
      ],

    };
    const vataData = {
      name: 'Vata',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      balanceTips: [
        'Tip 1',
        'Tip 2',
        'Tip 3',
      ],

    };


    // Update the state with the dosha data
    setDoshaData(doshaName);
  };

  // Call the updateDoshaData function when the component mounts
  useEffect(() => {
    updateDoshaData(doshaName);
  }, [doshaName]);

  // Render loading state if doshaData is not available yet
  if (!doshaData) {
    return <div>Loading...</div>;
  }

  // Extract dosha data from the state
  const { name, description, balanceTips } = doshaData;

  return (
    <div className="dosha-page">
      <h1 className="dosha-title">{name} Dosha</h1>
      <div className="dosha-description">{description}</div>
      <div className="balance-tips">
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

// const DoshaPage = ({ doshaName }) => {
  

//   const dosha = {
//     Vata:{
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.',
//     balanceTips: [
//       'Eat warm, cooked foods.',
//       'Keep a regular daily routine.',
//       'Practice gentle and calming exercises like yoga and walking.',
//       // Add more tips here as needed
//     ],
//   },
//    Pitta:{
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.',
//     balanceTips: [
//       'Eat warm, cooked foods.',
//       'Keep a regular daily routine.',
//       'Practice gentle and calming exercises like yoga and walking.',
//       // Add more tips here as needed
//     ],
//   },
//     Kapha:{
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis augue id nunc rutrum, in varius ipsum egestas. Sed fermentum ligula ut risus condimentum rhoncus.',
//     balanceTips: [
//       'Eat warm, cooked foods.',
//       'Keep a regular daily routine.',
//       'Practice gentle and calming exercises like yoga and walking.',
//       // Add more tips here as needed
//     ],
//   },

//   };
  
  
  
  
//   const selectedDosha=dosha[doshaName];
  
//   if (!selectedDosha) {
//     return <div>Invalid dosha name.</div>;
//   }
//   const { description, balanceTips } = selectedDosha;

//   return (
//     <div className="dosha-page">
//       <h1 className="dosha-title">{selectedDosha} Dosha</h1>
//       <div className="dosha-description">{description}</div>
//       <div className="balance-tips">
//         <h2 className="balance-tips-title">Tips to Balance {selectedDosha} Dosha:</h2>
//         <ul className="balance-tips-list">
//           {balanceTips.map((tip, index) => (
//             <li key={index}>{tip}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DoshaPage;
