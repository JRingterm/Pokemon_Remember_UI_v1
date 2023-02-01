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
        <Route path={`${process.env.PUBLIC_URL}/detail/:id`}>
          <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/add`}>
          <Add />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/modify/:id`}>
          <Modify />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/search/:name`}>
          <Search />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Pkrecord />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
