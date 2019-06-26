import React, { Component } from 'react';

import '../css/skeleton.css';
import '../css/normalize.css';

const colorU = { color: "#F79432",};
const colorN = { color: "#F37055", };
const colorI = { color: "#EF4D7B", };
const colorV = { color: "#A166AB", };
const colorE1 = { color: "#4F73B8", };
const colorR = { color: "#1D99AE", };
const colorS = { color: "#0CB49B", };
const colorE2 = {color: "#6CBC82",};

class Header extends Component {
    render() {
        return (
            < div class="row" style={{ marginTop: "3%"}} >
                    <div class="column">
                        <h2 style={{ marginBottom: "0px" }}> Alay
                        <span style={colorU}> D</span>
                        <span style={colorN}>e</span>
                        <span style={colorI}>l</span>
                        <span style={colorV}>i</span>
                        <span style={colorE1}>w</span>
                        <span style={colorR}>a</span>
                        <span style={colorS}>l</span>
                        <span style={colorE2}>a</span>
                        </h2>
                        <p class="header" style={{ marginTop: "0px", marginBottom: "1.5%" }}> Problem Solver | Lifetime Student</p>
                    </div>
            </div >
        );
    }
}

export default Header;


