import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/SignUpPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar isUserLoggedIn={false} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
