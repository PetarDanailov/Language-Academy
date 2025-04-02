# Language-Academy
Language-Academy is a React-based web application for managing and enrolling in language courses. It provides user authentication, course management, and enrollment features using a pre-seeded admin account and a few courses.
## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Backend Details](#backend-details)
- [Frontend Details](#frontend-details)
- [Admin Credentials](#admin-credentials)
- [Features](#features)
---

## Technologies

### Frontend

- **React:** A powerful library for building interactive user interfaces.
- **React Router:** Handles dynamic routing and navigation within the application.
- **React Context:** Manages and shares state across components.
- **Web3Forms:** Manages form submissions seamlessly.
- **SweetAlert2:** Provide beautiful alerts. 

### Backend

- **SoftUni Practice Server:** Provides the backend API with preseeded data.
- **Preseeded Admin User:** A pre-configured admin account for management and testing.

## Setup

### Prerequisites

- Node.js (preferably the LTS version)
- npm (included with Node.js)
- A modern web browser

### Installation
1.Download the zip file of the project or clone the repo
2. Open the project in visual studio or your desired IDE
3. Open terminal inside the project
4. Type go inside Language-Academy-main and after typing ls you should see folder server and client
5. Open second terminal window and go inside the server folder, when you are inside server type 
``` node .\server.js ```
6. Return to the first terminal and go inside the client folder, when you are inside client type
``` npm i ``` 
7. After installing dependencies type in the terminal 
``` npm run dev ```
8. Remember to start the server before the client. 
9. Now everything should be working

## Admin Credentials
Email: danailovvpetar@gmail.com
Password: 123456

### Features 
- Real-Time Alerts: Instant feedback using SweetAlert2.
- Modular Architecture: Clean and maintainable code structure.
- SPA: Single page application due to React
- Commenting

