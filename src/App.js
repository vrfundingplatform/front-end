import React from "react";
import "./SASS/index.scss";
import { Navigation } from "./components/navigation/navigation";
import { Dashboard } from "./loggedin/dashboard";
const App = () => {
  return (
    <div>{localStorage.getItem("token") ? <Dashboard /> : <Navigation />}</div>
  );
};

export default App;
