# AnyRent React Frontend

## Description

AnyRent is a full-stack application that displays hotel details, allowing users to browse and book various types of accommodations. This repository contains the React frontend for the AnyRent platform.

The frontend provides a user-friendly interface for guests to view detailed information about properties, including descriptions, images, amenities, host information, and booking capabilities. It's designed to work in conjunction with a backend API that serves data from a PostgreSQL database.

## Features

- Responsive design for desktop and mobile devices
- Detailed property information display
- Image gallery
- Amenities list
- Booking calendar
- Guest reviews
- Location information with map
- Host details
- Additional property information

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/anyrent-frontend.git
   ```

2. Navigate to the project directory:

   ```
   cd anyrent-frontend
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variable:
   ```
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```
   Replace the URL with your actual backend API URL.

## Usage

To run the development server:

```
npm start
```

This will start the application on `http://localhost:3000`.

To build the project for production:

```
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── PropertyTitle.jsx
│   ├── ImageGallery.jsx
│   ├── PropertyDetails.jsx
│   ├── Amenities.jsx
│   ├── Calendar.jsx
│   ├── Reviews.jsx
│   ├── Location.jsx
│   ├── HostDetailInfo.jsx
│   ├── ThingsToKnow.jsx
│   └── Footer.jsx
├── services/
│   └── api.js
├── App.jsx
├── App.css
├── PropertyDetails.css
├── ImageGallery.css
├── GenerateCalendar.css
├── Reviews.css
├── Location.css
├── HostDetailInfo.css
├── ThingsToKnow.css
└── Footer.css
```

## Components

- `Header`: Contains the navigation and search functionality
- `PropertyTitle`: Displays the main title of the property
- `ImageGallery`: Showcases property images
- `PropertyDetails`: Presents detailed information about the property
- `Amenities`: Lists available amenities
- `Calendar`: Allows users to check availability and make bookings
- `Reviews`: Displays guest reviews
- `Location`: Shows the property location and nearby attractions
- `HostDetailInfo`: Provides information about the property host
- `ThingsToKnow`: Displays additional important information
- `Footer`: Contains site-wide links and information

## API Integration

The frontend interacts with the backend API through the `services/api.js` file. It includes functions to fetch hotel details and room information:

- `fetchHotelDetails(hotelSlug)`: Retrieves detailed information about a specific hotel
- `fetchRooms(hotelSlug)`: Fetches the list of rooms for a given hotel

## Styling

The application uses CSS for styling, with separate CSS files for different components to maintain a modular structure.

## Dependencies

- React
- React DOM
- React Scripts
- Other dependencies as listed in `package.json`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
