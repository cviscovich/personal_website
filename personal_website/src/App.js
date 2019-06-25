import React, { Component } from 'react';
import './css/skeleton.css';
import './css/normalize.css';
import Footer from './pages/Footer.js'

// GitHub Universe Colors
const colorU = "#F79432";
const colorN = "#F37055";
const colorI = "#EF4D7B";
const colorV = "#A166AB";
const colorE1 = "#4F73B8";
const colorR = "#1D99AE";
const colorS = "#0CB49B";
const colorE2 = "#6CBC82";
const colorBack = "#22292C";
const colorWhite = "#EBF0F4";

class App extends Component {
    render() {
        return (
            <div class="container">

                {/* Title Section */}
                <div class="row">
                    <div class="column" style={{ marginTop: "25px" }}>
                        <h2> Alay Deliwala.</h2>
                    </div>
                </div>

                {/* About Me Section */}
                <div class="row" >
                    A rising senior pursing a B.S. in Computer Science at North Carolina State University.
                    I am a board game enthusiast with a knack for graphic design and a passion for Computer
                    Science. I love talking about music, watching tv shows and munching on candy. Feel free
                    to reach out!
                </div >

                {/* Projects Section */}
                <div class="row" style={{ marginTop: "3%" }}>
                    <div class="three columns">
                        <p style={{ textAlign: "left" }}>
                            <h4> Projects </h4>
                        </p>
                    </div>
                    <div class="nine columns">
                        <p>
                            To Do
                        </p>
                    </div>
                </div>

                {/* Experience Section */}
                <div class="row" style={{ marginTop: "3%" }}>
                    <div class="three columns">
                        <p >
                            <h4> Experience </h4>
                        </p>
                    </div>
                    <div class="nine columns">
                        <p style={{ textAlign: "left" }}>
                            To Do
                        </p>
                    </div>
                </div>

                {/* Contact Me Section */}
                <div class="row" style={{ marginTop: "3%" }}>
                    <div class="three columns">
                        <p>
                            <h4>Contact Me</h4>
                        </p>
                    </div>
                    <div class="nine columns">
                        <p style={{ textAlign: "left" }}>
                            To Do
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div class="row" style={{ marginTop: "3%", textAlign: "center" }}>
                    <Footer />
                </div>

            </div >
        );
    }
}

export default App;
