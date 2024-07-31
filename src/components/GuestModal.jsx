import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";

const GuestModal = ({ isOpen, onClose, onGuestCountUpdate, buttonRef }) => {
  const [guestCounts, setGuestCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const modalRef = useRef(null);

  const positionModal = useCallback(() => {
    if (modalRef.current && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      modalRef.current.style.top = `${buttonRect.bottom + window.scrollY}px`;
      modalRef.current.style.left = `${buttonRect.left + window.scrollX}px`;
    }
  }, [buttonRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      positionModal();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef, positionModal]);

  const handleIncrement = (type, e) => {
    e.stopPropagation();
    setGuestCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleDecrement = (type, e) => {
    e.stopPropagation();
    if (guestCounts[type] > 0) {
      setGuestCounts((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
      }));
    }
  };

  useEffect(() => {
    const totalGuests = Object.values(guestCounts).reduce((a, b) => a + b, 0);
    onGuestCountUpdate(totalGuests);
  }, [guestCounts, onGuestCountUpdate]);

  if (!isOpen) return null;

  return (
    <div
      className="guest-modal"
      ref={modalRef}
      onClick={(e) => e.stopPropagation()}
    >
      {Object.entries(guestCounts).map(([type, count]) => (
        <div key={type} className="guest-type">
          <div>
            <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
            <p>{getSubtitle(type)}</p>
          </div>
          <div className="counter">
            <button
              className="decrement"
              onClick={(e) => handleDecrement(type, e)}
              disabled={count === 0}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="increment"
              onClick={(e) => handleIncrement(type, e)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const getSubtitle = (type) => {
  switch (type) {
    case "adults":
      return "Ages 13 or above";
    case "children":
      return "Ages 2-12";
    case "infants":
      return "Under 2";
    case "pets":
      return "Bringing a service animal?";
    default:
      return "";
  }
};

GuestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onGuestCountUpdate: PropTypes.func.isRequired,
  buttonRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default GuestModal;
