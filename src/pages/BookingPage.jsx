import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm"


  

  // function updateTimes(state, action) {
  //   switch (action.type) {
  //     case 'update': {
  //       return {
  //         initializeTimes
  //       }
  //     }
  //   }
  //   throw Error('Unknown action: ' + action.type);
  // }
export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes())
   
    function updateTimes(date) {
    // TODO: update availableTimes based on the selected date
    // For now, we'll just return the same available times regardless of the date.
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(action.payload);
      default:
        return state;
    }
  }
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    )
  }
  

  