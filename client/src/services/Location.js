import axios from 'axios'
import {BACKEND_URL} from '../constants';
import {returnToken} from "./Common";



export const addLocation = (body)=>{
    return axios.post(`${BACKEND_URL}/api/location/add-location`,body,{
        headers : {
            'content-type' : "application/json",
            'x-auth-token' : returnToken(),
        }
    })
}


export const getLocationDetails = (_id)=>{
    return axios.get(`${BACKEND_URL}/api/location/get-location-details`,{
        headers : {
            'content-type' : "application/json",
            'x-auth-token' : returnToken(),
            _id
        }
    })
}

export const getAllLocations=  ()=>{
    return axios.get(`${BACKEND_URL}/api/location/get-all-locations`,{
        headers : {
            'content-type' : 'application/json',
            'x-auth-token' : returnToken()
        }
    })
}


