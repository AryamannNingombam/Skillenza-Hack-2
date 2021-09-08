import React, { useState } from 'react'
import { Dropdown, FormControl } from 'react-bootstrap'
import './DriverDetails.scss'

export const DriverDetails = () => {
  const [username, setUsername] = useState('')
  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <>
      <h1>Add Details</h1>

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
            onChange={onUsernameChange}
            placeholder="Delivery_ID"
            id="login-input-userid"
            required
            type="text"
            className="login-page-input"
          />

          

            <FormControl type="datetime-local" name="birthdaytime" />
            <button onClick={onButtonClick} id="submit-button">Submit</button>

        </form>
      </div>
    </>
  )
}
