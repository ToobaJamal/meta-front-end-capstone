import { useState } from "react"
export default function BookingForm({availableTimes, dispatch}) {
    const [formData, setFormData] = useState({
        date: "",
        time: "17:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })
    
    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleDateChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
      dispatch({ type: 'UPDATE_TIMES', payload: value })
    }
    console.log(formData)
    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    return (
        <form>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " name="time" value={formData.time} onChange={handleFormChange}>
           {options}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleFormChange}>
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
     </form>
    )
  }
  

  