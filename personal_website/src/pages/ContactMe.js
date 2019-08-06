import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorV = "#E3E834";
const colorI = "#B7F935";
const colorS = "#57FB5E";
const colorC = "#34FB96"; 
const colorO = "#34FBDE";


class ContactMe extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                        <h4 class="sideSubHeadings" >Contact Me</h4>
                </div>
                <div class="nine columns">
                    <a class="button button-primary" href="mailto:cvisco@vt.edu" style={{margin:"0px 5px 0px 0px", backgroundColor:colorV, borderColor:colorV}}>
                    <i class="fas fa-envelope"></i> Email Me</a>
                    <a class="button button-primary" href="https://www.facebook.com/caroline.viscovich" style={{margin:"0px 5px 0px 0px", backgroundColor:colorI, borderColor:colorI}}>
                    <i class="fas fa-facebook"></i> My Facebook</a>
                    <a class="button button-primary" href="https://www.linkedin.com/in/caroline-viscovich-09a048156/" style={{margin:"0px 5px 0px 0px", backgroundColor:colorS, borderColor:colorS}}>
                    <i class="fab fa-linkedin"></i> My Linkedin</a>
                    <a class="button button-primary" href="https://open.spotify.com/user/visc0?si=x0AuDmfwRTO93k29jsyWQw" style={{margin:"0px 5px 0px 0px", backgroundColor:colorC, borderColor:colorC}}> 
                    <i class="fab fa-spotify"></i> My Spotify</a>
                </div>li
            </div>
        );
    }
}

export default ContactMe;


