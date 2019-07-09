import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

const colorU = "#F79432";
const colorN = "#F37055";
const colorI = "#EF4D7B";
const colorV = "#A166AB"; 
const colorE1 = "#4F73B8";
const colorR = "#1D99AE";
const colorS = "#0CB49B";
const colorE2 = "#6CBC82";

class Skills extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                    <div class="three columns">
                            <h4 class="sideSubHeadings"> Skills </h4>
                    </div>
                    <div class="nine columns">
                        <p style={{ marginBottom: ".5%" }}>
                        One of my favorite hobbies is working on side projects.
                         Whether it’s working with a different language,
                         new technology or on a new design,
                         I am always looking for my next project and eager to learn
                         something new. Currently, I am trying to use AR.js to create
                         augmented reality content that can be delivered through the web
                         using Markers. Click the links below to check out some of my work!
                        </p>
                        <a class="button button-primary" href="https://github.com/alaydeliwala" style={{margin:"0px 5px 0px 0px", backgroundColor:colorE2, borderColor:colorE2}}>
                            <i class="fab fa-github" aria-hidden="true"/> Visit My GitHub
                        </a>
                        {/* <a class="button button-primary" href="#" style={{margin:"0px 5px 0px 0px"}}>
                            <i class="fas fa-vr-cardboard" aria-hidden="true"></i> AR Project (Beta)</a> */}
                    </div>
                </div>
        );
    }
}

export default Skills;


