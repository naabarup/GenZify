// src/App.js
import React, { useState } from "react";

const genZDictionary = {
  "hello": "yo",
  "friend": "bestie",
  "cool": "lit",
  "great": "fire",
  "yes": "yass",
  "no": "nah",
  "money": "coins",
  "awesome": "dope",
  "really": "fr",
  "okay": "okurrr",
  "good": "gucci",
  "wow": "sheesh",
  "thank you": "thx",
  "bye": "peace out",
  "amazing": "sick",
  "sorry": "my bad",
};

function genZifyText(text) {
  // Replace words with Gen Z slang from dictionary
  let lowerText = text.toLowerCase();

  // Simple replace with regex for whole words
  Object.entries(genZDictionary).forEach(([key, val]) => {
    const regex = new RegExp(`\\b${key}\\b`, "gi");
    lowerText = lowerText.replace(regex, val);
  });

  // Capitalize first letter
  return lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
}

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = () => {
    setOutput(genZifyText(input));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GenZify</h1>
      <p style={styles.subtitle}>Turn your normal English into Gen Z slang!</p>
      <textarea
        placeholder="Type something here..."
        style={styles.textarea}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTranslate} style={styles.button}>
        GenZify it!
      </button>
      {output && (
        <div style={styles.outputBox}>
          <h2>Your GenZified Text:</h2>
          <p style={styles.outputText}>{output}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "50px auto",
    padding: 20,
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)",
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 0,
  },
  subtitle: {
    color: "#f0e68c",
    marginBottom: 20,
    fontWeight: "600",
  },
  textarea: {
    width: "100%",
    height: 120,
    padding: 15,
    borderRadius: 10,
    border: "none",
    fontSize: 18,
    resize: "none",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.7)",
    marginBottom: 20,
  },
  button: {
    padding: "12px 30px",
    fontSize: 18,
    borderRadius: 10,
    border: "none",
    backgroundColor: "#fff",
    color: "#FF8C00",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(255,140,0,0.5)",
    transition: "all 0.3s ease",
  },
  outputBox: {
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  outputText: {
    fontSize: 24,
    color: "#333",
    fontWeight: "600",
  },
};
