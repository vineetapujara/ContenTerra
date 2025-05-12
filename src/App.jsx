import { useState } from 'react'
import './App.css'
import RedditFeed from './RedditFeed'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <RedditFeed />
   </main>
  )
}

export default App
