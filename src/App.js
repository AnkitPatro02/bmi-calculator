import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);

  const [message, setmessage] = useState("");
  const [bmi, setbmi] = useState("");

  let calcBMI = (e) => {
    e.preventDefault();
    let height_new = height / 100;
    if (weight === 0 || height_new === 0) {
      alert("Please enter a valid weight and height...");
    } else {
      let bmi = weight / (height_new * height_new);
      setbmi(bmi.toFixed(1));

      if (bmi < 19) {
        setmessage("You are underweight");
      } else if (bmi >= 19 && bmi < 25) {
        setmessage("You are fit");
      } else if (bmi >= 25 && bmi < 30) {
        setmessage("You are overWeight");
      } else {
        setmessage("You have Obesity");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={calcBMI}>
          <div>
            <label>Weight(KG)</label>
            <input
              type="text"
              placeholder="weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(CM)</label>
            <input
              type="text"
              placeholder="height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
