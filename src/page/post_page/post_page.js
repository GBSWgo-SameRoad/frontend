import React from "react";
import './post_page.css';
import logo from '../Main_page/img/main_white_logo.png'

function postpage() {
    return(
        <body>
            <div id="postpage_header">
                <img src={logo} id="postpage_logo"></img>
            </div>
            <div>
                <div id="postpage_sidebar"></div>
                <div></div>
            </div>
        </body>
    );
}

export default postpage;