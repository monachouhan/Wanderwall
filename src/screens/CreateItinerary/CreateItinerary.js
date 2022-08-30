import React from 'react'
import pic from "../images/back.png";
import vector from "../images/Vector.png"
import './createitinerary.css';
import { itineraryItemsList } from '../../utils/mocList';
import DotComponent from '../../utils/dotComponent';
import Line from '../../utils/Line';
import Card from '../../utils/Card';

const CreateItinerary = () => {

  return (
    <div className='container' style={{ alignItem: 'center', background: '#f2f2f2' }}>
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
              <div className="container" style={{ flexDirection: 'row', margin: '0px', justifyContent: 'space-between', marginLeft: '50px' }} >
                <div className="row">
                  <div className="col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* {index==0 && <p style={{ color: 'gray', padding: '2px', marginBottom: '10px' }}>Start</p>} */}
                    {index == 0 ? <p style={{ color: 'gray', width: '20px' }}>Start</p> : <Line backgroundColor={'rgb(128 128 128)'} width={'2px'} height={'100%'} />}
                    {curElm.travelType && <DotComponent />}
                    <img className='iconImage' src={curElm.iconImage} />
                    {curElm.travelType && index !== itineraryItemsList.length - 1 && <DotComponent />}
                    {/* <Line backgroundColor={'rgb(128 128 128)'} width={'2px'} height={'100%'} /> */}
                    <Line backgroundColor={index === itineraryItemsList.length - 1 ? '#f2f2f2' : 'rgb(128 128 128)'} width={'2px'} height={'100%'} />
                  </div>
                  <div class="col">
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