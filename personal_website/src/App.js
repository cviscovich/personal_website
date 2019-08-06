import React, { Component } from 'react';
import './css/skeleton.css';
import './css/normalize.css';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import College from './pages/College';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';

class App extends Component {
    render() {
        return (
            <div class="container">

                {/* Header Section */}
                <Header/>

                {/* About Me Section */}
                <AboutMe/>

                {/* College Involvement Section */}
                <College/>

                {/* Experience Section */}
                <Experience/>

                {/* Projects Section */}
                <Projects/>

                {/* TODO: Add A skills section with stars */}
                {/* <Skills/> */}

                {/* Contact Me Section */}
                <ContactMe/>

            </div >
        );
    }
}

export default App;
