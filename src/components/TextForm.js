import React, { useState } from "react";
export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnClick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showMessage("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showMessage("Converted to Lowercase", "success");
  };
  const handleRESClick = () => {
    console.log(text);
    setText(text.replace(/\s+/g, " ").trim());
    props.showMessage("Extra spaces removed", "success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <div className="mb-3">
          <h2
            className="form-label"
            style={{ color: props.color }}
          >
            {props.heading}
          </h2>
          <textarea
            className="form-control"
            style={{
              color: props.color,
              backgroundColor: props.bgColor ,
            }}
            id="my-textarea"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Uppercase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
          Lowercase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleRESClick}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-2">
        <h2 style={{ color: props.color }}>
          Your Text Summary
        </h2>
        <p style={{ color: props.color }}>
          {text.replace(/\s+/g, " ").trim().length > 0
            ? text.replace(/\s+/g, " ").trim().split(" ").length
            : 0}{" "}
          words and {text.length} characters
        </p>
        <h3 style={{ color: props.color }}>
          Preview
        </h3>
        <p style={{ color: props.color }}>
          {text.replace(/\s+/g, " ").trim().length > 0
            ? text
            : "Enter in above textarea to preview here."}
        </p>
      </div>
    </>
  );
}
