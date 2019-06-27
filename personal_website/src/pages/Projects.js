import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

class Projects extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                    <div class="three columns">
                            <h4 class="sideSubHeadings"> Projects </h4>
                    </div>
                    <div class="nine columns">
                        <p style={{ marginBottom: ".5%" }}>
                        One of my favorite hobbies is working on side projects. 
                        Whether it’s working with a different language, a new design or 
                        a new technology, I am always looking for my next project and 
                        eager to learn something new. Currently I am trying to use AR.js 
                        to create augmented reality content that can be delivered through 
                        the web using Markers. Click the links below to check out some of 
                        my work!
                        </p>
                        <a class="button button-primary" href="https://github.com/alaydeliwala" style={{margin:"0px 5px 0px 0px"}}>
                            <i class="fa fa-github" style={{color:"white"}} aria-hidden="true"></i> Visit My GitHub
                        </a>
                        <a class="button button-primary" href="#" style={{margin:"0px 5px 0px 0px"}}> AR Project (Beta)</a>
                    </div>
                </div>
        );
    }
}

export default Projects;


