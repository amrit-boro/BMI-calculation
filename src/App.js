import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!weight || !height) {
      setResult("please enter the valid weight and height");
      return;
    }
    const heightInMeters = height * 0.3048;
    const bmi = weight / (heightInMeters * heightInMeters);
    const BMI = Math.floor(bmi * 100) / 100;

    setResult(BMI);
  }

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <h2>BMI Calculator</h2>
        <label>Weight (kg)</label>
        <input
          type="number"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <label>Height (feet)</label>
        <input
          type="number"
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      <p></p>

      {result !== null && (
        <>
          <p>Your BMI is: {isNaN(result) ? result : result}</p>
          {!isNaN(result) && (
            <p>
              Your result is:{" "}
              {result < 18.5
                ? "Underweight"
                : result < 24.9
                ? "Normal weight"
                : result < 30
                ? "Overweight"
                : "Obese"}
            </p>
          )}
        </>
      )}
    </div>
  );
}
