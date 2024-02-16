# Profile Management System

A Node.js application for managing user profiles, comments, and voting functionalities.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The Profile Management System is a backend application built with Node.js and Express.js that allows users to create and manage profiles. Each profile can have associated comments, and users can vote on those comments. The application uses MongoDB as its database, and for testing purposes, it utilizes mongodb-memory-server to spin up an in-memory MongoDB instance.

## Features

- Store profile data in MongoDB
- Create new profiles
- Add comments to profiles
- Vote on comments
- Retrieve profiles by ID
- Retrieve comments for a profile
- Automated tests to verify functionality

## Technologies Used

- Node.js
- Express.js
- MongoDB
- mongoose
- mongodb-memory-server
- Jest
- supertest

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sajid-619/Boo-backend-engineer-project.git

2. Navigate to the project directory:

    ```bash
    cd Boo-backend-engineer-project

3. Install dependencies:

    ```bash
    npm install

4. Start the server:

    ```bash
    npm start

The server should now be running on http://localhost:3000.

## Usage

Once the server is running, you can interact with the API using HTTP requests. Here are some example requests:

- Create a new profile:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe", "description":"Lorem ipsum"}' http://localhost:3000/profiles

- Adding a comment to a profile:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"comment":"Great profile!"}' http://localhost:3000/profiles/PROFILE_ID/comments

- Voting on a comment:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"vote":1}' http://localhost:3000/profiles/PROFILE_ID/comments/COMMENT_ID/vote

## Testing

To run the automated tests, use the following command:

    ```bash
    npm test

This will execute the test suite using Jest.

