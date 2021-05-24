import React from 'react';
import './App.scss';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MediaPlayer from './components/MediaPlayer/MediaPlayer';
import MoreBenefits from './components/MoreBenefits/MoreBenefits';
import Reviews from './components/Reviews/Reviews';
import Template from './components/Template/Template';

const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <MediaPlayer />
            <Template />
            <Benefits />
            <MoreBenefits />
            <HowItWorks />
            <Features />
            <Reviews />
            novoresume
            <Footer />
        </div>
    );
}

export default App;
