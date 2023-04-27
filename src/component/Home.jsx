import React from "react";
import { useState } from "react";
import "../styles/clc.css";
const Home = () => {
  const [inputChange, setInputChange] = useState("");
  const inputChangeHandler = (e) => {
    const values = e.target.value;
    setInputChange(inputChange.concat(values));
  };

  const clearAllData = () => {
    setInputChange("");
  };

  const resultData = () => {
    setInputChange(eval(inputChange).toString());
  };

  return (
    <div className="container">
      <h1>React Js Calculator</h1>
      <h1>Md Intezar Alam</h1>
      <div className="calculator_box">
        <input
          type="text"
          className="display_data"
          value={inputChange}
          onClick={inputChangeHandler}
        />
        <div className="button_container">
          <input
            type="button"
            value="9"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="8"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="7"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="6"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="5"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="4"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="3"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="2"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="1"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="0"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="."
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="+"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="-"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="*"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="/"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="%"
            className="button_style"
            onClick={inputChangeHandler}
          />
          <input
            type="button"
            value="Clear"
            className="button_style clear"
            onClick={clearAllData}
          />
          <input
            type="button"
            value="="
            className="button_style"
            onClick={resultData}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
