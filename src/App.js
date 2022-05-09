import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState(randomColor('value'));

  return (
    <div>
      <div
        style={{
          backgroundColor: randomColor({ hue: hue }) || color,

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
          onClick={() => setColor(randomColor())}
          style={{ height: 30, borderRadius: 2 }}
        >
          Generate
        </button>

        <br />
        <div>
          <h3>Choose a hue</h3>
          <br />
          <input
            value={hue}
            onChange={(event) => setHue(event.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
}
