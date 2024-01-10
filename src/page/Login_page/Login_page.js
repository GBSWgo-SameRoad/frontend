import React from "react";
import './Login_page.css';
import Logo from '../Main_page/img/main_white_logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Loginpage() {
    return(
        <body id="Login_body">
            <div id="img">
                <div id="Login_shawdow">
                    <Link to='/Mainpage'>
                        <FaArrowLeft className="Login_backarrow" />
                    </Link>
                    <h1 id="Login_h1">
                        환영합니다
                    </h1>
                    <p id="Login_p">
                        Login page
                    </p>
                </div>
            </div>
            <div id="Login_box_body">
                <img src={Logo} id="Login_Logo"></img>
                <div id="Login_container">
                    <div className="Login_input">
                        <FaRegUserCircle className="Login_icon"/>
                        <p>|</p>
                        <input type="text" placeholder="아이디"/>
                    </div>
                    <div className="Login_input">
                        <RiLockPasswordFill className="Login_icon" />
                        <p>|</p>
                        <input type="password" placeholder="비밀번호"/>
                    </div>
                    <input type="submit" className="login_submit" value={'로그인'}/>
                    <p className="Login_signup_text">아직 계정이 없으신가요?</p>
                    <Link to='/Signuppage' id="Login_go_signuppage">
                        <p>
                            회원가입
                        </p>
                    </Link>
                </div>
            </div>
        </body>
    );
}

export default Loginpage;