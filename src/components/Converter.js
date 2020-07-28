import React, { useState } from "react";
import "./Converter.css";

const Converter = () => {
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onFormSubmit = () => {
    const checkOnlyZerosAndOnes = () => {
      if (binaryText.match(/^[0-1]+$/g) === null) {
        setErrorMessage("Enter either 0 or 1");
        return false;
      } else {
        return true;
      }
    };

    const clearErrorMessage = () => {
      setErrorMessage("");
    };

    const convertAndShowBinaryToDecimal = () => {
      const reversedBinaryText = binaryText.split("").map(Number).reverse();
      const result = reversedBinaryText.reduce(
        (previousValue, currentValue, currentIndex) => {
          return previousValue + currentValue * Math.pow(2, currentIndex);
        }
      );
      setDecimalText(result);
    };

    if (!checkOnlyZerosAndOnes()) {
      return;
    }
    clearErrorMessage();
    convertAndShowBinaryToDecimal();
  };

  return (
    <>
      <div className="BackgroundContainer">
        <h1>Binary to Decimal Converter</h1>
        <span id="Error">{errorMessage}</span>

        <div className="Field">
          <div>
            <div id="Label">Binary Input</div>
            <input
              id="TextInput"
              type="text"
              name="binary"
              placeholder="Enter 0 or 1"
              value={binaryText}
              onChange={(event) => setBinaryText(event.target.value)}
            />
          </div>
          <div>
            <div id="Label">Decimal Output</div>
            <input
              id="TextInput"
              type="text"
              name="decimal"
              value={decimalText}
              disabled
            />
          </div>
          <button id="ConvertButton" type="submit" onClick={onFormSubmit}>
            Convert
          </button>
        </div>
      </div>
    </>
  );
};

export default Converter;
