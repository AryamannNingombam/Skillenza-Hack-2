import axios from 'axios';
import {returnToken} from './Common';
import {BACKEND_URL} from '../constants';


export const getDriverDetails = (_id)=>{
    return axios.get(`${BACKEND_URL}/api/driver/get-driver-details`,{
        headers : {
            'x-auth-token' : returnToken(),
            'content-type' : 'application/json',
            _id
        }
    })
}

export const getDriverStatus = (_id)=>{
    return axios.get(`${BACKEND_URL}/api/driver/get-driver-status`,{
        headers : {
            'x-auth-token' : returnToken(),
            'content-type' : 'application/json',
            _id
        }
    })
}


export const changeDriverFreeStatus = (body)=>{
    return axios.put(`${BACKEND_URL}/api/driver/change-driver-free-status`,body,{
        headers : {
            'content-type' : "application/json",
            'x-auth-token' : returnToken()
        }
    })
}


export const changeDriverOnTheWayStatus = (body)=>{
    return axios.put(`${BACKEND_URL}/api/driver/change-driver-on-the-way-status`,body,{
        headers : {
            'content-type' : "application/json",
            'x-auth-token' : returnToken()
        }
    })
}


 