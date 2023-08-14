import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import TestPage from "./pages/TestPage"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
