import React, { Component } from 'react';
import './css/skeleton.css';
import './css/normalize.css';
import Header from './pages/Header'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';

// GitHub Universe Colors
// const colorU = "#F79432";
// const colorN = "#F37055";
// const colorI = "#EF4D7B";
// const colorV = "#A166AB";
// const colorE1 = "#4F73B8";
// const colorR = "#1D99AE";
// const colorS = "#0CB49B";
// const colorE2 = "#6CBC82";
// const colorBack = "#22292C";
// const colorWhite = "#EBF0F4";

class App extends Component {
    render() {
        return (
            <div class="container">

                {/* Header Section */}
                <Header/>

                {/* About Me Section */}
                <AboutMe/>

                {/* Projects Section */}
                <Projects/>

                {/* Experience Section */}
                <Experience/>

                {/* TODO: Add A skills section with stars */}
                {/* <Skills/> */}

                {/* Contact Me Section */}
                <ContactMe/>

            </div >
        );
    }
}

export default App;
