
import React, { useState } from 'react';
import './App.css';

const dictionary = {
  "hello": "yo",
  "how are you": "sup",
  "friend": "homie",
  "amazing": "lit",
  "great": "fire",
  "cool": "dope",
  "let's go": "let's roll",
  "goodbye": "peace out",
  "awesome": "slay",
  "love": "luv",
  "no": "nah",
  "yes": "yass",
  "what are you doing": "wyd",
  "okay": "okie",
  "really?": "fr?"
};

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = () => {
    let translated = input.toLowerCase();
    Object.keys(dictionary).forEach(key => {
      const regex = new RegExp(`\b${key}\b`, 'gi');
      translated = translated.replace(regex, dictionary[key]);
    });
    setOutput(translated);
  };

  return (
    <div className="App">
      <h1>GenZify Translator</h1>
      <textarea placeholder="Type your sentence..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={translate}>Translate</button>
      <h2>Gen Z Output:</h2>
      <p>{output}</p>
    </div>
  );
}

export default App;
