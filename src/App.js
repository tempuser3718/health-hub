import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Conditions from './components/Conditions';
import BMICalculator from './components/BMICalculator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/bmi" element={<BMICalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
