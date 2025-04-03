# BikeNav 🚲

A community-driven navigation app for cyclists, focusing on safe and enjoyable biking experiences. Think Waze, but specifically designed for the biking community!

## Features

- 🗺️ **Smart Navigation**: Bike-friendly routing that favors trails and safe paths
- 🚧 **Real-time Hazard Reporting**: Mark and avoid road hazards (debris, potholes)
- 🔧 **Resource Locations**: Find nearby:
  - Bike repair stations
  - Water stations
  - Bike shops
- 🏞️ **Trail Discovery**: Recommended local trails based on your location
- 👥 **Social Features**: Create and join bike groups for community rides
- 🗺️ **Google Maps Integration**: Utilizing Google Maps API for reliable mapping with bike-specific enhancements

## Prerequisites

- Node.js
- Yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mcneiljv/BikeNav.git
   cd BikeNav
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Add your Google Maps API key to the `.env` file:
   ```
   GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

## Running the App

1. Start the development server:
   ```bash
   yarn start
   ```

2. Run on specific platforms:
   - iOS: Press `i` in the terminal or run `yarn ios`
   - Android: Press `a` in the terminal or run `yarn android`
   - Web: Press `w` in the terminal or run `yarn web`

## Development

This project is built with:
- React Native
- Expo
- TypeScript
- React Native Maps
- Google Maps API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
