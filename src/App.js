import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home2 from './Components/Home2';
import Slinkify from './Components/Slinkify';
import LinkHistory from './Components/LinkHistory';
import Tracking from './Components/Tracking';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home2/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/shortenlink" element={<Slinkify/>}/>
        <Route path="/shortenlink/history" element={<LinkHistory/>}/>
      </Routes>
    </Router>

    {/* <Signup/>
    <Login/>
    <Navbar/>
    <Home/>
    {/* <Feature/> */}
    {/* <About/>
    <Review2/>
    <Contact/>
    <Footer/>
    <Signup/> */}
    </>
  );
}

export default App;
