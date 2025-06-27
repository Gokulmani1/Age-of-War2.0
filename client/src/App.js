
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ownInput, setOwnInput] = useState('');
  const [enemyInput, setEnemyInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const parsePlatoons = (str) => {
    return str.split(';').map((soldiers) => {
      const [cls, cnt] = soldiers.split('#');
      return { class: cls.trim(), count: parseInt(cnt.trim()) };
    });
  };

  const handleBattle = async () => {
    try {
      setError('');
      const own = parsePlatoons(ownInput);
      const enemy = parsePlatoons(enemyInput);
      const apiUrl = process.env.REACT_APP_BATTLE_API_URL;
      const res = await fetch(`${apiUrl}/battle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ own, enemy }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data.result);
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>Age of War Battle Simulator</h1>
      <label>Homelander</label>
      <textarea
        placeholder="Enter own platoons (e.g. Spearmen#10;Militia#30)"
        rows={3}
        value={ownInput}
        onChange={(e) => setOwnInput(e.target.value)}
      />
      <label>ENEMY</label>
      <textarea
        placeholder="Enter enemy platoons (e.g. Militia#10;Spearmen#10)"
        rows={3}
        value={enemyInput}
        onChange={(e) => setEnemyInput(e.target.value)}
      />
      <button onClick={handleBattle}>Deploy Troops</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h3>Winning Arrangement:</h3>
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Platoon Class</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {result.map((platoon, index) => (
                <tr key={index}>
                  <td>{platoon.class}</td>
                  <td>{platoon.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;