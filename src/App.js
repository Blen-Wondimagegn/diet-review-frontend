import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DietList from "./containers/DietList";
import Home from "./components/Home";
import DietNew from "./containers/DietNew.js";
// import DietEdit from "./components/DietEdit.js";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/diets/new" component={DietNew} />
            <Route exact path="/diets" component={DietList} />
            {/* <Route exact path="/diets/:id/edit" component={DietEdit} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
