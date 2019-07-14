import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

// const colorU = "#F79432";
// const colorN = "#F37055";
// const colorI = "#EF4D7B";
const colorV = "#A166AB"; 
const colorE1 = "#4F73B8";
const colorR = "#1D99AE";
// const colorS = "#0CB49B";
// const colorE2 = "#6CBC82";

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
                    <a class="button button-primary" href="#" style={{ margin: "0px 5px 0px 0px" , backgroundColor:colorR, borderColor:colorR}}>
                    <i class="fas fa-file" aria-hidden="true"/> View My Resume</a>
                    
                    <p style={{marginBottom:".5%", marginTop:"2.75%"}}>
                        At NC State, I have actively participated and led different
                         student organizations. During the 2018-2019 school year, I
                         served as the Director for a colligate South Asian A Cappella
                         competition, Sangeet Saagar 2019 and also as the president of the South
                         Asian Student Association, EKTAA. This upcoming 2019-2020
                         school year, I have been selected as a director for Oak City
                         Revolution 2020. Click any of the links below to see highlight
                         reels and more info!
                    </p>
                    <a class="button button-primary" href="https://www.facebook.com/sangeetsaagardsi/videos/390614471749032/" style={{ margin: "0px 5px 0px 0px" , backgroundColor:colorE1, borderColor:colorE1}}>
                    <i class="fas fa-microphone-alt" aria-hidden="true"/> SS 2019 Highlights</a>
                    <a class="button button-primary" href="https://www.facebook.com/ncsuektaa/" style={{ margin: "0px 5px 0px 0px" , backgroundColor:colorV, borderColor:colorV}}>
                    <i class="fas fa-globe-asia" aria-hidden="true"/> EKTAA at NC State</a>
                </div>
            </div>
        );
    }
}

export default Experience;


