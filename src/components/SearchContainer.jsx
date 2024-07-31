import { useState, useEffect, useRef } from "react";
import WhereModal from "./WhereModal";
import CalendarModal from "./CalendarModal";
import GuestModal from "./GuestModal";

const SearchContainer = () => {
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [destination, setDestination] = useState("Search destinations");
  const [checkInDate, setCheckInDate] = useState("Add dates");
  const [checkOutDate, setCheckOutDate] = useState("Add dates");
  const [guestCount, setGuestCount] = useState("Add guests");
  const [activeButton, setActiveButton] = useState(null);

  const guestBtnRef = useRef(null);

  const openWhereModal = () => {
    setIsWhereModalOpen(true);
    setIsGuestModalOpen(false);
  };

  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
  };

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
    closeWhereModal();
  };

  const openCalendarModal = (buttonType) => {
    setIsCalendarModalOpen(true);
    setIsGuestModalOpen(false);
    setActiveButton(buttonType);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  const handleDateSelect = (type, date) => {
    if (type === "check-in") {
      setCheckInDate(date);
    } else {
      setCheckOutDate(date);
    }
  };

  const toggleGuestModal = () => {
    setIsGuestModalOpen((prev) => !prev);
    setIsWhereModalOpen(false);
    setIsCalendarModalOpen(false);
  };

  const handleGuestCountUpdate = (count) => {
    setGuestCount(`${count} ${count === 1 ? "guest" : "guests"}`);
  };

  const handleSearch = () => {
    console.log("Search button clicked");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestBtnRef.current && !guestBtnRef.current.contains(event.target)) {
        setIsGuestModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div
        className="search-item"
        id="addguest-btn"
        onClick={toggleGuestModal}
        ref={guestBtnRef}
      >
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
      <GuestModal
        isOpen={isGuestModalOpen}
        onClose={() => setIsGuestModalOpen(false)}
        onGuestCountUpdate={handleGuestCountUpdate}
        buttonRef={guestBtnRef}
      />
    </div>
  );
};

export default SearchContainer;
