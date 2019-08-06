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

class AboutMe extends Component {
    render() {
        return (
            <div class="row">
                {/* TODO Add image */}
                    {/* <div class="two-thirds column"> */}
                    <div class="column">
                        <p style={{ marginBottom: "1%"}}>
                        Hi there! My name is Caroline, and I am a senior at 
                         <span class="hover-back-colorV1"> <a class="clean" href="https://www.vt.edu/">Virginia Tech</a></span> 
                         in Blacksburg, VA. I am pursuing a B.S. in 
                         <span class="hover-back-colorI1"> <a class="clean" href="https://www.ais.science.vt.edu/programs/cmda/our-program.html">Computational Modeling and Data Analytics</a></span>
                         , with minors in Computer Science and Mathematics. The Computational Modeling and Data Analytics (CMDA) program draws on 
                         expertise from three primary departments at Virginia Tech with strengths in quantitative science: 
                         Mathematics, Statistics, and Computer Science.
                         Besides writing meaningful code, I also like to exercise, listen to music, and hang out with my friends. 
                        </p>
                    </div>
                    {/* <div class="one-third column">
                        <p style={{ marginBottom: "2%"}}>
                        ADD picture
                        </p>
                    </div> */}


            </div >
        );
    }
}

export default AboutMe;
