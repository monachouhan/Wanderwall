import logo from './logo.svg';
import './App.css'
import Signup from './screens/Signup/Signup';
import Onboarding from './screens/Onboarding/Onboarding';
import SaveItinerary from './screens/Itinerary/SaveItinerary';
import Success from './screens/Success/Success';
import Login from './screens/Login/Login';
import Save from './screens/Success/Save';
import Remove from './screens/Success/Remove';
import RemoveItem from './screens/Success/RemoveItem';
import DeleteItinerary from './screens/Success/DeleteItinerary';
import Error from './screens/Success/Error';
function App() {
  return (
    <div className="App">
     {/* <Onboarding /> */}
     {/* <Signup/> */}
     {/* <SaveItinerary /> */}
   {/* <Success /> */}
   {/* <Save /> */}
   {/* <Login /> */}
   {/* <Remove /> */}
   {/* <RemoveItem /> */}
   {/* <DeleteItinerary /> */}
  <Error />
    </div>
  );
}

export default App;
