import { useState } from 'react';

export default function SymptomChecker() {
  const [symptom, setSymptom] = useState('');
  const [result, setResult] = useState('');

  const checkSymptom = () => {
    const lower = symptom.toLowerCase();
    if (lower.includes('cough')) {
      setResult("You may have a respiratory issue. If symptoms persist, contact your GP.");
    } else if (lower.includes('headache')) {
      setResult("Try staying hydrated and resting. If frequent, consider medical advice.");
    } else if (lower.includes('fever')) {
      setResult("This could indicate an infection. Monitor your temperature and rest.");
    } else if (lower.includes('fatigue')) {
      setResult("Ensure you're getting enough sleep and nutrients. Persistent fatigue can signal underlying issues.");
    } else {
      setResult("Please consult a medical professional for personalised advice.");
    }
  };

  return (
    <div>
      <h1>Symptom Checker</h1>
      <p>Enter a symptom you're experiencing:</p>
      <input
        type="text"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="e.g. cough"
      />
      <button onClick={checkSymptom} style={{ marginLeft: '10px' }}>
        Check
      </button>

      {result && <p style={{ marginTop: '15px' }}>{result}</p>}
    </div>
  );
}
