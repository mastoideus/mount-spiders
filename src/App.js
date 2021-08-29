import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Clients from './pages/Clients/Clients'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Header/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/home' exact>
      <Home/>
      </Route>
      <Route path='/clients'>
      <Clients/>
      </Route>
      <Route path='/' exact>
       <Redirect to='/home'></Redirect>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
