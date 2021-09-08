import React,{useState} from 'react';
import './SignIn.scss';
import { useNavigate } from 'react-router';
import {store} from '../../app/store';
import {SignInThunk} from '../../features/auth/Auth';
import { Link } from 'react-router-dom';


export const SignIn = () => {
    const [username,setUsername]  = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const onButtonClick = async(e)=>{
        e.preventDefault();
        const result = await store.dispatch(SignInThunk({email:email,password:password}));
        console.log(result);
        if (result.payload.success){
            
            navigate('/home');
        }else{
            alert("Wrong Credentials!")
        }

    };

    const onEmailChange = (e)=>{
           

            
                setEmail(e.target.value);
            

    };

    const onPasswordChange = (e)=>{
 
                setPassword(e.target.value);
 
    }
    const onUsernameChange = (e)=>{
        setUsername(e.target.value);
    }


    return (
        <div id="login-page-main-background">
                <form id="login-page-main-area">
                        <span id='login-page-heading-area'>
                        <span className="login-page-main-heading" id="LOG">Log </span>
                         <span className="login-page-main-heading" id="IN"> In</span>
                       
                        </span>
                        <input onChange={onUsernameChange} placeholder="john_cena" id='login-input-usernmae' required type="text" className="login-page-input"/>

                    <input onChange={onEmailChange} placeholder="john@mail.com" id='login-input-email' required type="email" className="login-page-input"/>
                    <input required type="password" onChange={onPasswordChange} placeholder="**********" id='login-input-password'  className="login-page-input"/>

                    <button onClick={onButtonClick} id="submit-button">Submit</button>
                    <Link style={{color:"white"}} to="/sign-up">Don't have an account? Sign Up!</Link>
                </form>
        </div>
    )
}
