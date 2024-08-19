import './App.css';
import Home from './Components/Home';
import Navbar1 from './Components/Navbar1';
import Row from './Components/Row';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trainers from './Components/Trainers/Trainers.js';
import About from './Components/About.js';
import Plan from './Components/Plan_Join/Plan.js';
import Review from './Components/Review/Review.js';



function App() {
  return (
  <>
  <Router>

  <Navbar1 />
  <Routes> 
  <Route path='/' element={<Home />} />
  </Routes>
  <Row />
  <About />
  <Trainers />
  <Plan />
  <Review />
  </Router>
  
   </>
  );
}

export default App;
