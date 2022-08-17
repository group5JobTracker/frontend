//Libraries
import { Routes, Route } from "react-router-dom";
//Component
import LandingPage from './components/LandingPage';
import Dashboard from "./components/Dashboard";
import SignUpPage from "./components/signUpPage/SignUpPage";
import LoginPage from "./components/logInPage/LoginPage";
//Styles
import './styles/App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


    </main>
  );
}

export default App;
