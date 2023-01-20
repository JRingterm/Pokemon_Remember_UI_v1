import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pkrecord from "./routers/Pkrecord";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Pkrecord />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
