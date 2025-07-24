import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/conditions">Conditions</Link> |{" "}
      <Link to="/bmi">BMI Calculator</Link>
    </nav>
  );
}
