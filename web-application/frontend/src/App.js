
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Questionnaire from './components/Questionnaire';

function App() {
  return(
    

    <div className="App">
      <BrowserRouter>
      
        <Navbar />
      <div className="page">
       <Questionnaire />
      </div>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
