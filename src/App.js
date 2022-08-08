//Library
import { Routes, Route } from "react-router-dom";

//Component
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';

//Styles
import './styles/App.css';



function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </main>
  );
}

export default App;
