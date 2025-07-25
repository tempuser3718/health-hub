import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthyEating from './components/HealthyEating';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Conditions from './components/Conditions';
import BMICalculator from './components/BMICalculator';
import SymptomChecker from './components/SymptomChecker';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/eating" element={<HealthyEating />} />
        <Route path="/symptoms" element={<SymptomChecker />} />
      </Routes>
    </Router>
  );
}

export default App;
