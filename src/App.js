import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Organise from './Organise'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/organise" component={Organise} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
