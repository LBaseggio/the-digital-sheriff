import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import WantedList from "./components/Wanted/WantedList";
import WantedDetails from "./components/Wanted/WantedDetails";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/wanted/:uid" component={WantedDetails} />
        <Route path="/wanted" component={WantedList} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
export default App;
