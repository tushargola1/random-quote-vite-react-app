import React, { useState } from 'react'

export default function Quotes(props) {

  // const quote = document.querySelector('.card-title')
  // const person = document.querySelector('.card-text')
 const[quotation , setQuotation]  = useState('“We cannot solve problems with the kind of thinking we employed when we came up with them.”')
 const[author , setAuthor] = useState('— Albert Einstein')

  const quotes = [{
    quote : `“Learn as if you will live forever, live like you will   tomorrow.”` ,
    person : `— Mahatma Gandhi`
  },
  {
    quote : `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”` ,
    person : `— Eleanor Roosevelt`
  },
  // {
  //   quote : `“When we strive to become better than we are, everything around  <br />us becomes better too.” ` ,
  //   person : `— Paulo Coelho`
  // },
  {
    quote : `“Setting goals is the first step in turning the invisible into the visible.”` ,
    person : ` — Tony Robbins`
  },
  {
    quote : `"Women challenge the status quo because we are never it.” ` ,
    person : `— Cindy Gallop`
  },
  {
    quote : `"We don’t just sit around and wait for other people. We just make, and we do.” ` ,
    person : `— Arlan Hamilton`
  },
  {
    quote : `“No woman wants to be in submission to a man who isn’t in submission to God!” ` ,
    person : `― T D Jakes`
  },
  {
    quote : `“When a woman becomes her own best friend life is easier.”  ` ,
    person : `— Diane Von Furstenberg`
  },
  {
    quote : `“The successful man will profit from his mistakes and try again in a different way.”` ,
    person : `— Dale Carnegie`
  },
  {
    quote : `“To know how much there is to know is the beginning of learning to live.” ` ,
    person : ` —Dorothy WestWomen`
  },
  {
    quote : `“Either you run the day or the day runs you.” ` ,
    person : ` — Jim Rohn`
  },
  {
    quote : `“A witty woman is a treasure; a witty beauty is a power.”  ` ,
    person : `― George Meredith`
  },
  {
    quote : `“He who conquers himself is the mightiest warrior.”  ` ,
    person : `— Confucius`
  },
  {
    quote : `“Education is the most powerful weapon which you can use to change the world.”` ,
    person : ` — Nelson Mandela`
  }
   
]

const newQuote = () =>{
  const randomQuote = Math.floor(Math.random() * quotes.length)
  // quote.innerText = quotes[randomQuote].quote
  // person.innerText=quotes[randomQuote].person
  setQuotation(quotes[randomQuote].quote)
  setAuthor(quotes[randomQuote].person)
}




  return (
    <>
      <div className="container ">
       


<div className="card text-center ">
  <div className="card-header bg-smoke-white fs-5">
  Motivational Quotes to keep you motivated
  </div>
  <div className="card-body">
  <h5 className="card-title fs-5 fw-semibold ">{quotation}</h5>
   
    <p className="card-text fw-bold text-success"> {author} </p>
    <div className="btn btn-primary " onClick={newQuote}>New Quote</div>
  </div>
  
</div>

       

      </div>
    </>
  )
}
