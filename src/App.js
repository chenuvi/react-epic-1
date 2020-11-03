import React, { Suspense, lazy } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const About = lazy(() => import('./pages/About'))

// import About from './pages/About'
// import History from './pages/History'
// import Home from './pages/Home'


function App() {
  return (
    <div className="app">
      <Header />

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/history' component={History}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
