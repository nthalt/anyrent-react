import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchHotelDetails = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/hotel/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error;
  }
};

export const fetchRooms = async (hotelSlug) => {
  try {
    const response = await axios.get(`${API_URL}/hotel/${hotelSlug}/rooms`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};