# URL Shortener using MongoDB

## Overview

This project is a URL shortener service built with Node.js and MongoDB. It allows users to shorten long URLs, manage them, and redirect to the original URLs.

## Project Structure
- **connect.js**: This file handles the connection to the MongoDB database.
- **index.js**: The main entry point of the application. It sets up the Express server and middleware.

## Folders

### 1. controllers

This directory contains the controller files that handle the business logic for different routes.

- **urlController.js**: Contains the logic for creating short URLs, redirecting to original URLs, and other URL-related operations.

### 2. middleware

This directory contains middleware functions used in the application.

- **auth.js**: Middleware for handling authentication and authorization.

### 3. models

This directory contains the models used to store the data in MongoDB using mongoose library

- **Url.js**: Mongoose model for URL documents, defining the schema for storing original and shortened URLs.

### 4. routes

This directory contains the route definitions for the application.

- **urlRoutes.js**: Defines the API endpoints related to URL shortening and redirection.

### 5. service

This directory contains service files

- **urlService.js**: Provides functions for creating short URLs, finding original URLs, and interacting with the database.

### 6. views

This directory contains the view templates for rendering HTML responses.

- **index.ejs**: The main HTML template for the home page.
- **error.ejs**: Template for displaying error messages.

### Configuration Files

- **package.json**: Lists the project's dependencies and scripts for running, building, and testing the application.
- **package-lock.json**: Automatically generated file that records the exact versions of the dependencies installed.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/URL-shortener-using-Mongodb.git
   cd URL-shortener-using-Mongodb

   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

Contributions are welcome! Please fork this repository and submit pull requests for any enhancements or bug fixes.
