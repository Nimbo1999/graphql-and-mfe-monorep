import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

function getBaseElementOrFail(elementId: string): Element {
    const element = document.getElementById(elementId);
    if (element === null) throw new Error(`Could not found the #${elementId} element!`);
    return element;
}

const root = ReactDOM.createRoot(getBaseElementOrFail('root'));
root.render(<App />);
