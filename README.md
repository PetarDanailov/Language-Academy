# Language-Academy
Language-Academy is a React-based web application for managing and enrolling in language courses. It provides user authentication, course management, and enrollment features using a pre-seeded admin account and a few courses.
## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Backend Details](#backend)
- [Frontend Details](#frontend)
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
1. **Download the Project**
   - Download the zip file of the project or clone the repository.

2. **Open the Project**
   - Open the project in Visual Studio or your desired IDE.

3. **Open Terminal**
   - Open the terminal inside the project.

4. **Verify Project Structure**
   - Navigate into `Language-Academy-main` and type `ls` (or `dir` on Windows) to ensure you see the `server` and `client` folders.

5. **Start the Server**
   - Open a second terminal window.
   - Navigate into the `server` folder.
   - Run the command:
     ```bash
     node .\server.js
     ```

6. **Install Client Dependencies**
   - Return to the first terminal.
   - Navigate into the `client` folder.
   - Run the command:
     ```bash
     npm i
     ```

7. **Start the Client**
   - After installing dependencies, run:
     ```bash
     npm run dev
     ```

8. **Startup Order**
   - Remember to start the server before starting the client.

9. **Final Check**
   - Everything should now be working.


## Admin Credentials
Email: danailovvpetar@gmail.com
Password: 123456

### Features 
- Real-Time Alerts: Instant feedback using SweetAlert2.
- Modular Architecture: Clean and maintainable code structure.
- SPA: Single page application due to React
- Commenting

