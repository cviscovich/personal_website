import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorU = "#F79432";
const colorN = "#F37055";
const colorI = "#EF4D7B";
// const colorV = "#A166AB"; 
// const colorE1 = "#4F73B8";
// const colorR = "#1D99AE";
// const colorS = "#0CB49B";
// const colorE2 = "#6CBC82";

class ContactMe extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                        <h4 class="sideSubHeadings" >Contact Me</h4>
                </div>
                <div class="nine columns">
                    <p style={{ textAlign: "left", marginBottom:".5%"}}>
                    I love listening to music, playing new board games, watching 
                    TV shows and munching on candy. I am a social person. Or that’s 
                    what I tell myself. Either way, feel free to reach out!
                    </p>
                    <a class="button button-primary" href="mailto:ahdeliwala@gmail.com" style={{margin:"0px 5px 0px 0px", backgroundColor:colorI, borderColor:colorI}}>
                    <i class="fas fa-envelope"></i> Email Me</a>
                    <a class="button button-primary" href="https://www.linkedin.com/in/alay-deliwala-21876b129/" style={{margin:"0px 5px 0px 0px", backgroundColor:colorN, borderColor:colorN}}>
                    <i class="fab fa-linkedin"></i> My Linkedin</a>
                    <a class="button button-primary" href="https://itunes.apple.com/profile/alaydeliwala" style={{margin:"0px 5px 0px 0px", backgroundColor:colorU, borderColor:colorU}}> 
                    <i class="fab fa-apple"></i> Currently listening to...</a>
                </div>
            </div>
        );
    }
}

export default ContactMe;


