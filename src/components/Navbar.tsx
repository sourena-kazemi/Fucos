type props = {
  isUserLoggedIn: boolean
}
function Navbar({ isUserLoggedIn }: props) {
  return (
    <nav>
      <div>
        <img src="/Fucos.svg" alt="Fucos Icon" />
      </div>
      <div></div>
    </nav>
  )
}
export default Navbar
