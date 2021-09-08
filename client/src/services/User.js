import axios from 'axios';
import {
    BACKEND_URL
} from '../constants';
import {returnToken} from './Common';

export const GetCompanyDetails = (_id) => {
     
    return axios.get(`${BACKEND_URL}/api/company/get-company/details`, {
        headers: {
            'content-type': 'application/json',
            'x-auth-token': returnToken(),
            _id
        }
    })
}