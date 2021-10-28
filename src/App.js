import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MV from "./components/MV";
import Show from "./components/Show";

function App() {
  const URL = "http://localhost:3000/";

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/mv">
          <MV URL={URL} />
        </Route>
        <Route path="/create">
          <Show URL={URL} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
