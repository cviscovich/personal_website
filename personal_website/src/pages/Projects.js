import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

const colorV = "#E3E834";
const colorI = "#B7F935";
const colorS = "#57FB5E";
const colorC = "#34FB96"; 
const colorO = "#34FBDE";

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
                        <a class="button button-primary" href="https://github.com/cviscovich" style={{margin:"0px 5px 0px 0px", backgroundColor:colorS, borderColor:colorS}}>
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


