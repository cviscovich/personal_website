import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const buttonStyle = {
    padding: "1%",
};
const linkStyle = {
    color: "#0060B6",

};

class Footer extends Component {
    render() {
        return (
            < div class="row" style={{ marginTop: "3%", textAlign: "center" }} >
                <div class="column">
                    <a href="https://www.facebook.com/alay.deliwala.9" style={linkStyle}>
                        <i class="fab fa-facebook-square fa-2x" style={buttonStyle} aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alay-deliwala-21876b129/" style={linkStyle}>
                        <i class="fab fa-linkedin-square fa-2x" style={buttonStyle} aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/alay_deliwala/" style={linkStyle}>
                        <i class="fab fa-instagram fa-2x" style={buttonStyle} aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/alaydeliwala" style={linkStyle}>
                        <i class="fab fa-github fa-2x" style={buttonStyle} aria-hidden="true"></i>
                    </a>
                    <a href="https://itunes.apple.com/profile/alaydeliwala" style={linkStyle}>
                        <i class="fab fa-apple fa-2x" style={buttonStyle} aria-hidden="true"></i>
                    </a>
                </div>
            </div >
        );
    }
}

export default Footer;


