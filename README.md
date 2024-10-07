# Refugee Shelter Application Frontend

This repository contains the frontend for the Refugee Shelter application, a volunteer-driven project designed to streamline the management of room and bed assignments in a refugee shelter for Ukrainian refugees.

## Overview

The web application enables real-time updates of bed occupancy and room assignments, allowing multiple volunteers to simultaneously register people and see which beds are occupied the moment they are selected for a family or individual. It provides a visual overview of the shelter layout and occupancy, displays the current number of people in the shelter, and keeps track of the total number of individuals served since the shelter's opening. 

When I joined the volunteer team, they assigned room numbers and beds to refugees on a piece of paper, and every time before the big evacuation buses we wrote a list with the number of free seats in each room, and when someone arrived without warning, we had to run to find a free seat. So I saw an opportunity to improve the process by creating a check-in app.

This system helps volunteers to easily manage space allocation, as well as plan meals by providing an accurate count of people staying at the shelter at any given time.

## Technologies

- **React**: For building the user interface.
- **HTML & CSS**: For the structure and styling of the application.
- **Jotai (useAtom)**: For managing application state.
- **Socket.IO**: For real-time communication between multiple devices.
- **HTTP requests**: To interact with the backend API.
- **Deployment**: The frontend is deployed on Vercel.

## Backend

The backend of this project is a Node.js application deployed on Render, with a MongoDB database for data storage. The backend provides both HTTP and WebSocket APIs for communication with this frontend. You can find the backend repository [here](https://github.com/jackavryashnik/hope-shelter-backend).

## Running the Project Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/jackavryashnik/hope-shelter-room-check.git

2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm start

4. The app will be available at http://localhost:3000.

## Deployment

The frontend is deployed on Vercel. You can access the live version [here](hope-shelter-room-check.vercel.app).
