import React from 'react'
import bgimg from '../assets/shoppingbg.png'
const home = () => {
  return (
    <div style={{ backgroundImage: `url(${bgimg})`, width:"100%", height:"100vh",backgroundRepeat:"no-repeat",margin:"0",padding:"0",objectFit:"cover"}}>
    </div>
  )
}

export default home