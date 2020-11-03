import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import History from './pages/History'
import Home from './pages/Home'


function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/history'  component={History}></Route>
        <Route path='/'  component={About}></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
