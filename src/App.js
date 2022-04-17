import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
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
