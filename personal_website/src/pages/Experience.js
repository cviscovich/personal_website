import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorU = { color: "#F79432", };
const colorN = { color: "#F37055", };
const colorI = { color: "#EF4D7B", };
const colorV = { color: "#A166AB", };
const colorE1 = { color: "#4F73B8", };
const colorR = { color: "#1D99AE", };
const colorS = { color: "#0CB49B", };
const colorE2 = { color: "#6CBC82", };

class Experience extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                    <h4 class="sideSubHeadings"> Experience </h4>
                </div>
                <div class="nine columns">
                    <p style={{ textAlign: "left", marginBottom:".5%"}}>
                            Over the course of my undergraduate career at NC State,
                            I have had the incredible opportunity to be intern with
                            a couple of great companies and amazing teams. I spent
                            2 summers interning as a Software Developer at Optum and
                            spend the school year working as a graphic designer for
                            RED-i at NC State. In the future I hope to continue working
                            with amazing people and develop software that will help solve
                            our hardest problems!
                    </p>
                    <a class="button button-primary" href="https://github.com/alaydeliwala" style={{ margin: "0px 5px 0px 0px" }}>Visit My GitHub</a>
                    <a class="button button-primary" href="#" style={{ margin: "0px 5px 0px 0px" }}>AR Project (Beta)</a>
                    
                    <p style={{ textAlign: "left", marginBottom:".5%", marginTop:"1%"}}>
                        At NC State, I have actively participated and led different
                         student organizations. During the 2018-2019 school year, I
                         served as the Director for a colligate South Asian A Cappella
                         competition, Sangeet Saagar 2019 and also as the president of the South
                         Asian Student Association, EKTAA. This upcoming 2019-2020
                         school year, I have been selected as a director for Oak City
                         Revolution 2020. Click any of the links below to see highlight
                         reels and more info!
                        </p>
                </div>
            </div>
        );
    }
}

export default Experience;


