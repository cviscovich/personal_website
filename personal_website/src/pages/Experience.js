import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorV = "#E3E834";
const colorI = "#B7F935";
const colorS = "#57FB5E";
const colorC = "#34FB96"; 
const colorO = "#34FBDE";

class Experience extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                    <h4 class="sideSubHeadings"> Experience </h4>
                </div>
                <div class="nine columns">
                    <p style={{ marginBottom:".5%"}}>
                    Over the course of my undergraduate career at NC State, I have had the incredible
                     opportunity to intern with a couple of great companies and amazing teams. I have
                     gained invaluable experience and can’t wait to start working full-time. My focus
                     for the future is learning how to use my passion for CS to help with issues of
                     social and economic justice. I believe that we have many amazing technologies
                     available to us and we have only scratched the surface of what can be done! 
                    </p>
                    <a class="button button-primary" href="../cviscovich_resume.pdf" style={{ margin: "0px 5px 0px 0px" , backgroundColor:colorV, borderColor:colorV}} download>
                    <i class="fa fa-file"></i>View My Resume</a>
                </div>
            </div>
        );
    }
}

export default Experience;


