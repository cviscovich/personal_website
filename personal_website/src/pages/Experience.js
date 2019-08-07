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

class Experience extends Component {
    render() {
        return (
            <div class="row" style={{ marginBottom: "2%" }}>
                <div class="three columns">
                    <h4 class="sideSubHeadings"> Experience </h4>
                </div>
                <div class="nine columns">
                    <p style={{ marginBottom:".5%"}}>
                    Over the course of my undergraduate career at Virginia Tech, I have had the incredible
                     opportunity to intern with a couple of great companies and amazing teams. I have
                     gained invaluable experience and can’t wait to start working full-time!
                     My focus for the future is applying my vast data science and predictive analytics skills
                     from Virginia Tech and combining it with my freshly developed front-end skills from
                     my internships to foster a creative and innovative full-time career.
                    </p>
                    <p style={{ marginBottom:".5%"}}>
                    Throughout 2017, I worked as a computational design intern for
                    <span class="hover-back-colorV"> <a class="clean" href="https://www.sportingchic.com/" target="_blank" rel="noopener noreferrer">Sporting Chic</a></span>
                    , an online
                    blog that empowers female athletes, where I worked directly under the company founders and
                    used Squarespace to maintain the website.
                    </p>
                    <p style={{ marginBottom:".5%"}}>
                    During the summer of 2018, I was an intern at 
                    <span class="hover-back-colorI"> <a class="clean" href="https://www.boozallen.com/" target="_blank" rel="noopener noreferrer">Booz Allen Hamilton</a></span>
                    , a consulting company based in the DC Metro Area, where I worked on a team to develop a 
                    forecasting solution using R and Python for corporate client using machine learning algorithms and data science.
                    </p>
                    <p style={{ marginBottom:".5%"}}>
                    For this past summer in 2019, I had an internship at the world's #1 CRM Platform for six consecutive years,
                    <span class="hover-back-colorS"> <a class="clean" href="https://www.salesforce.com/products/what-is-salesforce/" target="_blank" rel="noopener noreferrer">Salesforce</a></span>
                    . At Salesforce, I worked on the Visualforce team within the UI Platform cloud, where I delivered code to an enterprise application using
                    a custom Salesforce modern UI framework. 
                    </p>
                    <a class="button button-primary" href="../cviscovich_resume.pdf" style={{ margin: "0px 5px 0px 0px" , backgroundColor:colorC, borderColor:colorC}} download>
                    <i class="fa fa-file"></i> View My Resume</a>
                </div>
            </div>
        );
    }
}

export default Experience;


