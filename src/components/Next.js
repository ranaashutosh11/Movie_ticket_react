import React from 'react'
import { useParams } from 'react-router-dom';
import DataJ from './info.json'
import './style.css'
import {AiFillStar } from 'react-icons/ai';
import Counter from './Counter';
import img1 from "../images/shawshank.png"
import img2 from "../images/godfather.png"
import img3 from "../images/godfather2.png"
import img4 from "../images/dark_knight.png"
import img5 from "../images/angry_man.png"
import img6 from "../images/SL.png"
let movie=[img1,img2,img3,img4,img5,img6]

const Next = () => {
    const {id}=useParams();
  return (
      
     <div className='second'> 
     <div className='wrapper1'>
    <>Movie Name:{DataJ[id]["movie name"]}</><br/>
    <div className='rating'>IMDB Rating:{DataJ[id]["IMDB Rating"]}<AiFillStar style={{color: 'gold'}}/></div>
    <>Date:13/02/2022</><br/>
    <>Time:4:00 PM</><br/><br/>
   
    
    <Counter/>
    </div>
    <div className='wrapper2'>
    <img src={movie[(id-1)]}/>
    </div>
    
    </div>

  )
}

export default Next;
