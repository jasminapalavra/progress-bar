import React, { useState } from "react";

function ProgressBar() {
  const [range, setRange] = useState(28);
  const [showValue, setShowValue] = useState(false);
  

  const handleChange = (e) => {
    e.preventDefault();
    setRange(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowValue(true);
  };

  return (
    <div className="container">
      <h1>Jasmina's Progress Bar</h1>
      <form onChange={handleChange}>
        <input
          className="range-input"
          type="range"
          min="0"
          max="100"
          value={range}
        ></input>
        <div>
          <button className="show-btn" onClick={handleClick}>
            Show Progress
          </button>
          {showValue && (
            <div className="progress">Input percentage is: {range} % </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProgressBar;
