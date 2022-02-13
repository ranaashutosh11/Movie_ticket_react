import React from 'react'
import img1 from "../images/shawshank.png"
import img2 from "../images/godfather.png"
import img3 from "../images/godfather2.png"
import img4 from "../images/dark_knight.png"
import img5 from "../images/angry_man.png"
import img6 from "../images/SL.png"
import Dataj from "./info.json"
import Work from "./Work"
import "./style.css"

function Home() {
  return (
    <div className='main'>
    <Work  
    img={img1} 
    name={Dataj["1"]["movie name"]}
    id={Dataj["1"]["id"]}/>
    <Work
    img={img2}
    name={Dataj["2"]["movie name"]}
    id={Dataj["2"]["id"]}/>
    <Work 
    img={img3} 
    name={Dataj["3"]["movie name"]}
    id={Dataj["3"]["id"]}/>
    <Work 
    img={img4} 
    name={Dataj["4"]["movie name"]}
    id={Dataj["4"]["id"]}/>
    <Work 
    img={img5} 
    name={Dataj["5"]["movie name"]}
    id={Dataj["5"]["id"]}/>
    <Work 
    img={img6} 
    name={Dataj["6"]["movie name"]}
    id={Dataj["6"]["id"]}/>
    </div>
  )
}

export default Home