
# Process Management

## Summary

This project is a Node.js application that uses SQLite as a database and Sequelize as an ORM. It involves setting up an Express server with defined routes and using `node-cron` for scheduled tasks.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed
- npm installed
- `node-cron` installed

## Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository
git clone <repository-url>

### 2. Install Dependencies
npm install

### 3. Run Migrations:
npx sequelize-cli db:migrate

### 4. Summary:
Install prerequisites: Node.js, npm, node-cron.\n
Clone the repository: git clone <repository-url>.
Install dependencies: npm install.
Configure SQLite:
Create .env file with database configuration.
Create config/database.js for Sequelize configuration.
Define models and associations: Ensure Sequelize models are correctly set up.
Sync the database: Ensure models are synced with the SQLite database.
Set up the Express server: Define routes and start the server.
Start the server: node index.js.
Test the endpoint: Use curl or Postman.





