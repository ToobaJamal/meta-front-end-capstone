import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm"
import { fetchAPI, submitAPI } from "../api"
import { useNavigate } from "react-router-dom";
 
  console.log(fetchAPI(new Date("2018-12-31")))
export default function BookingPage() {
    
    const [date, setDate] = useState(new Date())
    // console.log(date.getDate())
    

    function initializeTimes(date) {
      return fetchAPI(date)
  //    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }

    function updateTimes(date) {
    // TODO: update availableTimes based on the selected date
    // For now, we'll just return the same available times regardless of the date.
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  
  }

  console.log(updateTimes)
  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }
  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
  }
  

  