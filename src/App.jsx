
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

   const handleClick = () => {
    getQuote();
   }


  return (
    <>
   <h1 className='text-center'>Quote Generator App</h1>
   <div className='container' >
     <Card >
      
        <Card.Body>
          <Card.Title>{quote}</Card.Title>
          <Card.Text>
           {author}
          </Card.Text>
          <Button onClick={handleClick} style={{width:'270px', backgroundColor:'#99004d', marginTop:20, 
  marginLeft:'370px'}} variant="primary">Get quote</Button>
        </Card.Body>
      </Card>
  
   </div>
    </>
  )
}

export default App
