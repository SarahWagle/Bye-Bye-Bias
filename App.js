import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputValue(inputValue);
  };

  return (
    <div className="App">
      <h1>Welcome to Bye-Bye Bias</h1>
      <h2>Fostering Inclusive Communication and Detecting Bias in Writing</h2>
      <div className="container">
        <div className="input-block">
          <h3>Enter Text</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type something..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        
        <div className="output-block">
          <h3>Rephrased Version</h3>
          <textarea value={outputValue} readOnly></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;