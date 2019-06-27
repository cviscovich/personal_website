import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorU = "#F79432";
const colorN = { color: "#F37055", };
const colorI = { color: "#EF4D7B", };
const colorV = { color: "#A166AB", };
const colorE1 = { color: "#4F73B8", };
const colorR = { color: "#1D99AE", };
const colorS = { color: "#0CB49B", };
const colorE2 = { color: "#6CBC82", };

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
                    <a class="button button-primary" href="#" style={{margin:"0px 5px 0px 0px", backgroundColor:"#1D99AE" }}>Email Me!</a>
                    <a class="button button-primary" href="#" style={{margin:"0px 5px 0px 0px"}}> Currently listening to...</a>
                </div>
            </div>
        );
    }
}

export default ContactMe;


