import React from 'react';
import './Home.scss';
import {store} from '../../app/store';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
export const Home = () => {
    const AuthData = useSelector(state=>state.auth);
    const navigate = useNavigate();


    if (!AuthData.loggedIn){
        alert("You need to be logged in to access this page!")
    }

    return ( 
        <div id='homepage-main-div'>
            <div id="homepage-main-content">
                <h1>Hello</h1>
                <h5>Your JWT Token </h5>
                <p id="token-paragraph">
                {AuthData.token}
                </p>
            </div>
            
            <button
            type="submit"
            onClick={e=>{
                navigate('/driver-details');
            }}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Driver Details
           
          </button>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            User Details
            
          </button>
            
        </div>
        
    )
    
}