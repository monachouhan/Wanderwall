import logo from './logo.svg';
// import './App.css'
import Signup from './screens/SignUp/Signup';
import Onboarding from './screens/Onboarding/Onboarding';
import SaveItinerary from './screens/SaveItineraries/SaveItinerary';
import ForgetPassword from './screens/ForgetPassword/ForgetPassword';
import ForgetPasswordEmail from './screens/ForgetPasswordEmail/ForgetPasswordEmail';
import Login from './screens/Login/Login';
import ResetPassword from './screens/ResetPassword/ResetPassword';
import EditItinerary from './screens/EditItinerary/EditItinerary';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <ResetPassword/> */}
      {/* <Onboarding /> */}
      {/* <Signup/> */}
      {/* <SaveItinerary /> */}
      {/* <ForgetPassword/> */}
      {/* <ForgetPasswordEmail/> */}
      <EditItinerary/>
    </div>
  );
}
export default App;
