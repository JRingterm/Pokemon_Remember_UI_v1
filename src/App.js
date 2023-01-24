import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pkrecord from "./routers/Pkrecord";
import Detail from "./routers/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Pkrecord />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
