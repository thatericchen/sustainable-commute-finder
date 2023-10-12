# CS3300 Project 1 - Sustainable Commute Finder

CS 3300 (Fall 2023) Project 1 - Group 8

## Visit

Deployed @ [CS3300 Project 1](https://cs3300proj1frontend.ue.r.appspot.com/)

## Release Notes

### New Features

#### V6.0 - Transportation Options Dropdown Menu & UI Enhancements

- Introduced a dropdown menu for transportation options and enhanced UI.
- Users can now easily compare carbon footprints for various transport modes.

#### V5.0 - Carbon Footprint Estimation for Different Modes of Transportation

- Added the feature to estimate the carbon footprint associated with different travel modes.
- Users receive suggestions for eco-friendly transportation alternatives.

#### V4.0 - Distance Calculator for Location Markers

- Calculates the distance between the location markers on the map.

#### V3.0 - Location Markers on Map

- Users can now place and adjust location markers on the map.

#### V2.0 - Interactive Map Component

- A responsive, dynamic map with zoom capabilities.
- Implemented with React Leaflet.

#### V1.0 - Login and Signup Pages

- Introduced secure login and signup pages. Prompts user for first name, last name, email, and password.
- Began app UI design.

### Bug Fixes + Known Bugs and Defects

Refer to the [Troubleshooting](#troubleshooting) section for bug fixes and resolution steps.

# Frameworks and Tools Used

| Components |                     Technology                      |
| :--------- | :-------------------------------------------------: |
| Frontend   | Vite 4.0, React 18.2.0, Googlemap_API, leaflet4.2.1 |
| Backend    |             Spring Boot 3.1.4, Java 17              |
| Database   |                     mongodb 7.0                     |
| Build      |                     MAVEN, GCP                      |

# Install Guide

## Prerequisite Installations

- Maven
- Java 17
- GCP
- MongoDB 7.0

## GCP instruction and MongoDB configuration:

Download Google Cloud CLI for your respective OS and run the script to install it.

- GCP credit application
- Make Sure Billing Information is Set Up
- Create a new project

Navigate to Google Cloud Console and Create a Simple Spring Boot Application.

- Navigate to https://start.spring.io/

  - Project: Maven
  - Packaginging: jar
  - Java: 17 (we used 17 instead)/ but based on the instructor's notes, recommend using version 8.
  - Add the Spring Web dependency and click generate

- Package the Maven Build: To test and get development
  server running, we will need maven.
  - If there is a path variable defined for maven run
    - mvn clean install
  - If no path variable, macOS can run
    - ./mvnw clean install
  - Windows can run
    - ./mvnw.cmd clean install
  - These are the packages the maven builds into a JAR file in the target directory which we will use to deploy onto GCP.
- Deploy to GCP
  - Run gcloud -v to make sure the Google Cloud CLI is installed
  - Run gcloud init to initialize google cloud.
  - Make sure to choose the default configuration
  - You will then be prompted to login with your email. (Make sure to use the email that has billing set up with the credits provided)

Database Setup

- MongoDB

  - Set the url to the MongoDB in environment variable, and we set this auto_create_database connect with GCP, and set up the authentication with GCP, then create a admin role, and we get this url:`spring.data.mongodb.uri=mongodb+srv://adminUser:yourSecurePassword@127.0.0.1:27017/accounts`, replacing `<adminUser>`, `<yourSecurePassword>`, and `<127.0.0.1:27017>` with your IP range.

- Once successfully deployed, there will be a URL in the console to take you to where the project is deployed.
- If not, run：
  - gcloud app browse
- Clean up to avoid billing charges: Project settings => shut down project

## Backend - Spring Boot Configuration:

Navigate to the project root directory and execute

```
mvn clean install
gcloud app browse
```

## Frontend - React

Navigate to `./frontend/` directory and execute

```
npm install
npm run dev
```

The app should be available on http://localhost:5173

#### Login page

![image](https://github.gatech.edu/storage/user/54232/files/2fedaa31-ae04-4140-8c49-9175d8b3a9fc)

#### Signup page

![image](https://github.gatech.edu/storage/user/54232/files/ffd5ed24-a95e-4fe5-8284-27fce389b3bd)

#### Choose the vehicles with the starting spot and destination:

![image](https://github.gatech.edu/storage/user/54232/files/a281f833-44cd-4400-a0a4-9d4615ea06d1)

#### Calculate the footprint for specific vehicle

![image](https://github.gatech.edu/storage/user/54232/files/3aff861f-b031-41cb-84ac-c9c72b9ae109)

#### Showing the footprint result:

![image](https://github.gatech.edu/storage/user/54232/files/ba47ba0e-747c-4179-9704-93ce6f81d21e)
![image](https://github.gatech.edu/storage/user/54232/files/ba47ba0e-747c-4179-9704-93ce6f81d21e)

#### Showing information for the user so that they will have a more sustainable commuting option:

![image](https://github.gatech.edu/storage/user/54232/files/e4e3b0dc-6c67-4a42-8836-d8e3cb0f2f7e)
![image](https://github.gatech.edu/storage/user/54232/files/1a95fd7c-046e-44a4-b77e-7bc70603c321)

## Troubleshooting <a name="troubleshooting"></a>

If you encounter issues while running the app, refer to the following common problems and their solutions:

### MongoDB Configuration

- **Issue:** The app is not connecting to the MongoDB instance when running locally.
- **Solution:** Ensure that you have a running MongoDB instance and place the connection link in the environmental variables. Use the format `mongodb+srv://<username>:<password>@<cluster-address>` replacing `<username>`, `<password>`, and `<cluster-address>` with your MongoDB credentials and address.

### Bug Fixes

- **Dropdown Menu Loading Issue:**

  - **Problem:** The dropdown wasn’t displaying all options.
  - **Solution:** Ensure the app is updated to the latest version where the data retrieval and rendering process is enhanced. Clear the browser cache or try a different browser if the issue persists.

- **UI Inconsistencies across Devices:**
  - **Problem:** The user interface isn't rendering consistently on all devices.
  - **Future Solution:** Adaptive UI has not been implemented yet, so this will be a future feature we can implement.

## Future Improvements

### Integration with Real-Time Data <a name="real-time-data"></a>

Incorporate real-time data sources like traffic conditions, weather updates, and public transport schedules to provide users with accurate and dynamic carbon footprint calculations. Users will receive real-time estimates, ensuring that the provided data is current and reflective of the actual environmental impact.

### Custom User Profiles <a name="user-profiles"></a>

Custom user profiles would encourage long-term user engagement and offer personalized insights and recommendations. Users can track their progress, encouraging a continued commitment to reducing their carbon footprint during commutes.

#### Team 8
