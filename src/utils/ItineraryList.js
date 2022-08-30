import React from 'react';
// import pic from '../screens/images/pic.jpg'

const ItineraryList = (props) => {
  const { pic, l1, l2, l3, l4 } = props
  return (
    <div className='container' style={{ width: '100%', backgroundColor: 'white' }} >
      <div className='row' style={{ display: 'flex', flexDirection: 'row' }}>
        <div className='col-sm-2'>
          <img src={pic} style={{ height: '50px', width: '50px', borderRadius: '30px', float: 'left', alignItems: 'center', justifyContent: 'center', display: 'flex' }} />
        </div>
        <div className='col' style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', float: 'left' }} >
          <p style={{ fontSize: '20px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '800', margin: '1px' }}>{l1}</p>
          <p style={{ fontSize: '14px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '300', margin: '1px', color: 'gray' }}>{l2}</p>
        </div>
        <div className='col' style={{ textAlign: 'right', float: 'right', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '20px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', margin: '1px', float: 'right' }}>{l3}</p>
          <p style={{ fontSize: '14px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '300', margin: '1px', float: 'right', marginRight: '0px' }}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
          </p>
        </div>
      </div>

      <div className='row' style={{ marginTop: '30px' }} >
        <p style={{ textAlign: 'left', float: 'left', display: 'flex', width: '400px', color: 'gray' }}>{l4}</p>
      </div>
      <div>
        <button style={{ fontSize: '20px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', color: 'purple', float: 'right', backgroundColor: 'white', border: 'none', outline: "none" }}>Edit</button>
      </div>

    </div>
  )
}

export default ItineraryList