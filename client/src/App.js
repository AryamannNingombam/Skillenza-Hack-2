import React,{ useEffect,Suspense} from 'react';
import logo from './logo.svg';
import { useRoutes } from 'react-router';
import './App.css';
import { DriverDetails } from './pages/DriverDetails/DriverDetails';
import { SignIn } from './pages/SignIn/SignIn';
import { Home } from './pages/Home/Home';
import { SignUp } from './pages/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const checkIfSignedIn = ()=>{
    //return store.getState().auth.signedIn;
    return true;
  }


  const authRoutes = [
    { path: '/home-page', element:<Home/> },
    { path: '/', element:<Home/> },
    { path: '/driver-details', element:<DriverDetails/> },


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
