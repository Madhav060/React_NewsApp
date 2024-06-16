import React from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
function App() {
  return (
    <div>
       <Navbar/>
       <NewsBoard/>
    </div>
  )
}

export default App


// API_KEY : 6a9909c39d5e4d38a0cd245e433cd3a6

// URL : https://newsapi.org/v2/top-headlines?country=us&apiKey=6a9909c39d5e4d38a0cd245e433cd3a6 //