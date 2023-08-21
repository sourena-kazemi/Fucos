import { useState } from "react"
type props = {
  isUserLoggedIn: boolean
}
function Navbar({ isUserLoggedIn }: props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
  return (
    <nav className="mt-5 flex justify-between mx-5 items-center md:mt-10 md:mx-10">
      <div className="flex items-center gap-2 z-10">
        <img src="/Fucos.svg" alt="Fucos Icon" className="w-8" />
        <p className="text-green text-2xl md:text-3xl">Fucos</p>
      </div>
      <div
        className="flex flex-col gap-y-2 group z-10 md:hidden"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <div className="rounded w-11 h-1 bg-lightGreen group-hover:w-14 transition-all"></div>
        <div className="rounded w-14 h-1 bg-lightGreen transition-all"></div>
        <div className="rounded w-11 h-1 bg-lightGreen self-end group-hover:w-14 transition-all"></div>
      </div>
      <div
        className={`fixed bg-darkGray w-full h-full top-0 transition-all flex flex-col items-center justify-center gap-y-10 text-2xl md:hidden ${
          isSideBarOpen ? "left-0" : "left-full"
        }`}
      >
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
        <a href="#" className={`${isUserLoggedIn ? "" : "hidden"}`}>
          Log Out
        </a>
        <a href="#">
          <img
            src="/github.svg"
            alt="github logo"
            className="w-10 hover:scale-105 transition-all"
          />
        </a>
      </div>
      <div className="gap-x-10 items-center hidden text-xl md:flex">
        <a href="#" className="hover:text-green transition-colors">
          Log In
        </a>
        <a href="#" className="hover:text-green transition-colors">
          Sign Up
        </a>
        <a
          href="#"
          className={`hover:text-green transition-colors ${
            isUserLoggedIn ? "" : "hidden"
          }`}
        >
          Log Out
        </a>
        <a href="#">
          <img
            src="/github.svg"
            alt="github logo"
            className="w-10 hover:scale-105 transition-all"
          />
        </a>
      </div>
    </nav>
  )
}
export default Navbar
