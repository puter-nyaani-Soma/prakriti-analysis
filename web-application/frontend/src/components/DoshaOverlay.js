import { Link } from 'react-router-dom';

const DoshaOverlay = ({ dosha }) => {
  return (
    <div className="dosha-overlay">
      <h2>{dosha}</h2>
      <p>is your dosha</p>
      <Link to={`/Dosha/${dosha}`}>Learn more about {dosha}</Link>
    </div>
  );
};

export default DoshaOverlay;
