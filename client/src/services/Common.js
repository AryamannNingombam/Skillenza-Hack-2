import { store } from "../app/store";



export const returnToken = ()=>{
    const token = store.getState().auth.token;
    if (!token) {
        throw new Error("Unauthorized!");
    }
    return token;
}