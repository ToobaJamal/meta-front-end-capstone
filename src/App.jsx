import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import ConfirmedBooking from './pages/ConfirmedBooking'
import './App.css'
import {
  Route,
  Routes
} from "react-router-dom"

function App() {

  return (
    <>
     <Header />
     <Routes> 
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route> 
      <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
    </Routes>
     <Footer />
    </>
  )
}

export default App
