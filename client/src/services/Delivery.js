import axios from 'axios';
import {
    BACKEND_URL
} from '../constants';
import {returnToken} from './Common'



export const changeDeliveryPersonForDelivery = (body) => {


    return axios.put(`${BACKEND_URL}/api/delivery/change-delivery-person-for-delivery`, body, {
        headers: {
            'content-type': "application/json",
            'x-auth-token': returnToken(),
        }
    })
}

export const changePreferenceTimeForDelivery = (body)=>{
    return axios.put(`${BACKEND_URL}/api/delivery/change-preference-time-for-delivery`,body,{
        headers : {
            'content-type': "application/json",
            'x-auth-token': returnToken(),
        }
    })
}

export const getDeliveryDetailsForDriver = (_id) => {
    return axios.get(`${BACKEND_URL}/api/delivery/get-delivery-details-for-driver`, {
        headers: {
            _id,
            'content-type': "application/json",
            'x-auth-token': returnToken()

        }
    })
}

export const getDeliveryDetails = (_id) => {
    return axios.get(`${BACKEND_URL}/api/delivery/get-delivery-details`, {
        headers: {
            _id,
            'content-type': "application/json",
            'x-auth-token': returnToken()

        }
    })
}


export const endDelivery = (body) => {
    return axios.put(`${BACKEND_URL}/api/delivery/end-delivery`, body, {
        headers: {
            'content-type': "application/json",
            'x-auth-token': returnToken(),
        }
    })
}

export const startDelivery = (body)=>{
    return axios.put(`${BACKEND_URL}/api/delivery/start-delivery`, body, {
        headers: {
            'content-type': "application/json",
            'x-auth-token': returnToken(),
        }
    })
}

export const addDelivery = (body)=>{
    return axios.post(`${BACKEND_URL}/api/delivery/add-delivery`, body, {
        headers: {
            'content-type': "application/json",
            'x-auth-token': returnToken(),
        }
    })
}