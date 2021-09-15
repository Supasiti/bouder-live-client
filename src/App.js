import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Organise from './Organise'
import EditEvent from './EditEvent'
import Compete from './Compete'
import JoinEvent from './JoinEvent'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar height="h-12 sm:h-16" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/organise" component={Organise} />
          <Route path="/o/events/:eventId" component={EditEvent} />
          <Route path="/compete" component={Compete} />
          <Route path="/c/events/:eventId" component={JoinEvent} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
