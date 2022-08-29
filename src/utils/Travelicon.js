import React from 'react';
// import Line from './Line';
// import car from '../screens/images/car.jpg';

const Travelicon = (props) => {
  const { picture } = props
  return (
    // <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <img src={picture} alt='iconImage' style={{
            height: '20px', padding: '0px',marginRight:"10px",
            width: '20px',float:'left'
          }} />
        </div>
      </div>
    // </div>
  )
}

export default Travelicon;