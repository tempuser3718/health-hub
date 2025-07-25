import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthyEating from './components/HealthyEating';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Conditions from './components/Conditions';
import BMICalculator from './components/BMICalculator';
import SymptomChecker from './components/SymptomChecker';
import HealthNews from './components/HealthNews';
import MentalWellbeing from './components/MentalWellbeing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/mental-wellbeing" element={<MentalWellbeing />} />
        <Route path="/healthy-eating" element={<HealthyEating />} />
        <Route path="/health-news" element={<HealthNews />} />
    
      </Routes>
      <footer>
  © 2025 St Mary's Health Hub. All rights reserved.
</footer>
    </Router>
  );
}

export default App;
