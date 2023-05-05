import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text","warning")
  };
  const countwords = () => {
    let count = text.split(" ").length;
    if (text === "") return 0;
    else return count;
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.title}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={
            props.mode === "dark"
              ? "btn btn-primary my-3 mx-3"
              : "btn btn-outline-primary my-3 mx-3"
          }
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          className={
            props.mode === "dark"
              ? "btn btn-primary my-3 mx-3"
              : "btn btn-outline-primary my-3 mx-3"
          }
          onClick={handleLoClick}
        >
          LowerCase
        </button>
        <button
          className={
            props.mode === "dark"
              ? "btn btn-warning my-3 mx-3"
              : "btn btn-outline-warning my-3 mx-3"
          }
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your Text Summary:
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {countwords()} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
