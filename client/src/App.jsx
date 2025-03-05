import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
   <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <h2>Home</h2>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <Route path="/register" >
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
   </div>
  )
}

export default App
