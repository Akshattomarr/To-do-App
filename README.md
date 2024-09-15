# Task Management App

## Overview
This project is a Task Management App that interacts with the Dummy JSON API to fetch, add, edit, and delete tasks (to-dos). The app supports task management with different statuses: To Do, In Progress, and Done. It integrates **Redux** for state management, **React Router** for routing, and has **PWA support** for offline functionality.

### Features:
- **Task Management**: Users can create, edit, delete, and move tasks between different statuses.
- **API Integration**: Uses the Dummy JSON API for tasks. The API response includes fields like `id`, `todo`, `completed`, and `userId`.
- **State Management**: Managed using Redux to ensure a smooth user experience with task management.
- **PWA Support**: The app can be installed as a PWA with offline capabilities.
- **Responsive Design**: Works across various screen sizes, ensuring a great experience on mobile, tablet, and desktop.
- **Lazy Loading**: Improves performance by lazily loading routes and components.

### Project Structure:
- **Frontend**: React.js with Tailwind CSS for styling.
- **Backend**: Interacts with the Dummy JSON API for data.

## Demo


## How to Run the Project Locally

### Prerequisites:
- Ensure that you have **Node.js** and **npm** installed on your system.
- Clone the repository.

```bash
git clone https://github.com/Akshattomarr/To-do-App.git
cd To-do-App
Step 2: Navigate to the Project Directory
Move into the project folder using the following command:

bash
Copy code
cd To-do-App
Step 3: Install Dependencies
After navigating to the project folder, install all necessary project dependencies using the following command:

bash
Copy code
npm install
This will install all the required dependencies listed in package.json.

Step 4: Start the Development Server
Now, start the development server using:

bash
Copy code
npm start
This will run the app in development mode. The app should automatically open in your default browser at:

bash
Copy code
http://localhost:3000
If the app doesn’t open automatically, you can manually visit http://localhost:3000 in your browser.

Step 5: Build the Application (Optional)
If you want to create an optimized production build, you can run:

bash
Copy code
npm run build
The build is created in the build/ directory, optimized for production.

Step 6: Test PWA Features
To test the PWA features like offline capability, you need to serve the production build. You can use the serve package to do so:

bash
Copy code
npx serve -s build
