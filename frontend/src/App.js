// src/App.jsx
import React, { useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import ResultDisplay from "./components/ResultDisplay";
import { refineText } from "./services/api";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRefine = async () => {
    if (!input.trim()) return alert("Please enter some text");

    setLoading(true);
    try {
      const polished = await refineText(input);
      setResult(polished);
    } catch {
      alert("Error refining text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h1>Tone Polish AI Assistant</h1>
      <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleRefine} disabled={loading}>
        {loading ? "Refining..." : "Refine"}
      </Button>
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
