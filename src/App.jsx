import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Bureau from './sections/Bureau';
import Contact from './sections/Contact';
import JoinClub from './sections/JoinClub';
import './index.css';

function App() {
    return (
        <div className="App">
            <ScrollManager />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Events />
                <Bureau />
                <Contact />
                <JoinClub />
            </main>
            <Footer />
        </div>
    );
}

export default App;
