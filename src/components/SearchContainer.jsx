import { useState } from "react";
import WhereModal from "./WhereModal";
import CalendarModal from "./CalendarModal";

const SearchContainer = () => {
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [destination, setDestination] = useState("Search destinations");
  const [checkInDate, setCheckInDate] = useState("Add dates");
  const [checkOutDate, setCheckOutDate] = useState("Add dates");
  const [guestCount, setGuestCount] = useState("Add guests");
  const [activeButton, setActiveButton] = useState(null);

  const openWhereModal = () => {
    setIsWhereModalOpen(true);
    console.log("Opening Where Modal");
  };

  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
    console.log("Closing Where Modal");
  };

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
    closeWhereModal();
  };

  const openCalendarModal = (buttonType) => {
    setIsCalendarModalOpen(true);
    setActiveButton(buttonType);
    console.log("Opening Calendar Modal");
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
    console.log("Closing Calendar Modal");
  };

  const handleDateSelect = (type, date) => {
    if (type === "check-in") {
      setCheckInDate(date);
    } else {
      setCheckOutDate(date);
    }
  };

  const openGuestModal = () => {
    setIsGuestModalOpen(true);
    console.log("Opening Guest Modal");
  };

  const closeGuestModal = () => {
    setIsGuestModalOpen(false);
    console.log("Closing Guest Modal");
  };

  const handleGuestCountUpdate = (count) => {
    setGuestCount(count);
    closeGuestModal();
  };

  const handleSearch = () => {
    console.log("Search button clicked");
    // Implement search functionality here in future
  };

  return (
    <div className="search-container">
      <div className="search-item where-btn" onClick={openWhereModal}>
        <span>Where</span>
        <strong>{destination}</strong>
      </div>
      <div
        className="search-item"
        id="check-in-btn"
        onClick={() => openCalendarModal("check-in")}
      >
        <span>Check in</span>
        <strong>{checkInDate}</strong>
      </div>
      <div
        className="search-item"
        id="check-out-btn"
        onClick={() => openCalendarModal("check-out")}
      >
        <span>Check out</span>
        <strong>{checkOutDate}</strong>
      </div>
      <div className="search-item" id="addguest-btn" onClick={openGuestModal}>
        <span>Who</span>
        <strong>{guestCount}</strong>
      </div>
      <button className="search-button-hidden" onClick={handleSearch}>
        Search
      </button>

      <WhereModal
        isOpen={isWhereModalOpen}
        onClose={closeWhereModal}
        onSelect={handleDestinationSelect}
      />
      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={closeCalendarModal}
        onSelect={handleDateSelect}
        activeButton={activeButton}
      />
      {/* Add GuestModal component here in future */}
    </div>
  );
};

export default SearchContainer;
