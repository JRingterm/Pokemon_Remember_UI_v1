import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pkrecord from "./routers/Pkrecord";
import Detail from "./routers/Detail";
import Add from "./routers/Add";
import Modify from "./routers/Modify";
import Search from "./routers/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/modify/:id">
          <Modify />
        </Route>
        <Route path="/search/:name">
          <Search />
        </Route>
        <Route path="/">
          <Pkrecord />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
