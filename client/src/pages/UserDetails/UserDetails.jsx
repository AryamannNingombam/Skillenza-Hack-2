
import React, { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import './UserDetails.scss'
import {changePreferenceTimeForDelivery, getDeliveryDetails} from '../../services/Delivery';
export const UserDetails = () => {
  const [deliveryId, setDeliveryId] = useState('')
  const [deliveryDetails,setDeliveryDetails] = useState(null);
  const [time,setTime] = useState(null);
  const onDeliveryChange = (e) => {
    setDeliveryId(e.target.value)
  }
  const onButtonClick = (e)=>{
    e.preventDefault();
    getDeliveryDetails(deliveryId)
    .then(response=>response.data)
    .then(data=>{
     return data.delivery;
    })
    .then(delivery=>{
      console.log(delivery)
      setDeliveryDetails(delivery);
    })
    .catch(err=>{
      console.log("ERROR")
      console.log(err);
      alert("Wrong Delivery ID!");
    })
  }

  const onTimePreferenceChange = (e)=>{
    alert("Time Preference added!");
    e.preventDefault();
    console.log(time);
    if (deliveryId.length === 0){
      alert("Delivery id not provided!");
    }
    changePreferenceTimeForDelivery({_id:deliveryId,time:time})
    .then(response=>response.data)
    .then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log("ERROR")
      console.log(err)
    })

  }


  return (
    <>
      

      <div id="driver-details-main-background">
        <form id="login-page-main-area">
          <span id="login-page-heading-area">
            <span className="login-page-main-heading" id="Log">
              User{' '}
            </span>
            <span className="login-page-main-heading" id="In">
              {' '}
              Info
            </span>
          </span>

          
          <input
            onChange={onDeliveryChange}
            placeholder="Delivery_ID"
            id="login-input-userid"
            required
            type="text"
            className="login-page-input"
          />
          
          
   
          

          

            <FormControl type="datetime-local" name="birthdaytime"
            onChange={e=>{
              setTime(e.target.value);
             
            }}
            
            />
            
            <button onClick={onTimePreferenceChange} id="submit-button">Add time preference</button>

            <button onClick={onButtonClick} id="submit-button">Get Order Details</button>

            {deliveryDetails ? <>
            <span className="login-page-detail-heading" id="Log">
              Delivery Id :{' '}
            </span>
            <span className="login-page-info-heading" id="Log">
          {deliveryDetails._id}
          </span>
          <span className="login-page-detail-heading" id="Log">
              Location :{' '}
            </span>
            <span className="login-page-info-heading" id="Log">
          {deliveryDetails.location}
          </span>
          <span className="login-page-detail-heading" id="Log">
              Receiver ID :{' '}
            </span>
            <span className="login-page-info-heading" id="Log">
          {deliveryDetails.receiverId}
          </span>
          <span className="login-page-detail-heading" id="Log">
              Time Preference for Delivery :{' '} 
            </span>
            <span className="login-page-info-heading" id="Log">
            {deliveryDetails.preferredTime}
            </span>


          </> : null}

        </form>
      </div>
    </>
  )
}
