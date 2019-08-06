import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';


const colorV1 = { color: "#E3E834", };
const colorI1 = { color: "#B7F935", };
const colorS = { color: "#57FB5E", };
const colorC1 = { color: "#34FB96", }; 
const colorO = { color: "#34FBDE", };
const colorV2 = { color: "#35FBFA", };
const colorI2 = { color: "#35F6FB", };
const colorC2 = { color: "#35EAFB", };
const colorH = { color: "#35DEFA", }; 

class Header extends Component {
    render() {
        return (
            < div class="row" style={{ marginTop: "3%"}} >
                    <div class="column">
                        <h2 style={{ marginBottom: "0px" }}> Caroline
                        <span style={colorV1}> V</span>
                        <span style={colorI1}>i</span>
                        <span style={colorS}>s</span>
                        <span style={colorC1}>c</span>
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


