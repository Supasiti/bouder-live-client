import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Organise from './Organise'
import EditEvent from './EditEvent'
import Compete from './Compete'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/organise" component={Organise} />
          <Route path="/o/events/:eventId" component={EditEvent} />
          <Route path="/compete" component={Compete} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
