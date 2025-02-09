# DeeEvent

DeeEvent is a fully functional **event management platform** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This platform allows users to easily browse, book, and manage events, while admins have the ability to create and manage events, track user activity, and more. With a clean and intuitive interface, DeeEvent aims to make event planning and participation a seamless experience for everyone.

## Features

### User Features:
- **Sign Up / Log In**: Users can register and log into the platform.
- **Browse Events**: View a list of upcoming events with details like date, time, location, and description.
- **Book Events**: Users can book tickets for events and manage their bookings.
- **Edit Profile**: Users can update their profile details (e.g., name, email, password).
- **Event Reminder**: Get reminders for upcoming events.
- **Logout**: Securely log out from the platform.

  
## Tech Stack

- **Frontend**:
  - **React.js**: A popular JavaScript library for building interactive user interfaces.
  - **React Router**: For navigation between pages in the app.
  - **Axios**: For making HTTP requests to the backend API.
  - **CSS / SCSS**: For styling the frontend UI.

- **Backend**:
  - **Node.js**: A JavaScript runtime used to build the backend server.
  - **Express.js**: A fast, unopinionated, minimalist web framework for Node.js to build REST APIs.
  - **MongoDB**: NoSQL database to store event and user information.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB to interact with the database.
  
- **Authentication**:
  - **JWT (JSON Web Tokens)**: Used for user authentication and session management.
  

## Installation

### Prerequisites:
- **Node.js** and **npm** installed on your system.
- **MongoDB** (locally or on MongoDB Atlas) to store data.

### Setup Instructions:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/DeeEvent.git
    cd DeeEvent
    ```

2. **Install dependencies**:
    - Navigate to the `client` directory (Frontend) and install dependencies:
      ```bash
      cd client
      npm install
      ```
    - Navigate to the `server` directory (Backend) and install dependencies:
      ```bash
      cd server
      npm install
      ```

3. **Set up environment variables**:
    - In the `server` directory, create a `.env` file and add the following:
      ```plaintext
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      ```

4. **Run the application**:
    - In the `server` directory, start the backend server:
      ```bash
      npm start
      ```
    - In the `client` directory, start the frontend:
      ```bash
      npm start
      ```

    - Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- **Users** can sign up, log in, browse events, and book tickets.
- **Admins** can log in to manage events, user profiles, and view analytics.

## Project Structure

