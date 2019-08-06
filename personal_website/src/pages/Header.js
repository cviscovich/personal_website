import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorV = { color: "#05B0E4", };
const colorI = { color: "#0A7CE3", };
const colorS = { color: "#0F4CE3", }; 
const colorC = { color: "#151EE2", };
const colorO = { color: "#411AE2", };
const colorV2 = { color: "#741FE1", };
const colorI2 = { color: "#A424E0", };
const colorC2 = { color: "#D129E0", };
const colorH = { color: "#DF2EC2", };

class Header extends Component {
    render() {
        return (
            < div class="row" style={{ marginTop: "3%"}} >
                    <div class="column">
                        <h2 style={{ marginBottom: "0px", color: "#DF2EC2"} }> Caroline
                        <span style={colorV}> V</span>
                        <span style={colorI}>i</span>
                        <span style={colorS}>s</span>
                        <span style={colorC}>c</span>
                        <span style={colorO}>o</span>
                        <span style={colorV2}>v</span>
                        <span style={colorI2}>i</span>
                        <span style={colorC2}>c</span>
                        <span style={colorH}>h</span>
                        </h2>
                        <p class="header" style={{ marginTop: "0px", marginBottom: "1.5%" }}> Student</p>
                    </div>
            </div >
        );
    }
}

export default Header;


