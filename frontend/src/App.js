import React from "react";
import Routesfile from "./routes/Routesfile";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routesfile />
    </div>
  );
};

export default App;
