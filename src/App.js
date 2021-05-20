import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'


import About from './pages/about/About'
import Offer from './pages/offer/Offer'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'

import ScrollToTop from './components/scroll to top/ScrollToTop'
import NotFound from './pages/not found/NotFound'





const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />

            <Switch>
                <Route path='/' exact>
                    <Home/>                  
                </Route>
                <Route path='/about' exact >
                    <About />
                </Route>
                <Route path='/offer' exact >
                    <Offer />
                </Route>
                <Route path='/contact' exact >
                    <Contact />
                </Route>
                <Route path='*'  >
                    <NotFound />
                </Route>
               

            </Switch>

            <Footer />

        </Router>
    )
}

export default App
