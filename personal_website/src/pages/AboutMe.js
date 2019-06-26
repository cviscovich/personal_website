import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

class AboutMe extends Component {
    render() {
        return (
            <div class="row">
                    <div class="column">
                        <p style={{ marginBottom: "2%"}}>
                        Hey! I am a board game enthusiast with a knack for graphic design and a 
                        passion for computer science. I am currently a rising senior pursuing a 
                        B.S in Computer Science at <span class="hover-back-colorU"> NC State University</span> in Raleigh, NC. I am currently 
                        a Software Development intern at Salesforce.
                        </p>
                    </div>
                </div >
        );
    }
}

export default AboutMe;


