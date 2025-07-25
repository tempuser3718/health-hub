import { useState } from 'react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [advice, setAdvice] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMetres = height / 100;
    const bmiValue = weight / (heightInMetres * heightInMetres);
    const roundedBMI = bmiValue.toFixed(1);
    setBmi(roundedBMI);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
      setAdvice("You may need to increase your calorie intake. Consider speaking to a healthcare professional for guidance.");
    } else if (bmiValue < 25) {
      setCategory('Healthy weight');
      setAdvice("You're within a healthy range. Continue maintaining a balanced diet and regular activity.");
    } else if (bmiValue < 30) {
      setCategory('Overweight');
      setAdvice("Try to incorporate more physical activity into your routine and review your nutrition habits.");
    } else {
      setCategory('Obese');
      setAdvice("It may help to consult a GP about lifestyle changes or support services for weight management.");
    }
  };

  return (
    <div style={{ textAlign: 'centre' }}>
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
        <div style={{ marginTop: '15px' }}>
          <p>
            Your BMI is <strong>{bmi}</strong> — <em>{category}</em>
          </p>
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}
