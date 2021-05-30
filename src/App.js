import FishList from "./components/FishList";
import { BrowserRouteras as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/fish-list'>
          <FishList />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
