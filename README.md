# Chat React + Vite App

This is a user-friendly React + Vite application that allows users to sign up, log in, and chat with other users in real time. The app interacts with a RESTful API and database to manage user data and connects to a Socket.IO server for live chat functionality.

- [Features](#features)
- [Installation](#installation)
- [Docker](#docker)
- [Socket.IO Repository](#socket)
- [Backend Repository](#backend)

## Features

- User-friendly interface for managing user data.
- Integration with RESTful, Database and Socket.IO server.
- Real-time chat, live updates, and responsive design.

## Installation

1. Clone Repository:<br>
   `git clone https://github.com/duanegero/Chat-API.git`
2. Navigate to the Project Directory
3. Proceed to Docker for next steps.

## Docker

1. **CREATE DOCKER NETWORK!** - Before proceeding with the containers, you need to create a Docker network. This network allows the containers to communicate with each other. Run the following command to create the network:  
   `docker network create Chat-Network`
2. **Verify the Network Creation** - After creating the network, you can verify that it exists by listing the available networks with this command:
   `docker network ls`
3. **Build and Start the Docker Container** - To build the Docker container and start the services defined in the docker-compose.yml file, run the following command:
   `docker-compose up --build`
4. **Verify the Container Creation** - After building and running the container, you can verify that it is up and running with the following command:
   `docker ps`
5. **Shut Down the Docker Containers** - Once you're done with using the containers, you can stop and remove the containers with the following command:
   `docker-compose down`

## Socket

The Socket.IO server can be found can be found here

https://github.com/duanegero/Chat-Socket.git

For more information, please refer to the Socket.IO documentation for details on setting up and connecting to the socket server, as well as available events and usage examples.

## Backend

The Backend RESTful API and Database can be found here

https://github.com/duanegero/Chat-API.git

For more information, please refer to the API Documentation for details on the available endpoints and how to interact with the API.
