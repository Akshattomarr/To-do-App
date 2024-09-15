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
