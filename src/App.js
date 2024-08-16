import './App.css';
import Home from './Components/Home';
import Navbar1 from './Components/Navbar1';
import Row from './Components/Row';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trainers from './Components/Trainers';
import About from './Components/About';



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
  
  </Router>
  
   </>
  );
}

export default App;
