import axios from 'axios';
import {BACKEND_URL} from '../constants';
import {store} from '../app/store';

export const GetCompanyDetails = (_id)=>{
    const token = store.getState().auth.token;
    if (!token){
        throw new Error("Unauthorized!");
    }
    return axios.get(`${BACKEND_URL}`)
}