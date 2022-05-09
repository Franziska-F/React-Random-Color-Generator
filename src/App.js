import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

export default function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          height: 200,
        }}
      >
        The background color is {color}.
        <br />
        <br />
        <button onClick={() => setColor(randomColor)}>Generate</button>
      </div>
    </div>
  );
}
