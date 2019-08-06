import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

const colorV = "#E3E834";
const colorI = "#B7F935";
const colorS = "#57FB5E";
const colorC = "#34FB96"; 
const colorO = "#34FBDE";

class AboutMe extends Component {
    render() {
        return (
            <div class="row">
                {/* TODO Add image */}
                    {/* <div class="two-thirds column"> */}
                    <div class="column">
                        <p style={{ marginBottom: "1%"}}>
                        Hi there! My name is Caroline and I am currently a rising senior at 
                         <span class="hover-back-colorV1"> <a class="clean" href="https://www.vt.edu/">Virginia Tech</a></span> 
                         in Blacksburg, VA. I am pursuing a B.S. in 
                         <span class="hover-back-colorI1"> <a class="clean" href="https://www.vt.edu/">Computational Modeling and Data Analytics</a></span>
                         , with minors in Computer Science and Mathematics. Besides writing meaningful code, I also like to exercise, listen to music, and hang out with my friends. 
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
