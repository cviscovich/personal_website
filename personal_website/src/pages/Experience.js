import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorV = "#05B0E4";
const colorI = "#0A7CE3";
const colorS = "#0F4CE3"; 
const colorC = "#151EE2";
const colorO = "#411AE2";
const colorV2 = "#741FE1";
const colorI2 = "#A424E0";
const colorC2 = "#D129E0";
const colorH = "#DF2EC2";

class Experience extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                    <h4 class="sideSubHeadings"> Experience </h4>
                </div>
                <div class="nine columns">
                    <p style={{ marginBottom:".5%"}}>
                    Over the course of my undergraduate career at Virginia Tech, I have had the incredible
                     opportunity to intern with a couple of great companies and amazing teams. I have
                     gained invaluable experience and can’t wait to start working full-time!
                      My focus
                     for the future is learning how to use my passion for CS to help with issues of
                     social and economic justice. I believe that we have many amazing technologies
                     available to us and we have only scratched the surface of what can be done! 
                    </p>
                    <a class="button button-primary" href="~/personal_website/personal_website/src/cviscovich_resume.pdf" style={{ margin: "0px 5px 0px 0px" , backgroundColor:colorC, borderColor:colorC}} download>
                    <i class="fa fa-file"></i> View My Resume</a>
                </div>
            </div>
        );
    }
}

export default Experience;


