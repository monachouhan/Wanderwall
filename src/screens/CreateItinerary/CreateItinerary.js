import React from 'react'
import pic from "../images/back.png";
import vector from "../images/Vector.png"
import './createitinerary.css';
import { itineraryItemsList } from '../../utils/mocList';
import DotComponent from '../../utils/dotComponent';
import Line from '../../utils/Line';
import Card from '../../utils/Card';
// import Travelicon from '../../utils/Travelicon';

const CreateItinerary = () => {

  return (
    <div className='container' style={{alignItem:'center'}}>
      <img src={pic} className='image' alt='background ' />
      <p className='line1'>Change Cover Photo<i className="bi bi-pencil" style={{ color: 'white' }}></i><img src={vector} className='vector' alt='vector' /></p>
      <p className='line2'>Mediterranean<br />Delight<i className="bi bi-pencil" style={{ color: 'black' }}></i></p>
      <p className='line3'>3 days</p><br />
      <p className='line4'>New York City, New York</p>
      <p className='line5'>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star"></i></p>
      <hr className='hr' />
      <p className='line6'>Summary<i className="bi bi-pencil" style={{ color: 'gray' }}></i></p>
      <p className='line7'><i className="bi bi-globe2"></i>public</p>
      <p className='line8'>Featuring Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod <br />tempor in…</p><br /><br />
      <div>
        {itineraryItemsList.map((curElm, index) => {

          return (
            <div key={index}>
              <div className="container" style={{ flexDirection: 'row',margin:'0px', justifyContent:'space-between',backgroundColor:'red'}} >
                <div className="row">
                  <div className="col" style={{ display:'flex',flexDirection:'column',backgroundColor:'yellow' }}>
                    {/* {index==0 && <p style={{ color: 'gray', padding: '2px', marginBottom: '10px' }}>Start</p>} */}
                    <Line />
                    {curElm.travelType && <DotComponent />}
                    <img className='iconImage' src={curElm.iconImage} />
                    {curElm.travelType && <DotComponent />}
                    <Line />
                  </div>
                  <div class="col" style={{backgroundColor:'pink'}}>
                    <Card image={curElm.image} textA={curElm.name} textB={curElm.content} />
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
      <button className='bbtn'>Create a new item</button><br /><br />
      <button className='bbtn'>Show Map</button><br /><br />
      <button className='bbtn'>Delete Itinerary</button>
    </div>
  )
}

export default CreateItinerary