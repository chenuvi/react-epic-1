import React, { Suspense, lazy } from 'react'
import './app.css'
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

function App() {
  return (
    <div className="app">
      <Header />
      <main>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/history' component={History}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
