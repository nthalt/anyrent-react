import { useState, useEffect } from "react";
import { fetchHotelDetails, fetchRooms } from "./services/api";

import Header from "./components/Header";
import PropertyTitleContainer from "./components/PropertyTitle";
import ImageGallery from "./components/ImageGallery";
import PropertyDetails from "./components/PropertyDetails";
import AmenitiesList from "./components/Amenities";
import Calendar from "./components/Calendar";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import HostDetailInfo from "./components/HostDetailInfo";
import ThingsToKnow from "./components/ThingsToKnow";
import Footer from "./components/Footer";
import ShimmerLoader from "./components/ShimmerLoader";

import "./App.css";
import "./ShimmerLoader.css";
import "./PropertyDetails.css";
import "./ImageGallery.css";
import "./GenerateCalendar.css";
import "./Reviews.css";
import "./Location.css";
import "./HostDetailInfo.css";
import "./ThingsToKnow.css";
import "./Footer.css";

const property = {
  title: "Entire rental unit in Lima, Peru",
  subtitle: "2 guests · 1 bedroom · 1 bed · 1 bath",
  rating: "⭐",
  ratingLabel: "New",
  host: {
    name: "Fernando",
    status: "Superhost",
    years: 7,
    image: "images/host.jpg",
  },
  features: [
    {
      icon: "images/door.png",
      title: "Self check-in",
      description: "Check yourself in with the smartlock.",
    },
    {
      icon: "images/chat.png",
      title: "Fernando is a Superhost",
      description: "Superhosts are experienced, highly rated Hosts.",
    },
  ],
  description:
    "Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park! It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clinica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La...",
  bedroom: {
    image: "images/bed.jpg",
    type: "Bedroom",
    details: "1 double bed",
  },
  guestsOptions: ["1 guest", "2 guests"],
};

function App() {
  const [hotelData, setHotelData] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelSlug = "mountain-view-cabin";

        setTimeout(async () => {
          const hotelDetails = await fetchHotelDetails(hotelSlug);
          setHotelData(hotelDetails);

          const roomsData = await fetchRooms(hotelSlug);
          setRooms(roomsData);
        }, 1200);

        // const hotelDetails = await fetchHotelDetails(hotelSlug);
        // setHotelData(hotelDetails);

        // const roomsData = await fetchRooms(hotelSlug);
        // setRooms(roomsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!hotelData) {
    return <ShimmerLoader />;
  }

  return (
    <div className="App">
      <Header />
      <PropertyTitleContainer title={hotelData.title} />
      <ImageGallery images={hotelData.images} />
      <PropertyDetails hotelData={hotelData} property={property} />
      <AmenitiesList amenities={hotelData.amenities} />
      <Calendar />
      <Reviews />
      <Location address={hotelData.address} />
      <HostDetailInfo hotelData={hotelData} />
      <ThingsToKnow />
      <Footer />
    </div>
  );
}

export default App;
