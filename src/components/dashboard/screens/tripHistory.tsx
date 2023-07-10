/*eslint-disable*/
import React, { useState } from 'react'
import {StyledHistoryPricing} from "../styles/triphistory.styled"
import { ModalContext } from "../../../context/dashboardContext";
import { useContext } from "react";
import { TripData } from '../tripData';


const TripHistory = ({trips}:any) => {
  return (
      <StyledHistoryPricing>
          <div className="top">
        <h1>Trips History</h1>
        <p>The list of trips that have been booked and their prices</p>
      </div>
      <section>
        <table>
            <thead>
            <tr>
              <th>Pickup</th>
              <th>Destination</th>
              <th>Price</th>
            </tr>
          </thead>
                    <tbody>
            <tr className="tr">
              <td>
                <p>Ikeja</p>
              </td>
              <td>
                <div className="flex">
                  <p>Australia</p>
                </div>
              </td>
                            <td>
                <p>700</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      </StyledHistoryPricing>
  )
}

export default TripHistory