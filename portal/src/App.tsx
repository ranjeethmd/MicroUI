import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MicroUIContainer } from "./components/micro-ui-container";

function App() {
  const uis = [
    {
      source: "http://localhost:5000/static/js/main.a7f9d866.js",
      href: "http://localhost:5000/static/css/main.073c9b0a.css",
      id: "micro-ui-1",
    },
    {
      source: "http://localhost:8080/static/js/main.e3e56127.js",
      href: "http://localhost:8080/static/css/main.073c9b0a.css",
      id: "micro-ui-2",
    },
  ];
  return (
    <div className="App">
      <div>
        {uis.map((ui, index) => (
          <div
            style={{
              display: "inline-block",
              width: "800px",
              height: "200px",
              padding: 1,
            }}
          >
            <MicroUIContainer key={index} {...ui} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
