import './App.css';
import Home from './Components/Home';
import Navbar1 from './Components/Navbar1';
import Row from './Components/Row';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trainers from './Components/Trainers.js';
import About from './Components/About.js';
import Plan from './Components/Plan.js';



function App() {
  return (
  <>
  <Router>

  <Navbar1 />
  <Routes> 
  {/* <Route path='/' element={<Navbar1/>} /> */}
  <Route path='/' element={<Home />} />
  {/* <Route path='/' element={<Row />} /> */}
  </Routes>
  <Row />
  <About />
  <Trainers />
  <Plan />
  </Router>
  
   </>
  );
}

export default App;
