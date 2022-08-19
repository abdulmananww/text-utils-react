import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const setBackgroundColor = (event) => {
    let bgClr = event.target.value;
    setBgColor(bgClr);
    document.body.style.backgroundColor = bgClr;
    let contrastColor = pickTextColorBasedOnBgColorAdvanced(
      bgClr,
      "#ffffff",
      "#000000"
    );
    setColor(contrastColor);
  };
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00011a";
      showMessage("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showMessage("Enabled Light Mode", "success");
    }
  };
  const [message, setMessage] = useState(null);
  const showMessage = (message, type) => {
    setMessage({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  function pickTextColorBasedOnBgColorAdvanced(bgColor, lightColor, darkColor) {
    var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    return L > 0.179 ? darkColor : lightColor;
  }
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          bgColor={bgColor}
          color={color}
          setBackgroundColor={setBackgroundColor}
          toggleMode={toggleMode}
        />
        <Alert message={message} />
        <div className="container my-3">
          <Routes>
            <Route exact path="text-utils-react"
              element={<TextForm
                heading="Enter the text below to analyze"
                showMessage={showMessage}
                mode={mode}
                color={color}
                bgColor={bgColor}
              />}/>
            <Route exact path="text-utils-react/about" element={<About color={color} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
