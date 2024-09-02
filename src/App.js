import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'

import './App.css'

export default function App(){
  return(
    <div className="body">
      <div className='menu-bar'>
      <h2> <IoReorderThreeSharp /> </h2>
        <h2> <FaHome />   </h2>
        <h2> <SiYoutubeshorts />   </h2>
        <h2> <IoMusicalNotesOutline />   </h2>
        <h2> <BsBell /> </h2>
        <h2> <BiSolidVideos /> </h2>
        <h2> <MdOutlineWatchLater /> </h2>
        <h2> <AiTwotoneLike /> </h2> 
      </div>
      <div className='main'>
        <div className="header">
        <h1 className="icon"> <ImYoutube /> </h1>
        <h1>Youtube</h1>
        <input type='text' className="Search-item" placeholder="search here..">
        </input>
        <button className="voice">
          <MdKeyboardVoice />
        </button>
        </div>
        <div className="video">
          <div className="video1">
          <img src={pic1} className="pic1"></img>
          <h2 className="title">How to add thumbnail| Tamil tutorial </h2>
          <p>tamil tech channel</p>
          <p>36K views </p>
          </div>
          <div className="video2">
            <img src={pic2} className="pic2"></img>
            <h2 className="title">Thevar magan full movie tamil with sub...</h2>
            <p>Rajkamal production</p>
            <p>1.3M views </p>
          </div>
          <div className="video3">
            <img src={pic3} className="pic3"></img>
            <h2 className="title">Learn how to change figma to react full video ...</h2>
            <p>React tutorial</p>
            <p>12k views </p>
          </div>
          <div className="video4">
            <img src={pic4} className="pic4"></img>
            <h2 className="title">Table tour with potato face and plip plip</h2>
            <p>Plip Plip</p>
            <p>435K views </p>
          </div>
          <div className="video5">
            <img src={pic5} className="pic5"></img>
            <h2 className="title">Let us roast our hoimess and we start with MG na...</h2>
            <p>Web development</p>
            <p>1.2M views </p>
          </div>
          <div className="video6">
            <img src={pic6} className="pic6"></img>
            <h2 className="title">GOAT trailer tamil | telugu | ags entertainment , vijay..</h2>
            <p>T series</p>
            <p>999M views</p>
          </div>
        </div>
      </div>
    </div>
  )
}