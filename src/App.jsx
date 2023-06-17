import React from "react";
import Middle from "./components/Middle";
import Right from "./components/Right";
import Left from "./components/Left";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="head">
        <div className="h-logo">NEWS</div>
        <div className="h-link">
          <div>Home</div>
          <div>Video</div>
          <div>Polls</div>
          <div>Magzine</div>
        </div>
        <div className="h-search">
          <input
            type="search"
            placeholder="search"
            className="h-search-input"
          />
        </div>
      </div>
      <div className="main">
        <div className="left">
          <Left />
        </div>
        <div className="middle">
          <Middle />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
      <div className="footer">
        Thank you for reading from My NEWS app 😊😊😊 </div>
    </>
  );
};

export default App;
