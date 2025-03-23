import React from "react";
import { useState } from "react";

export default function App() {
  const [sentence, setSentence] = useState("");
  return (
    <div>
      <Box sentence={sentence} setSentence={setSentence} />
    </div>
  );
}

function Box({ sentence, setSentence }) {
  const sentences = sentence.trim().split(/\s+/);
  const new_sentence = sentences.join("").length;

  return (
    <div className="container">
      <textarea
        id="textArea"
        placeholder="Enter the strings"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      ></textarea>
      <p className="counter">Characters:{new_sentence}</p>
      <p className="counter">
        {<Result sentence={sentence} setSentence={setSentence} />}
      </p>
    </div>
  );
}

function Result({ sentence, setSentence }) {
  const sentences = sentence
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0);
  return (
    <div>
      <h2 className="counter"> sentence: {sentences.length}</h2>
      <button className="counter" onClick={() => setSentence("")}>
        Delete
      </button>
    </div>
  );
}
