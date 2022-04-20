import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [navToggle, setNavToggle] = useState();

  const navClick = ()=>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-Toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
      <div className="content">
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/about' element={<AboutPage />}/>
          <Route exact path='/portfolios' element={<PortfoliosPage />}/>
          <Route exact path='/contact' element={<ContactPage />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
