import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/conditions">Conditions</Link> |{" "}
      <Link to="/bmi">BMI Calculator</Link> |{" "}
      <Link to="/eating">Healthy Eating</Link> |{" "}
      <Link to="/symptoms">Symptom Checker</Link> |{" "}
      <Link to="/news">Health News</Link>
    </nav>
  );
}
