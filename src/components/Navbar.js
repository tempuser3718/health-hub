import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#2b7a78',
  };

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
      <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Home
      </NavLink>
      <NavLink to="/conditions" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Conditions
      </NavLink>
      <NavLink to="/bmi" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        BMI Calculator
      </NavLink>
      <NavLink to="/symptom-checker" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Symptom Checker
      </NavLink>
      <NavLink to="/mental-wellbeing" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Mental Wellbeing
      </NavLink>
      <NavLink to="/healthy-eating" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Healthy Eating
      </NavLink>
      <NavLink to="/health-news" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Health News
      </NavLink>
    </nav>
  );
}
