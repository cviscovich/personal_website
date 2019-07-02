import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/colors.css';

class AboutMe extends Component {
    render() {
        return (
            <div class="row">
                {/* TODO Add image */}
                    {/* <div class="two-thirds column"> */}
                    <div class="column">
                        <p style={{ marginBottom: "1%"}}>
                        Hey! I am currently a rising senior pursuing a B.S in Computer Science
                         at <span class="hover-back-colorU"> <a class="clean" href="https://www.ncsu.edu/">NC State University</a></span> in
                         Raleigh, NC. Besides writing meaningful code, I also like to play board games,
                         listen to music and stay involved in the NC State Community. I have a passion for
                         tackling tough problems head-on and taking any opportunity to learn something new!
                        </p>
                        <p style={{ marginBottom: "1%"}}>
                        During the summers of 2017 & 2018, I worked
                         at <span class="hover-back-colorN"><a class="clean" href="https://www.optum.com/">Optum</a></span> as
                         a software engineering intern, where I helped develop a POC for drone-based
                         prescription delivery and built an application designed to bridge
                         communication between patients and doctors. Aside from that, I work as a graphic designer
                         for <span class="hover-back-colorI"><a class="clean" href="https://studentinvolvement.dasa.ncsu.edu/involvement/red-i/redi-staff/">RED-i</a></span> at
                         NC State where I work to create engaging content for student organizations. This summer I am interning 
                         at <span class="hover-back-colorV"><a class="clean" href="https://www.salesforce.com/">Salesforce</a></span> under
                         the Lightning Bridge and VisualForce Team. 
                        </p>
                        
                    </div>
                    {/* <div class="one-third column">
                        <p style={{ marginBottom: "2%"}}>
                        ADD picture
                        </p>
                    </div> */}

                    <div class="column" style={{marginLeft:0}}>
                    <p style={{ marginBottom: "2%", textAlign:"left"}}>
                        This website is to give you a glimpse of me and what I’m up to these days!
                         It also links to my different social media
                        platforms, <span class="hover-back-colorE1"><a class="clean" href="mailto:ahdeliwala@gmail.com">email</a></span>,
                        and <span class="hover-back-colorR"><a class="clean" href="#">resume</a></span>.
                         Stay tuned to hear more about my life and projects!
                    </p>
                </div>

                </div >
        );
    }
}

export default AboutMe;
