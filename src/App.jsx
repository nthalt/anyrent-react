// import { useState } from 'react'
import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import './App.css'
import './GenerateCalendar.css';
import './Reviews.css';

import PropertyTitleContainer from './components/PropertyTitle';
import ImageGallery from './components/ImageGallery';
import PropertyDetails from './components/PropertyDetails'
import AmenitiesList from './components/Amenities';
// import GenerateCalendar from './components/GenerateCalendar';
import Calendar from './components/Calendar';
import Reviews from './components/Reviews';

const property = {
  title: "Entire rental unit in Lima, Peru",
  subtitle: "2 guests · 1 bedroom · 1 bed · 1 bath",
  rating: "⭐",
  ratingLabel: "New",
  host: {
    name: "Fernando",
    status: "Superhost",
    years: 7,
    image: "images/host.jpg"
  },
  features: [
    {
      icon: "images/door.png",
      title: "Self check-in",
      description: "Check yourself in with the smartlock."
    },
    {
      icon: "images/chat.png",
      title: "Fernando is a Superhost",
      description: "Superhosts are experienced, highly rated Hosts."
    }
  ],
  description: "Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park! It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clinica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La...",
  bedroom: {
    image: "images/bed.jpg",
    type: "Bedroom",
    details: "1 double bed"
  },
  guestsOptions: ["1 guest", "2 guests"]
};

function App() {
  return (
    <div className="App">
      <Header />
      <PropertyTitleContainer />
      <ImageGallery />
      <PropertyDetails property={property} />
      <AmenitiesList />
      {/* <GenerateCalendar /> */}
      <Calendar />
      <Reviews />
    </div>
  );
}

export default App