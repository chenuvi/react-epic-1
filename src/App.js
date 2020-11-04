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
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Login'))


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/history' component={History}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
