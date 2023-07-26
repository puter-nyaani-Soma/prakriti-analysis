
import { BrowserRouter,Routes, Route,Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import Questionnaire from './components/Questionnaire';
import DoshaPage from './DoshaPage';





 


function App() {
 
  return(
    
    

    <div className="App">
      <BrowserRouter>
        <Navbar />
      <div className="page">
      <Routes>
        

        <Route path='/'
        element={<HomePage />}
        >
        </Route>
        <Route path='find-your-body'
          element={<Questionnaire />}
          >
        </Route>
        <Route path="/Dosha/:doshaName" element={<DoshaPage/>}/>
        
      


      </Routes>
      
        
        

      </div>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
