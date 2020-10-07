import React, {useState} from 'react';
import './Login.css'
import laptop from './laptop.svg'
import GoogleLogin from "react-google-login";
const Login = () => {
    const toggleSignup=()=>{
        document.getElementById("login-toggle").style.backgroundColor="#fff";
        document.getElementById("login-toggle").style.color="#222";
        document.getElementById("signup-toggle").style.backgroundColor="#57b846";
        document.getElementById("signup-toggle").style.color="#fff";
        document.getElementById("login-form").style.display="none";
        document.getElementById("signup-form").style.display="block";
    }

    const toggleLogin=()=>{
        document.getElementById("login-toggle").style.backgroundColor="#57B846";
        document.getElementById("login-toggle").style.color="#fff";
        document.getElementById("signup-toggle").style.backgroundColor="#fff";
        document.getElementById("signup-toggle").style.color="#222";
        document.getElementById("signup-form").style.display="none";
        document.getElementById("login-form").style.display="block";
    }
    const [login, setSignUp] = useState({
        email: '',
        password: ''
    });
    const onChangeForLogin = e => setUser({ ...user, [e.target.name]: e.target.value });
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChangeForSignup = e => setUser({ ...user, [e.target.name]: e.target.value });

    const getDataFromGoogle=(response)=>{
        console.log(response)
        // setUser({
        //     name: '',
        //     email: '',
        //     password: '',})
    }
    return (
        <section>
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx"><img src={'https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg'} alt="" width={'10px'} height={'20px'}/></div>
                    <div className="formBx">
                        <form action="" onSubmit="return false;">
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="password" name="" placeholder="Password"/>
                            <input type="submit" name="" value="Login"/>
                            <GoogleLogin
                                clientId="1027946307846-prc53klgk61cijsetp0n0akd5bqj6eqj.apps.googleusercontent.com"
                                buttonText="Signup with Google"
                                onSuccess={getDataFromGoogle}
                                onFailure={()=>{console.log('fail')}}
                                cookiePolicy={'single_host_origin'}
                            />
                            <p className="signup">
                                Don't have an account ?
                                <a href="#" onClick="toggleForm();">Sign Up.</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form action="" onSubmit="return false;">
                            <h2>Create an account</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="email" name="" placeholder="Email Address"/>
                            <input type="password" name="" placeholder="Create Password"/>
                            <input type="password" name="" placeholder="Confirm Password"/>
                            <input type="submit" name="" value="Sign Up"/>
                            <p className="signup">
                                Already have an account ?
                                <a href="#" onClick="toggleForm();">Sign in.</a>
                            </p>
                        </form>
                    </div>
                    <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt=""/></div>
                </div>
            </div>
        </section>
    )



};


export default Login;