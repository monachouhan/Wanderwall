import React from 'react'
import dot from '../screens/images/dot.jpg';


const DotComponent = () => {
  return (
    <div>
      <img src={dot} style={{
        width: "4px",
        display: "flex",
        height: "4px",
        background:"gray",
       borderRadius:"50px",
        marginTop:'2px',
        marginLeft:'9px',
        marginBottom:'2px',
      }} />
      <img src={dot} style={{
       width: "4px",
       display: "flex",
       height: "4px",
       background:"gray",
      borderRadius:"50px",
       marginTop:'2px',
       marginLeft:'9px',
       marginBottom:'2px',
      }} />
    </div>
  )
}

export default DotComponent