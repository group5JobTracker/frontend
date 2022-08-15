//Libraries
import { Routes, Route } from "react-router-dom";
//Component
import LandingPage from './components/LandingPage';
import Dashboard from "./components/Dashboard"
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
