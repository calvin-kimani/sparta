# <p align="center">Sparta</p>

#### Overview

Sparta is a web application framework that provides a foundation for building modern web applications using Node.js. It follows a modular structure, separating backend components for better organization and maintainability.

Features:

- Backend: Built on Node.js and Express for handling server-side logic and API endpoints.
- Database: Supports Mysql, MongoDB for storing and managing application data.
- Environment Configuration: Utilizes dotenv for environment variable management and configuration.
- UI Starter Kit (optional): Include [React JetStream](https://github.com/calvin-kimani/react-jetstream), a Laravel Jetstream inspired basic UI starter kit for React projects, providing user interfaces for authentication such as login and registration.

#### To-do List
- Authentication: Integrate user authentication for secure user authentication and session management.
- Routing: Implement named routes for frontend navigation, inspired by Laravel's routing system.

### Project Structure:

The project structure is organized as follows:
  
- config: Contains configuration files, including database configuration.
- routes: Defines Web API routes and controllers(soon) for handling backend logic.
- middlewares: Includes custom middleware functions for authentication, error handling, etc.
- models: Defines database schemas and models for interacting with the database.

Getting Started:

To start using Sparta, follow these steps:

1. Clone the project repository from GitHub:
```bash
   git clone https://github.com/calvin-kimani/sparta.git project-name
```

2. Navigate to the project directory:
```bash
   cd project-name
```

3. Install project dependencies:
```bash
   npm install
```

4. Set up environment variables:

   - For backend configuration, create a copy of the **.env.example** file and rename it to  **.env** in the root directory and define the necessary environment variables for your configuration.

5. Start the development server:
```bash
   npm start
```

6. Access the application:

   Open your web browser and navigate to http://localhost:5000 to access the application.

## Configuration:

### Environment Variables:

The backend application utilizes environment variables for configuration. You can define these variables in a .env file located in the server directory. Below is an example of the .env.example file:

```bash
PORT=5000

DB_HOST=127.0.0.1
DB_CONNECTION=

MYSQL_PORT=3306
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_DATABASE=

MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DATABASE=
MONGO_URI=
```

#### To configure your backend application, follow these steps:

1. Create a copy of the .env.example file and rename it to .env.
2. Set the values for the environment variables according to your environment and database setup. Here's a brief explanation of each variable:

   - PORT: The port on which the backend server will run.
   - DB_HOST: The host address of your database server.
   - DB_CONNECTION: The type of database connection (e.g., mysql, mongodb). Leave it empty for now and set it to the appropriate database type you're using.
   - MYSQL_PORT: The port number of your MySQL database server.
   - MYSQL_USERNAME: The username for accessing your MySQL database.
   - MYSQL_PASSWORD: The password for accessing your MySQL database.
   - MYSQL_DATABASE: The name of your MySQL database.
   - MONGO_HOST: The host address of your MongoDB server.
   - MONGO_PORT: The port number of your MongoDB server.
   - MONGO_DATABASE: The name of your MongoDB database.
   - MONGO_URI: The URI for connecting to your MongoDB database. You can use this instead of specifying MONGO_HOST, MONGO_PORT, and MONGO_DATABASE separately.

3. Save the .env file with your configurations.

## Contributing:

Contributions to Sparta are welcome! Feel free to submit bug reports, feature requests, or pull requests via GitHub.

## License:

This project is licensed under the MIT License. See the LICENSE file for details.
