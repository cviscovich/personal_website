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


class College extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                    <div class="three columns">
                            <h4 class="sideSubHeadings"> College Involvement </h4>
                    </div>
                    <div class="nine columns">
                        <p style={{ marginBottom: ".5%" }}>
                        There is nothing that I love more than being a student at Virginia Tech. The main reason that
                         I have cultivated such a warm home in Blacksburg, VA is due to my campus involvement.
                         I am the Co-President, Captain, and Social Media Representative of the Club Soccer Team at Virginia Tech, where we play
                         competitively at the Divisional, Regional, and National level. (Check out our website I created below!)
                         I am a CMDA Ambassador for the Academy of Integrated Science, which allows me to boast about my
                         incredible major to prospective CMDA students that are considering attending Virginia Tech.
                         I am a member of the Alpha Chi Omega sorority, where I have developed incredily strong friendships
                         and have been given many opportunities to volunteer in philanthropy events.
                         Click the links below to check out my organizations!
                        </p>
                        <a class="button button-primary" href="http://wsoccervt.weebly.com/" style={{margin:"0px 5px 0px 0px", backgroundColor:colorV, borderColor:colorV}}>
                        <i class="fa-futbol-o" aria-hidden="true"/> Club Soccer Website</a>
                        <a class="button button-primary" href="https://www.ais.science.vt.edu/programs/cmda.html" style={{margin:"0px 5px 0px 0px", backgroundColor:colorI, borderColor:colorI}}> 
                        <i class="fas fa-university"></i> CMDA Website</a>
                        <a class="button button-primary" href="https://www.facebook.com/vtalphachi/" style={{margin:"0px 5px 0px 0px", backgroundColor:colorS, borderColor:colorS}}> 
                        <i class="fas fa-female"></i> Alpha Chi Omega</a>
                        {/* <a class="button button-primary" href="#" style={{margin:"0px 5px 0px 0px"}}>
                            <i class="fas fa-vr-cardboard" aria-hidden="true"></i> AR Project (Beta)</a> */}
                    </div>
                </div>
        );
    }
}

export default College;


