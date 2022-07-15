import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
// import components
import Navbar from './components/Navbar'
import SingleMeal from './pages/SingleMeal'
function App() {
  return (
    <div>
       <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
        </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact  path='/cocktail/:id'>
        <SingleMeal/>
      </Route>
      {/* <Route exact strict component ={Error} /> */}
      </Router>
    </div>
  )
}

export default App
