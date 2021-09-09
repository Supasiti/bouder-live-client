import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
