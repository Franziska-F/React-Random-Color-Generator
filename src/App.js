import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

export default function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(
    randomColor({ luminosity: luminosity, hue: hue }),
  );

  return (
    <div>
      <div
        style={{
          backgroundColor: color,

          height: 500,
          width: 700,
          margin: 'auto',
          textAlign: 'center',

          borderRadius: 4,
        }}
      >
        <h3 style={{ paddingTop: 20 }}> The background color is {color}.</h3>
        <br />
        <br />
        <button
          onClick={() => {
            setColor(randomColor({ luminosity: luminosity, hue: hue }));
          }}
          style={{ height: 30, borderRadius: 2 }}
        >
          Generate
        </button>

        <br />
        <div>
          <h3>Choose a hue</h3>
          <br />
          <input
            onChange={(event) => {
              setColor(
                randomColor({
                  luminosity: luminosity,
                  hue: event.currentTarget.value,
                }),
              );
              setHue(event.currentTarget.value);
            }}
          />
        </div>
        <br />
        <div>
          <h3>Choose luminosity</h3>
          <br />
          <input
            onChange={(event) => {
              setColor(
                randomColor({
                  luminosity: event.currentTarget.value,
                  hue: hue,
                }),
              );
              setLuminosity(event.currentTarget.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
