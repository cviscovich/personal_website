import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

const colorV = "#05B0E4";
const colorI = "#0A7CE3";
const colorS = "#0F4CE3"; 
const colorC = "#151EE2";
const colorO = "#411AE2";
const colorV2 = "#741FE1";
const colorI2 = "#A424E0";
const colorC2 = "#D129E0";
const colorH = "#DF2EC2";

class Projects extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                    <div class="three columns">
                            <h4 class="sideSubHeadings"> Projects </h4>
                    </div>
                    <div class="nine columns">
                        <p style={{ marginBottom: ".5%" }}>
                        One of the best ways to grow as a software developer is to persue personal projects.
                         Whether it's working with a new programming language, new technology, or new design, 
                         I am always looking to learn something new.
                         Click the link below to check out some of my work!
                        </p>
                        <a class="button button-primary" href="https://github.com/cviscovich" style={{margin:"0px 5px 0px 0px", backgroundColor:colorO, borderColor:colorO}}>
                            <i class="fab fa-github" aria-hidden="true"/> Visit My GitHub
                        </a>
                        {/* <a class="button button-primary" href="#" style={{margin:"0px 5px 0px 0px"}}>
                            <i class="fas fa-vr-cardboard" aria-hidden="true"></i> AR Project (Beta)</a> */}
                    </div>
                </div>
        );
    }
}

export default Projects;


