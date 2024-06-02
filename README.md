# Real-Time Chat App Using Socket.io
<div style="text-align: center;">
  <img src="https://res.cloudinary.com/dsos2uuov/image/upload/v1708786694/h8zkvzf9nfqzeop2zevt.png" alt="Image Description" style="width:100vw;height:30vw">
</div>

This is a real-time chat application built using Next.js in the frontend and Node.js in the backend. It features a login/register page, a sidebar to select friends to chat with, and a chat interface.

## Features

- **Login/Register Page**: Users can register for a new account or log in to an existing one.
- **Friend Selection**: Users can select friends from the sidebar to start a chat with.
- **Real-Time Messaging**: Messages are delivered instantly using Socket.IO for real-time communication.
- **Secure Authentication**: Authentication is handled using JWT tokens and passwords are securely hashed using bcryptjs.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

## Backend

The backend of this application is built using Node.js and Express.js, with MongoDB as the database. Here are the key libraries used:

- `bcryptjs`: For hashing passwords securely.
- `cookie-parser`: For parsing cookies attached to incoming requests.
- `cors`: For enabling CORS (Cross-Origin Resource Sharing) to allow requests from the frontend.
- `dotenv`: For loading environment variables from a `.env` file.
- `express`: For building the RESTful API endpoints.
- `jsonwebtoken`: For generating and verifying JWT tokens for user authentication.
- `mongoose`: For modeling application data and interacting with the MongoDB database.
- `nodemon`: For automatically restarting the server during development.
- `socket.io`: For real-time bidirectional event-based communication.

## Frontend

The frontend of this application is built using Next.js, React, and Tailwind CSS for styling. Here are the key libraries used:

- `next`: For server-side rendering and routing.
- `react`: For building user interfaces.
- `react-hot-toast`: For displaying toast notifications.
- `react-icons`: For including icons in the user interface.
- `socket.io-client`: For connecting to the Socket.IO server in the backend.
- `zustand`: For state management.
- `tailwindcss`: For utility-first CSS framework.
- `daisyui`: For additional UI components.
- `typescript`: For adding static types to JavaScript.

## Installation

1. Clone the repository:
```
git clone https://github.com/mustafawardeh/Realtime_Chat_App.git
```

2. Install dependencies for both frontend and backend:

```bash
cd frontend
npm install
cd ../backend
npm install
```
3. Set up environment variables:
```
PORT=<your-port>
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret>
```
