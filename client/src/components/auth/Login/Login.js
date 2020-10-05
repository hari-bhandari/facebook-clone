import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Login.css'
const Login = () => {
    function toggleSignup(){
        document.getElementById("login-toggle").style.backgroundColor="#fff";
        document.getElementById("login-toggle").style.color="#222";
        document.getElementById("signup-toggle").style.backgroundColor="#57b846";
        document.getElementById("signup-toggle").style.color="#fff";
        document.getElementById("login-form").style.display="none";
        document.getElementById("signup-form").style.display="block";
    }

    function toggleLogin(){
        document.getElementById("login-toggle").style.backgroundColor="#57B846";
        document.getElementById("login-toggle").style.color="#fff";
        document.getElementById("signup-toggle").style.backgroundColor="#fff";
        document.getElementById("signup-toggle").style.color="#222";
        document.getElementById("signup-form").style.display="none";
        document.getElementById("login-form").style.display="block";
    }

    return (
        <div className="form-modal">

            <div className="form-toggle">
                <button id="login-toggle" onClick={toggleLogin}>log in</button>
                <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
            </div>

            <div id="login-form">
                <form>
                    <input type="text" placeholder="Enter email or username"/>
                    <input type="password" placeholder="Enter password"/>
                    <button type="button" className="btn login">login</button>
                    <p><a href="javascript:void(0)">Forgotten account</a></p>
                    <hr/>
                    <button type="button" className="btn -box-sd-effect"> sign in with google</button>
                    <button type="button" className="btn -box-sd-effect">sign in with Facebook</button>
                </form>
            </div>

            <div id="signup-form">
                <form>
                    <input type="email" placeholder="Enter your email"/>
                    <input type="text" placeholder="Choose username"/>
                    <input type="password" placeholder="Create password"/>
                    <button type="button" className="btn signup">create account</button>
                    <p>Clicking <strong>create account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p>
                    <hr/>
                    <button type="button" className="btn -box-sd-effect"> sign in with google</button>
                    <button type="button" className="btn -box-sd-effect">sign in with Facebook</button>
                </form>
            </div>

        </div>

    );
};

export default Login;