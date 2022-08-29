import walk from '../screens/images/walk.jpg';
import location from '../screens/images/location.jpg';
import flight from '../screens/images/flight.jpg';
import car from '../screens/images/car.jpg';
import map from '../screens/images/map.jpeg';
import hotel1 from'../screens/images/hotel1.jpeg';
import hotel2 from '../screens/images/hotel2.jpeg';
import hotel3 from '../screens/images/hotel3.jpeg';

export const itineraryItemsList = [
  {
    id: 1,
    name: "Double Tree Inn",
    content: "hotel",
    image: hotel1,
    iconImage: location
  },
  {
    id: 2,
    name: "Car Ride",
    content: "4mi",
    image: map,
    iconImage:car,
    travelType: 'Car'
  },
  {
    id: 3,
    name: "The Oberoi Grand",
    content: "hotel",
    image:hotel2,
    iconImage:location
  },
  {
    id: 4,
    name: "Walk",
    content: "4hr",
    image:map,
    iconImage:car,
    travelType: 'Walk'
  },
  {
    id: 5,
    name: "The Imperial Hotel",
    content: "hotel",
    image:hotel3,
    iconImage:location
  },
  {
    id: 6,
    name: "Flight",
    content: "2hr",
    image: map,
    iconImage: car,
    travelType: 'Flight'
  },
]