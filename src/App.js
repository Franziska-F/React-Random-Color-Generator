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
          height: 300,
          width: 500,
          margin: 'auto',
          textAlign: 'center',

          borderRadius: 4,
        }}
      >
        <h3 style={{ paddingTop: 20 }}> The background color is {color}.</h3>
        <br />
        <br />
        <button
          onClick={() => setColor(randomColor)}
          style={{ height: 30, borderRadius: 2 }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
