import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import UserProfileView from './views/UserProfileView/UserProfileView';
import Navbar from './components/Navbar/Navbar';
import SensitiveDataView from './views/SensitiveDataView/SensitiveDataView';
import AccessViolationView from './views/AccessViolationView/AccessViolationView';
import ctcLogo from "../public/ctc-logo-purple.svg";

const App = () => {

  return (
    <BrowserRouter>
    <img className="ctc-logo" src={ctcLogo}/>
    <div className="grid"></div>
    <div className="app-container">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomeView/>} />
          <Route path="/access-violations" element={<AccessViolationView/>} />
          <Route path="/sensitive-data" element={<SensitiveDataView/>} />
          <Route path="/user/:userId" element={<UserProfileView/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
};

export default App;
