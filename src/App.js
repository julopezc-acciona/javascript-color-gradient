import React from "react";
import Gradient from "javascript-color-gradient";
import "./styles.css";

export default function App() {
  const colorGradient = new Gradient();
  const secondGradient = new Gradient();
  const thirdGradient = new Gradient();

  colorGradient.setGradient("#29e61c", "#ed1111");
  secondGradient.setGradient("#80004a", "#cc0077");
  thirdGradient.setGradient("#80004a", "#cc0077");

  colorGradient.setMidpoint(18);
  secondGradient.setMidpoint(12);
  thirdGradient.setMidpoint(12);

  const colorArr = colorGradient.getArray();
  const secondColorArr = secondGradient.getArray();
  const thirdColorArr = thirdGradient.getArray();

  return (
    <div className="App">
      <h4 className="header">Escala estándar</h4>
      <div className="App">
        {colorArr.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color, opacity: 0.5 }}
              key={color}
            />
          );
        })}
      </div>
      <h4 className="header"> Escala de viajes sin motos </h4>
      <div className="App">
        {secondColorArr.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color, opacity: 0.5 }}
              key={color}
            />
          );
        })}
      </div>
      <h4 className="header"> Escala de viajes sin motos </h4>
      <div className="App">
        {thirdColorArr.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color, opacity: 0.5 }}
              key={color}
            />
          );
        })}
      </div>
    </div>
  );
}
