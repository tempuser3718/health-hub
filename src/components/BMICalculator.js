import { useState } from 'react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMetres = height / 100;
    const bmiValue = weight / (heightInMetres * heightInMetres);
    const roundedBMI = bmiValue.toFixed(1);
    setBmi(roundedBMI);

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 25) setCategory('Healthy weight');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ margin: '5px' }}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ margin: '5px' }}
      />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <p>
          Your BMI is <strong>{bmi}</strong> — <em>{category}</em>
        </p>
      )}
    </div>
  );
}
