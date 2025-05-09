//import logo from './favicon.jpg';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import CoreValues from './components/CoreValues';
import SignaturePrograms from './components/SignaturePrograms';
import WhoWeEmpower from './components/WhoWeEmpower';
import WallOfHonor from './components/WallOfHonor';
import JoinUs from './components/JoinUs';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Navbar title = "Her Soft"/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/corevalues" element={<CoreValues/>} />
        <Route path="/signatureprograms" element={<SignaturePrograms/>} />
        <Route path="/whoweempower" element={<WhoWeEmpower/>} />
        <Route path="/wallofhonor" element={<WallOfHonor/>} />
        <Route path="/joinus" element={<JoinUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
