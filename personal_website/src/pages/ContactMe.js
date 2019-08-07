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


class ContactMe extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                        <h4 class="sideSubHeadings" >Contact Me</h4>
                </div>
                <div class="nine columns">
                    <p style={{ marginBottom:".5%"}}>
                    Feel free to reach out to me or check out my social media with the links below!
                    </p>
                    <a class="button button-primary" href="mailto:cvisco@vt.edu" target="_blank" rel="noopener noreferrer" style={{margin:"0px 5px 0px 0px", backgroundColor:colorV2, borderColor:colorV2}}>
                    <i class="fas fa-envelope"></i> Email Me</a>
                    <a class="button button-primary" href="https://www.facebook.com/caroline.viscovich" target="_blank" rel="noopener noreferrer" style={{margin:"0px 5px 0px 0px", backgroundColor:colorI2, borderColor:colorI2}}>
                    <i class="fab fa-facebook-square"></i> My Facebook</a>
                    <a class="button button-primary" href="https://www.instagram.com/carolinevisco/" target="_blank" rel="noopener noreferrer" style={{margin:"0px 5px 0px 0px", backgroundColor:colorI2, borderColor:colorI2}}>
                    <i class="fab fa-instagram"></i> My Instagram</a>
                    <a class="button button-primary" href="https://www.linkedin.com/in/caroline-viscovich-09a048156/" target="_blank" rel="noopener noreferrer" style={{margin:"0px 5px 0px 0px", backgroundColor:colorC2, borderColor:colorC2}}>
                    <i class="fab fa-linkedin"></i> My Linkedin</a>
                    <a class="button button-primary" href="https://open.spotify.com/user/visc0?si=x0AuDmfwRTO93k29jsyWQw" target="_blank" rel="noopener noreferrer" style={{margin:"0px 5px 0px 0px", backgroundColor:colorH, borderColor:colorH}}> 
                    <i class="fab fa-spotify"></i> My Spotify</a>
                </div>
            </div>
        );
    }
}

export default ContactMe;


