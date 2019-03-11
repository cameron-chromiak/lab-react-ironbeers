import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllBeers from './components/AllBeers'
import RandomBeers from './components/RandomBeers'



class Index extends React.Component {


  render(){
      return <h2>Index</h2>;
  }
}


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllBeers/">All da Beers</Link>
            </li>
            <li>
              <Link to="/RandomBeers/">Random beerz</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/AllBeers/" component={AllBeers} />
        <Route path="/RandomBeers/" component={RandomBeers} />
      </div>
    </Router>
  );
}

export default AppRouter;
