import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(
    randomColor({ luminosity: luminosity, hue: hue }),
  );

  return (
    <div>
      <div
        css={css`
          background-color: ${color};

          height: 500px;
          width: 700px;
          margin: 20px auto;

          text-align: center;

          border-radius: 8px;
          transition: background-color 0.5s ease;
          box-shadow: 5px 5px 5px lightslategray;
        `}
      >
        <div
          css={css`
            padding-top: 20px;
            font-size: 24px;
            font-weight: bold;
            background-color: ${color};
            transition: background-color 0.5s ease;
            border-radius: 8px;
          `}
        >
          Generated Color: {color}
        </div>
        <br />
        <br />
        <button
          onClick={() => {
            setColor(randomColor({ luminosity: luminosity, hue: hue }));
          }}
          css={css`
            height: 25px;
            border-radius: 4px;
            cursor: pointer;
          `}
        >
          Generate
        </button>

        <br />
        <div>
          <h3>Choose a hue</h3>
          <br />
          <input
            type="search"
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
            type="search"
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
