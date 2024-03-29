import React,{ useEffect,Suspense} from 'react';
import logo from './logo.svg';
import { useRoutes } from 'react-router';
import './App.css';
import { UserDetails } from './pages/UserDetails/UserDetails';
import { SignIn } from './pages/SignIn/SignIn';
import { Home } from './pages/Home/Home';
import { SignUp } from './pages/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './app/store';

function App() {
  const checkIfSignedIn = ()=>{
    return store.getState().auth.signedIn;
  
  }


  const authRoutes = [
    { path: '/home-page', element:<Home/> },
    { path: '/', element:<Home/> },
    { path: '/user-details', element:<UserDetails/> },


];
  const homeRoutes =[
    { path: '/sign-in', element:<SignIn/> },
    { path: '/', element:<SignIn/> },
    { path: '/sign-up', element:<SignUp/> },
    { path: '/', element:<SignUp/> },

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
