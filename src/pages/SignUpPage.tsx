function SignUpPage() {
  return (
    <div
      id="verticalCentered"
      className="flex flex-col justify-center text-center"
    >
      <div className="flex flex-col items-center">
        <img src="/Fucos.svg" alt="Fucos Logo" className="w-20" />
        <h1 className="text-green text-3xl mt-2">Fucos</h1>
        <p className="mt-4 text-2xl">
          Smart people <span className="text-green">Fucos</span> on the right
          things.{" "}
        </p>
        <p className="font-normal">-Jensen Huang</p>
      </div>
      <form className="mt-12 flex flex-col items-center px-5">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="bg-darkGray border-lightGreen border-2 rounded-2xl px-3 py-1 outline-none w-full max-w-2xl focus:border-green"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          className="bg-darkGray border-lightGreen border-2 rounded-2xl px-3 py-1 outline-none w-full max-w-2xl focus:border-green"
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          className="bg-darkGray border-lightGreen border-2 rounded-2xl px-3 py-1 outline-none w-full max-w-2xl focus:border-green"
        />
        <button type="submit">Create Account</button>
        <a href="#">A Fucos User?</a>
      </form>
    </div>
  )
}
export default SignUpPage
