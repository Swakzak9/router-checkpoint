import DiscriptPages from "./Components/DiscriptPages.js";
import {Route,Routes} from "react-router-dom"
import Trailer from "./Components/Trailer.js";
import Home from "./Components/Home.js";
import React from 'react'

const App = () => {
  return(
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/discriptpages" element={<DiscriptPages/>}/>
    <Route path="/trailer" element={<Trailer/>}/>

  </Routes>

);}
export default App
