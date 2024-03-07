import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/page.css";

import Mainpage from "./pages/Mainpage.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className="App">
            <Mainpage />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
