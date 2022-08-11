//Library
import { Routes, Route } from "react-router-dom";

//Component
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Dashboard from "./components/Dashboard"
import CreateNewApplication from "./components/CreateNewApplication";

//Styles
import './styles/App.css';



function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


    </main>
  );
}

export default App;
