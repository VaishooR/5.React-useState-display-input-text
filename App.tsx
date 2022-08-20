import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [text, settext] = useState('');
  
  let handlechange = (event) => {
    settext(event.target.value);
  };

  return (
    <div>
      <label>Enter text:</label>
      <input type="text" onChange={handlechange} />
     
      <p>Text you have entered:</p>
      {text}
    </div>
  );
}
