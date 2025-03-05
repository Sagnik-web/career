import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Navber from './component/Navber/Navber'
import JobPost from './pages/HR/JobPost/JobPost'
import Users from './pages/HR/Users/Users'
import Applications from './pages/HR/Applications/Applications'
import ApplicationDetail from './pages/HR/ApplicationDetail/ApplicationDetail'
import AllJobs from './pages/HR/AllJobs/AllJobs'
import JobApplications from './pages/HR/JobApplications/JobApplications'
import Applied from './pages/Applied/Applied'

function App() {
  return (
   <div>
      <BrowserRouter>
      <Navber/>
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
          <Route path="/applied">
            <Applied/>
          </Route>
          <Route path="/hr" exact>
              <AllJobs/>
          </Route>
          <Route path="/hr/job_application" exact>
              <JobApplications/>
          </Route>
          <Route path="/hr/job_post">
              <JobPost/>
          </Route>
          <Route path="/hr/application/all" exact>
              <Applications/>
          </Route>
          <Route path="/hr/application/single/:applicationID">
              <ApplicationDetail/>
          </Route>
          <Route path="/hr/users">
              <Users/>
          </Route>
          
        </Switch>
      </BrowserRouter>
   </div>
  )
}

export default App
