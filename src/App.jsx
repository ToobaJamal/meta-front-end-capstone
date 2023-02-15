import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
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
      {/* <Route path="/booking" element={<BookingPage />}></Route> */}
    </Routes>
     <Footer />
    </>
  )
}

export default App
