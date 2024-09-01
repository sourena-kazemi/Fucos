import HeaderQuote from "../components/HeaderQuote"
function LandingPage() {
  return (
    <header className="flex flex-col mx-auto max-w-2xl relative px-5 lg:max-w-4xl mt-36 lg:mt-48">
      <img
        src="/quotation.svg"
        alt="quotation mark"
        className="absolute -top-1/4 -z-10 left-0 md:-left-24 md:top-0 md:-translate-y-4"
      />
      <HeaderQuote quoteNumber={Math.floor(Math.random() * 4)} />
      <div className="flex flex-col items-center gap-6 text-xl md:flex-row mt-32">
        <button
          className="bg-green text-darkGray rounded-3xl py-3 w-52 hover:scale-105 transition-all hover:bg-lightGreen active:scale-95"
          onClick={() => alert("hoo")} 
        >
          Start Now
        </button>
        <button className="border-2 border-lightGreen rounded-3xl py-3 w-52 hover:scale-105 transition-all hover:border-green hover:text-green active:scale-95">
          What is Fucos
        </button>
      </div>
    </header>
  )
}
export default LandingPage
