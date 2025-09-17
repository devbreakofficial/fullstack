import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getMessage = async (req, res) => {
      try {
        const res = await axios.get('/api/message')
        setMessage(res.data.msg)
      } catch (err) {
        console.log(err)
      }
    }
    getMessage()
  }, [])

  return (
    <>
      <h1 className="text-green-500">REACT TUTORIAL</h1>
      <p>{message}</p>
    </>
  )
}

export default App
