import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = lazy(() => import('./containers/HistoricChart'));
const LiveChart = lazy(() => import('./containers/LiveChart'));

const App = () => {
  
  return <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/live-chart">LiveChart</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/live-chart' component={LiveChart} />
      </Switch>
    </Suspense>
  </Router>


}

export default App;
