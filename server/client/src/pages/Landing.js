import React from 'react'
import { FaMailBulk } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landing-container">
      <FaMailBulk style={{
        width: 150,
        height: 150,
        color: "orange"
      }}/>
      <h1 className="">Emaily!</h1>
      <h5 className="">Collect feedback from your users...</h5>
    </div>
  )
}

export default Landing
