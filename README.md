***README file***

# React and Node.js Application with PostgreSQL Database
This project is a full-stack web application built using React for the front end, Node.js for the back end, and PostgreSQL for the database. It includes functionality to create dummy data in the database, display the data in a table format with search and pagination features, and sort the data by date or time.

## Features
1. **Create Dummy Data**: The application creates 50 records in the PostgreSQL database with fields including "sno, customer name, age, phone, location, created_at" with dummy data.
2. **Display Data in Table Format**: The application presents the data in a single-page application (SPA) using React, displayed in a table format.
3. **Pagination**: The data is paginated with 20 records per page, allowing users to navigate through multiple pages.
4. **Search Functionality**: Users can search for records by the "name" or "location" columns using the search option.
5. **Separate Date and Time Display**: The "created_at" column data is displayed in two separate columns as "date" and "time".
6. **Sorting**: Users can sort the data either by "date" or by "time".

## Project Structure
The project structure is as follows:

- **client**: Contains the React front-end code.
- **server**: Contains the Node.js back-end code.
- **database**: Contains the PostgreSQL database schema and scripts to populate dummy data.

## Setup
1. **Clone the Repository**: Clone this GitHub repository to your local machine.
2. **Database Setup**: Set up a PostgreSQL database and run the scripts in the `database` folder to create the schema and populate dummy data.
3. **Server Setup**: Navigate to the `server` folder, install dependencies using `npm install`, and start the server using `npm run server`.
4. **Client Setup**: Navigate to the `client` folder, install dependencies using `npm install`, and start the client using `npm start`.
5. **Access the Application**: Open your web browser and navigate to the URL where the client is running to access the application.

The setup instructions for both the server and client:

### Client Setup
1. **Clone the Repository**: Clone this GitHub repository to your local machine.
2. **Database Setup**: Set up a PostgreSQL database and run the scripts in the `database` folder to create the schema and populate dummy data.
3. **Client Setup**:
   - Navigate to the `client` folder in your terminal.
   - Install dependencies using `npm install`.
   - Start the client using `npm start`.
     
### Server Setup
1. **Clone the Repository**: Clone this GitHub repository to your local machine.
2. **Database Setup**: Set up a PostgreSQL database and run the scripts in the `database` folder to create the schema and populate dummy data.
3. **Server Setup**:
   - Navigate to the `server` folder in your terminal.
   - Install dependencies using `npm install`.
   - Start the server using `npm run server`.


### Accessing the Application
After starting both the server and client:
1. Open your web browser and navigate to the URL where the client is running to access the application.
2. Ensure that the server is running and properly connected to the database. You may need to adjust the server configuration to connect to your PostgreSQL database.
By following these steps, you should be able to set up both the server and client components of the application and access it in your web browser. Let me know if you need further assistance!


## Links
- [GitHub Repository](https://github.com/SREENIVAS-Gali/zithara-project) - Link to the GitHub repository containing the code for this project.
- [YouTube Explanatory Video](https://youtu.be/C-tiwVRjieI?si=aAClkHdChJ3Xayxo) - Link to the YouTube video providing an overview and demonstration of the project.

## Author
[G SREENIVAS]
