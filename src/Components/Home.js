import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <img src='/Images/pvd.jpeg' alt="pvd" width={"500px"} ></img>
      <button><Link to='/trailer'>View moviecard 1</Link> </button>
      <button> <Link to='/discriptpages'>View moviecard 2</Link></button>
    </div>
  )
}


export default Home
