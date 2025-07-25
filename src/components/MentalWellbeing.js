import { useState } from 'react';

export default function MentalWellbeing() {
  const [mood, setMood] = useState('');

  return (
    <div>
      <h1>Mental Well-Being</h1>

      <section style={{ maxWidth: '600px', margin: 'auto' }}>
        <h2>Stress Management Tips</h2>
        <ul>
          <li>Take short walks to clear your mind.</li>
          <li>Limit caffeine and sugar intake.</li>
          <li>Practice slow, deep breathing for 5 minutes daily.</li>
          <li>Keep a regular sleep schedule.</li>
          <li>Talk to someone you trust about how you're feeling.</li>
        </ul>

        <h2 style={{ marginTop: '30px' }}>How are you feeling today?</h2>
        <div style={{ fontSize: '1.5rem' }}>
          <button onClick={() => setMood('😊')} style={{ margin: '5px' }}>😊</button>
          <button onClick={() => setMood('😐')} style={{ margin: '5px' }}>😐</button>
          <button onClick={() => setMood('😔')} style={{ margin: '5px' }}>😔</button>
        </div>
        {mood && <p style={{ marginTop: '15px' }}>Thanks for sharing. Mood noted: <strong>{mood}</strong></p>}

        <h2 style={{ marginTop: '30px' }}>Helpful Resources</h2>
        <p>
          Visit the <a href="https://www.nhs.uk/mental-health/" target="_blank" rel="noopener noreferrer">NHS Mental Health Hub</a> for guidance and support.
        </p>
      </section>
    </div>
  );
}
