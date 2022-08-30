import React from 'react';
import './profile.css';
import InputField from '../../utils/InputField';
import ItineraryList from '../../utils/ItineraryList';
import pic from '../images/pic.jpg';
import picc from '../images/picc.jpg';

const Profile = () => {
  return (
    <div className='container' style={{ justifyContent: 'center', flex: '1', alignItems: 'center', padding: '20px', backgroundColor: 'white',border:'2px solid gray' }}>
      <h1 className='head' >My Profile</h1>
      <div className='oval1'>
        <i className="bi bi-person-fill" style={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: '100px', justifyContent: 'center', paddingTop: '15px' }}></i>
      </div>
      <div className='oval2'>
        <i class="bi bi-camera-fill" style={{ color: 'white', fontSize: '20px', alignItems: 'center', justifyContent: 'center', paddingTop: '10px', display: 'flex' }}></i>
      </div>
     <InputField text={'User Name'} para={'Amanda J'}/>
     <InputField text={'Full Name'} para={'Amanda Jane'}/>
     <InputField text={'Email'} para={'bhumika@gmail.com'}/>
     <InputField text={'Phone'} para={'-'}/>
     <InputField text={'City'} para={'Los Angeles'}/>
     <div style={{paddingTop:'70px',color:'gray',float:'left'}} >
      <p style={{paddingLeft:'5px'}}>My Itinerary Reviews</p>
     </div>
     <hr style={{width:'100%' ,marginTop:'30px',color:'gray'}}/>
     <ItineraryList pic={pic} l1={'New York City'} l2='Posted May 10, 2021' l3={'Very good'} l4={'This is located in a great spot close to shops and bars, very quiet location.'} />
     <hr style={{width:'100%' ,marginTop:'30px',color:'gray'}}/>
     <ItineraryList pic={picc} l1={'East Asia'} l2='Posted March 5, 2021' l3={'Good'} l4={'Good staff, very comfortable bed, very quiet location. Place could do with an update'} />
     <hr style={{width:'100%' ,marginTop:'30px',color:'gray'}}/>
     <button className='button' style={{background:'purple',borderRadius: '23px', height: '50px', color:'white',fontSize:'20px',fontWeight: '400', fontFamily:'Roboto',marginTop: '20px', marginBottom: '20px',width:'320px',marginTop:'20px'}}>Help Center</button><br/>
     <button className='button' style={{background:'purple',borderRadius: '23px', height: '50px', color:'purple',backgroundColor:'white',fontSize:'20px',fontWeight: '400', fontFamily:'Roboto',marginTop: '20px', marginBottom: '20px',width:'320px',marginTop:'20px',border:'none'}}>Privacy Policy</button>
    </div>
  )
}

export default Profile