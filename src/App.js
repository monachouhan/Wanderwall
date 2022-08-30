import logo from './logo.svg';
import './App.css'
import Signup from './screens/SignUp/Signup';
import Onboarding from './screens/Onboarding/Onboarding';
import SaveItinerary from './screens/SaveItineraries/SaveItinerary';
import ForgetPassword from './screens/ForgetPassword/ForgetPassword';
import ForgetPasswordEmail from './screens/ForgetPasswordEmail/ForgetPasswordEmail';
import Login from './screens/Login/Login';
import ResetPassword from './screens/ResetPassword/ResetPassword';
import CreateItinerary from './screens/CreateItinerary/CreateItinerary';
import DotComponent from './utils/dotComponent';
import Line from './utils/Line';
import Card from './utils/Card';
import Travelicon from './utils/Travelicon';
import Profile from './screens/Profile/Profile';
import InputField from './utils/InputField';
import ItineraryList from './utils/ItineraryList';


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
      {/* <CreateItinerary/> */}
      {/* <DotComponent/> */}
      {/* <Line/> */}
      {/* <Card/> */}
      {/* <Travelicon/> */}
      <Profile/>
      {/* <InputField/> */}
      {/* <ItineraryList/> */}
    </div>
  );
}
export default App;
