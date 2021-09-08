import axios from 'axios';
import {BACKEND_URL} from '../constants';


export const SignInRequest = (body)=>{
    return axios.post(`${BACKEND_URL}/api/auth/sign-in-company`,body);
}

export const SignUpRequest = (body)=>{
    return axios.post(`${BACKEND_URL}/api/auth/sign-up-company`)
}

