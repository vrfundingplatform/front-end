import React from "react";
import "./SASS/index.scss";
import { Navigation } from "./components/navigation/navigation";
import AppRouter from "./forms/AppRouter";

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <AppRouter/>
    </div>
  );
};

export default App;
