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
                        <p>
                            <span> Java </span>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star checked"></span>
                            <span class="fas fa-star"></span>
                            <span class="fas fa-star"></span>
                        </p>
                    </div>
                </div>
        );
    }
}

export default Skills;


