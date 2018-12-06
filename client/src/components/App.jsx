import React, { Component, Fragment } from 'react';
import NavigationBar from './Navbar';
import Hero from './Hero';
import Features from './features';
import About from './About';
import Footer from './footer';
import LoginModal from './modals/loginModal';
import Updates from './Updates';
import SignUpModal from './modals/SignUpModal';


class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <Hero />
                <About />
                <Features />
                <Updates />
                <Footer />
                <LoginModal />
                <SignUpModal />
            </ React.Fragment>
        )
    }
}

export default Navigation;