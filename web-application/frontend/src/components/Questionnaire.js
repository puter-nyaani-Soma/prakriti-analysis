import React, { useState,useEffect } from "react";
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow-models/coco-ssd';


// import DoshaOverlay from "./DoshaOverlay.js";
// // async function loadModel() {
//   await tf.setBackend('webgl'); // Set the preferred backend for TensorFlow.js

//   const model = await tf.loadGraphModel('../../../ml/model.json'); // Load the TensorFlow.js model
//   const cocoSsd = await cocoSsd.load(); // Load the Coco SSD model

//   // Use the model for inference
//   const imageElement = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//   const predictions = await cocoSsd.detect(imageElement);

//   console.log(predictions);
// }



const Questionnaire = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    const response = await fetch('/api/bodytype/predict',
    {
        method: 'POST',
        body:JSON.stringify(formData),
        headers: {'Content-Type': 'application/json',  
    }

    
        
    })
    console.log(response)
  };
  const [showOverlay, setShowOverlay] = useState(false);
  // const [dosha, setDosha] = useState('');

  // Function to show/hide the overlay and set the dosha value
  const toggleOverlay = (doshaValue) => {
    // setDosha(doshaValue);
    setShowOverlay(true);
  };
  // useEffect(() => {
  //   loadModel();
  // }, []);
 

  return (
    <div>
      {/* Button to toggle the overlay */}
      {/* <button style = {{zIndex: 999}} onClick={() => toggleOverlay('Vata')}>Show Dosha Overlay</button> */}

      {/* Conditional rendering of the overlay */}
      {/* {showOverlay && <DoshaOverlay />} */}
  


    <div className="container">
      <h1>Personal Characteristics Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className="texts">
          <h3>Name</h3>
          <label >
            <input type="text"
            name="name"
            onChange={handleInputChange}
             />
          </label>
          <h3>Age</h3>
          <label>
            <input type="number" />
            </label>
        </div>
        <h3>1. Body Size</h3>
        <label>
          <input
            type="radio"
            name="bodySize"
            value="slim"
            onChange={handleInputChange}
          />
          Slim
        </label>
        <label>
          <input
            type="radio"
            name="bodySize"
            value="medium"
            onChange={handleInputChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="bodySize"
            value="large"
            onChange={handleInputChange}
          />
          Large
        </label>

        {/* Question 2 */}
        <h3>2. Body Weight</h3>
        <label>
          <input
            type="radio"
            name="bodyWeight"
            value="low"
            onChange={handleInputChange}
          />
          Low, difficulties in gaining weight
        </label>
        <label>
          <input
            type="radio"
            name="bodyWeight"
            value="moderate"
            onChange={handleInputChange}
            />
          Moderate, no difficulties in gaining or losing weight
        </label>
        <label>
          <input
            type="radio"
            name="bodyWeight"
            value="heavy"
            onChange={handleInputChange}
          />
          Heavy, difficulties in losing weight
        </label>

        {/* Question 3 */}
        <h3>3. Height</h3>
        <label>
          <input
            type="radio"
            name="height"
            value="short"
            onChange={handleInputChange}
          />
          Short
        </label>
        <label>
          <input
            type="radio"
            name="height"
            value="average"
            onChange={handleInputChange}
          />
          Average
        </label>
        <label>
          <input
            type="radio"
            name="height"
            value="tall"
            onChange={handleInputChange}
          />
          Tall
        </label>

        {/* Question 4 */}
        <h3>4. Bone Structure</h3>
        <label>
          <input
            type="radio"
            name="boneStructure"
            value="light"
            onChange={handleInputChange}
          />
          Light, small bones, prominent joints
        </label>
        <label>
          <input
            type="radio"
            name="boneStructure"
            value="medium"
            onChange={handleInputChange}
          />
          Medium bone structure
        </label>
        <label>
          <input
            type="radio"
            name="boneStructure"
            value="heavy"
            onChange={handleInputChange}
          />
          Large, broad shoulders, heavy bone structure
        </label>

        {/* Question 5 */}
        <h3>5. Complexion</h3>
        <label>
          <input
            type="radio"
            name="complexion"
            value="dark"
            onChange={handleInputChange}
          />
          Dark complexion, tans easily
        </label>
        <label>
          <input
            type="radio"
            name="complexion"
            value="fair"
            onChange={handleInputChange}
          />
          Fair skin, sunburns easily
        </label>
        <label>
          <input
            type="radio"
            name="complexion"
            value="pale"
            onChange={handleInputChange}
          />
          White, pale, tans evenly
        </label>

        {/* Question 6 */}
        <h3>6. General Feel of Skin</h3>
        <label>
          <input
            type="radio"
            name="skinFeel"
            value="thin-dry"
            onChange={handleInputChange}
          />
          Thin and dry, cool to touch, rough
        </label>
        <label>
          <input
            type="radio"
            name="skinFeel"
            value="smooth-warm"
            onChange={handleInputChange}
          />
          Smooth and warm, oily T-zone
        </label>
        <label>
          <input
            type="radio"
            name="skinFeel"
            value="thick-moist"
            onChange={handleInputChange}
          />
          Thick and moist/greasy, cold
        </label>

        {/* Question 7 */}
        <h3>7. Texture of Skin</h3>
        <label>
          <input
            type="radio"
            name="skinTexture"
            value="dry"
            onChange={handleInputChange}
          />
          Dry, pigmentation and aging
        </label>
        <label>
          <input
            type="radio"
            name="skinTexture"
            value="freckles"
            onChange={handleInputChange}
          />
          Freckles, many moles, redness, rashes, and acne
        </label>

        {/* Question 8 */}
        <h3>8. Hair Colour</h3>
        <label>
          <input
            type="radio"
            name="hairColour"
            value="dull-black-brown"
            onChange={handleInputChange}
          />
          Dull, black, brown
        </label>
        <label>
          <input
            type="radio"
            name="hairColour"
            value="red-lightbrown-yellow"
            onChange={handleInputChange}
          />
          Red, light brown, yellow
        </label>
        <label>
          <input
            type="radio"
            name="hairColour"
            value="brown"
            onChange={handleInputChange}
          />
          Brown
        </label>

        {/* Question 9 */}
        <h3>9. Appearance of Hair</h3>
        <label>
          <input
            type="radio"
            name="hairAppearance"
            value="dry-black-knotted-brittle"
            onChange={handleInputChange}
          />
          Dry, black, knotted, brittle
        </label>
        <label>
          <input
            type="radio"
            name="hairAppearance"
            value="straight-oily"
            onChange={handleInputChange}
          />
          Straight, oily
        </label>
        <label>
          <input
            type="radio"
            name="hairAppearance"
            value="thick-curly"
            onChange={handleInputChange}
          />
          Thick, curly
        </label>

        {/* Question 10 */}
        <h3>10. Shape of Face</h3>
        <label>
          <input
            type="radio"
            name="faceShape"
            value="long-angular-thin"
            onChange={handleInputChange}
          />
          Long, angular, thin
        </label>
        <label>
          <input
            type="radio"
            name="faceShape"
            value="heart-shaped-pointedchin"
            onChange={handleInputChange}
          />
          Heart-shaped, pointed chin
        </label>
        <label>
          <input
            type="radio"
            name="faceShape"
            value="large-round-full"
            onChange={handleInputChange}
          />
          Large, round, full
        </label>
        {/* Question 11 */}
        <h3>11. Eyes</h3>
        <label>
          <input
            type="radio"
            name="eyes"
            value="small-active-darting-darkeyes"
            onChange={handleInputChange}
          />
          Small, active, darting, dark eyes
        </label>
        <label>
          <input
            type="radio"
            name="eyes"
            value="medium-sized-penetrating-lightsensitive-eyes"
            onChange={handleInputChange}
          />
          Medium-sized, penetrating, light-sensitive eyes
        </label>
        <label>
          <input
            type="radio"
            name="eyes"
            value="big-round-beautiful-glowing-eyes"
            onChange={handleInputChange}
          />
          Big, round, beautiful, glowing eyes
        </label>

        {/* Question 12 */}
        <h3>12. Eyelashes</h3>
        <label>
          <input
            type="radio"
            name="eyelashes"
            value="scanty-eyelashes"
            onChange={handleInputChange}
          />
          Scanty eyelashes
        </label>
        <label>
          <input
            type="radio"
            name="eyelashes"
            value="moderate-eyelashes"
            onChange={handleInputChange}
          />
          Moderate eyelashes
        </label>
        <label>
          <input
            type="radio"
            name="eyelashes"
            value="thick-fused-eyelashes"
            onChange={handleInputChange}
          />
          Thick/Fused eyelashes
        </label>
        {/* Question 13 */}
        <h3>13. Blinking of Eyes</h3>
        <label>
          <input
            type="radio"
            name="blinkingEyes"
            value="excessive-blinking"
            onChange={handleInputChange}
          />
          Excessive Blinking
        </label>
        <label>
          <input
            type="radio"
            name="blinkingEyes"
            value="moderate-blinking"
            onChange={handleInputChange}
          />
          Moderate Blinking
        </label>
        <label>
          <input
            type="radio"
            name="blinkingEyes"
            value="stable-blinking"
            onChange={handleInputChange}
          />
          More or less stable
        </label>

        {/* Question 14 */}
        <h3>14. Cheeks</h3>
        <label>
          <input
            type="radio"
            name="cheeks"
            value="wrinkled-sunken"
            onChange={handleInputChange}
          />
          Wrinkled, Sunken
        </label>
        <label>
          <input
            type="radio"
            name="cheeks"
            value="smooth-flat"
            onChange={handleInputChange}
          />
          Smooth, Flat
        </label>
        <label>
          <input
            type="radio"
            name="cheeks"
            value="rounded-plump"
            onChange={handleInputChange}
          />
          Rounded, Plump
        </label>

        {/* Question 15 */}
        <h3>15. Nose</h3>
        <label>
          <input
            type="radio"
            name="nose"
            value="crooked-narrow"
            onChange={handleInputChange}
          />
          Crooked, Narrow
        </label>
        <label>
          <input
            type="radio"
            name="nose"
            value="pointed-average"
            onChange={handleInputChange}
          />
          Pointed, Average
        </label>
        <label>
          <input
            type="radio"
            name="nose"
            value="rounded-largeopennostrils"
            onChange={handleInputChange}
          />
          Rounded, Large open nostrils
        </label>
        <h3>16. Teeth and Gums</h3>
        <label>
          <input
            type="radio"
            name="teethGums"
            value="irregular-protrudingteeth-recedinggums"
            onChange={handleInputChange}
          />
          Irregular, Protruding teeth, Receding gums
        </label>
        <label>
          <input
            type="radio"
            name="teethGums"
            value="mediumsizedteeth-reddishgums"
            onChange={handleInputChange}
          />
          Medium-sized teeth, Reddish gums
        </label>
        <label>
          <input
            type="radio"
            name="teethGums"
            value="big-whitestrongteeth-healthygums"
            onChange={handleInputChange}
          />
          Big, White, Strong teeth, Healthy gums
        </label>

        {/* Question 17 */}
        <h3>17. Lips</h3>
        <label>
          <input
            type="radio"
            name="lips"
            value="tight-thindrylips-chapseasily"
            onChange={handleInputChange}
          />
          Tight, thin, dry lips which chaps easily
        </label>
        <label>
          <input
            type="radio"
            name="lips"
            value="soft-mediumsizedlips"
            onChange={handleInputChange}
          />
          Lips are soft, medium-sized
        </label>
        <label>
          <input
            type="radio"
            name="lips"
            value="large-softpinkfulllips"
            onChange={handleInputChange}
          />
          Lips are large, soft, pink, and full
        </label>

        {/* Question 18 */}
        <h3>18. Nails</h3>
        <label>
          <input
            type="radio"
            name="nails"
            value="dry-roughbrittle-break"
            onChange={handleInputChange}
          />
          Dry, Rough, Brittle, Break
        </label>
        <label>
          <input
            type="radio"
            name="nails"
            value="sharp-flexiblepink-lustrous"
            onChange={handleInputChange}
          />
          Sharp, Flexible, Pink, Lustrous
        </label>
        <label>
          <input
            type="radio"
            name="nails"
            value="thick-oilysmooth-polished"
            onChange={handleInputChange}
          />
          Thick, Oily, Smooth, Polished
        </label>

        {/* Question 19 */}
        <h3>19. Appetite</h3>
        <label>
          <input
            type="radio"
            name="appetite"
            value="irregular-scanty"
            onChange={handleInputChange}
          />
          Irregular, Scanty
        </label>
        <label>
          <input
            type="radio"
            name="appetite"
            value="strong-unbearable"
            onChange={handleInputChange}
          />
          Strong, Unbearable
        </label>
        <label>
          <input
            type="radio"
            name="appetite"
            value="slowbutsteady"
            onChange={handleInputChange}
          />
          Slow but steady
        </label>

        {/* Question 20 */}
        <h3>20. Liking Tastes</h3>
        <label>
          <input
            type="radio"
            name="likingTastes"
            value=""
            onChange={handleInputChange}
          />
          Sweet / Sour / Salty
        </label>
        
        <label>
          <input
            type="radio"
            name="likingTastes"
            value="bitter"
            onChange={handleInputChange}
            />
          Sweet / Bitter / Astringent
        </label>
        <label>
          <input
            type="radio"
            name="likingTastes"
            value="astringent"
            onChange={handleInputChange}
          />
          Pungent / Bitter / Astringent
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
            </div>
  );
};

export default Questionnaire;
