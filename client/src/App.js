import React,{ useEffect,Suspense} from 'react';
import logo from './logo.svg';
import { useRoutes } from 'react-router';
import './App.css';
import { DriverDetails } from './pages/DriverDetails/DriverDetails';
import { SignIn } from './pages/SignIn/SignIn';
import {store} from './app/store';


function App() {
  const checkIfSignedIn = ()=>{
    return store.getState().auth.signedIn;
  }


  const authRoutes = [
    { path: '/driver-details', element:<DriverDetails/> },
];
  const homeRoutes =[
    { path: '/sign-in', element:<SignIn/> },
  ]

  const authRouting = useRoutes(authRoutes);
  const homeRouting = useRoutes(homeRoutes);

  return (
    <>
    <Suspense>

    {checkIfSignedIn() ? authRouting : homeRouting}
    </Suspense>
  </>
  );
}

export default App;
