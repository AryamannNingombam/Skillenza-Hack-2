import React from 'react';
import './HomePage.css';
import {store} from '../../app/store';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export const HomePage = () => {
    const AuthData = useSelector(state=>state.auth);
    const history = useHistory();


    if (!AuthData.loggedIn){
        alert("You need to be logged in to access this page!")
        history.push('/');
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
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Driver Details
            <a href="#DriverDetails" className="mr-5 hover:text-white">
            Driver Details
          </a>
          </button>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            User Details
            
          </button>
            
        </div>
        
    )
    
}