import React, {useState} from 'react';
import './Login.css'
import laptop from './laptop.svg'
import GoogleLogin from "react-google-login";
const Login = () => {
    const toggleForm = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
    };
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const onChangeForLogin = e => setLogin({ ...login, [e.target.name]: e.target.value });
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = signup;

    const onChangeForSignup = e => setSignup({ ...signup, [e.target.name]: e.target.value });

    const getDataFromGoogle=(response)=> {
        console.log(response)
        setSignup({
            name: response.profileObj.name,
            email: response.profileObj.email,
            password: '',
            password2: ''
        })
        setLogin({
            email: response.profileObj.email,
            password: ''
        })

    }
    return (
        <section>
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx"><img src={'https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg'} alt="" width={'10px'} height={'20px'}/></div>
                    <div className="formBx">
                        <form action="">
                            <h2>Sign In</h2>
                            <input type="Email" name="email" placeholder="Email" onChange={onChangeForLogin} value={login.email}/>
                            <input type="password" name="password" placeholder="Password" value={login.password} onChange={onChangeForLogin}/>
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
                                <a href="#" onClick={toggleForm}>Sign Up.</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form action="" onSubmit="return false;">
                            <h2>Create an account</h2>
                            <input type="text" name="name" placeholder="Name" value={name} onChange={onChangeForSignup} v/>
                            <input type="email" name="email" placeholder="Email Address" value={email} onChange={onChangeForSignup}/>
                            <input type="password" name="password" placeholder="Create Password" value={password} onChange={onChangeForSignup}/>
                            <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={onChangeForSignup}/>
                            <input type="submit" name="" value="Sign Up"/>
                            <GoogleLogin
                                clientId="1027946307846-prc53klgk61cijsetp0n0akd5bqj6eqj.apps.googleusercontent.com"
                                buttonText="Signup with Google"
                                onSuccess={getDataFromGoogle}
                                onFailure={()=>{console.log('fail')}}
                                cookiePolicy={'single_host_origin'}
                            />
                            <p className="signup">
                                Already have an account ?
                                <a href="#" onClick={toggleForm}>Sign in.</a>
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