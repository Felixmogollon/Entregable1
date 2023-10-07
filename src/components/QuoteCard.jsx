import { getRandomElement } from "../utils/random"
import quotes from '../db/quotes.json'
import "./QuoteCard.css"

const QuoteCard = ({quote, setQuote, setCurrentBg, backgrounds}) => {
  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(backgrounds))
  }


  return (
    <section className="quoteCard">
      
      <article className="quoteCard__container">

        <h1 className="quoteCard__title">InfoGalax &#x1F320;</h1>
        <p className="quoteCard__phrase">{quote.phrase}</p>

        <button className="quoteCard__btn" onClick={handleChangeQuote}>
        <i className='bx bxs-bug'></i>&#x1F31F;
        </button>



      </article>

     <footer className="quoteCard__footer">Author: {quote.author}
     <img className="luna" src="/Vector.png" alt="" />
     </footer>
      
     

    </section>
  )
} 
export default QuoteCard