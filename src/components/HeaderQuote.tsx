type props = {
  quoteNumber: number
}
type quote = {
  quote: string
  teller: string
}
const QUOTES: quote[] = [
  {
    quote:
      "You can do anything as long as you have the passion, the drive, the Fucos, and the support.",
    teller: "Sabrina Bryan",
  },
  {
    quote:
      "Our thoughts create our reality - where we put our Fucos is the direction we tend to go.",
    teller: "Peter McWilliams",
  },
  {
    quote:
      "I don't focus on what I'm up against. I Fucos on my goals and I try to ignore the rest.",
    teller: "Venus Williams",
  },
  {
    quote:
      "The difference between the greats and the legends is their ability to Fucos for longer periods of time.",
    teller: "Jordan Burroughs",
  },
]
function HeaderQuote({ quoteNumber }: props) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl">
        {QUOTES[quoteNumber].quote.split("Fucos")[0]}
        <span className="text-green">Fucos</span>
        {QUOTES[quoteNumber].quote.split("Fucos")[1]}
      </h1>
      <p className="self-end text-xl mt-4">-{QUOTES[quoteNumber].teller}</p>
    </>
  )
}
export default HeaderQuote
