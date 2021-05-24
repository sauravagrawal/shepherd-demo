import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SharedNotes from "./pages/SharedNotes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div class="page">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/sharedNotes" component={SharedNotes} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
