# YouTube Clone

This is a simplified "YouTube Clone" web application built using React components and API pagination. The application allows users to view a list of predefined video thumbnails, click on a thumbnail to play the video, and see basic information about the video such as the title and description.

## Live Demo

You can access the live demo of the YouTube Clone application [here](https://fabulous-travesseiro-b1b705.netlify.app).

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.

## Usage

1. In the project directory, run `npm start` to start the development server.
2. You should see the YouTube Clone homepage with a list of video thumbnails.
3. Click on a thumbnail to play the video.
4. The video player and the video information (title and description) will be displayed.

## Components

The application is built using the following React components:

- `App`: The main component that renders the YouTube Clone homepage and includes the `VideoList` component.
- `VideoList`: Fetches and displays a paginated list of video thumbnails. Handles API integration, pagination, and state management.
- `VideoThumbnail`: Represents a single video thumbnail. Displays the thumbnail image and handles the click event to play the video.
- `VideoPlayer`: Plays the selected video. Displays the video player, video title, and description.

## API Integration

The application uses the provided API for fetching the video data. API pagination is implemented by making successive API calls with incremented page values.

## Dependencies

The project has the following dependencies:

- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods that can be used at the top level of your app.
- `react-player`: A React component for playing videos. It is used for video playback in the `VideoPlayer` component.
