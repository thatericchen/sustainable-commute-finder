# CS3300-Project-1

CS 3300 (Fall 2023) Project 1 - Group 8

# Visit
Deployed @ https://cs3300proj1frontend.ue.r.appspot.com/

# Release Notes
### New Features

### Bug Fixes + Known Bugs and Defects


# Frameworks and Tools Used

| Components  |                     Technology                      | 
   | :---        |:---------------------------------------------------:|   
| Frontend  | Vite 4.0, React 18.2.0, Googlemap_API, leaflet4.2.1 | 
| Backend   |             Spring Boot 3.1.4, Java 17              |
| Database |                     mongodb 7.0                     |
| Build|                     MAVEN, GCP                      |


# Install Guide
## Prerequisite Installations
- Maven
- Java 17
- GCP
- MongoDB 7.0

## GCP instruction and MongoDB configuration:
Download Google Cloud CLI for your respective OS and run the script to install it
• GCP credit application
• Make Sure Billing Information is Set Up
• create a new project:
- Navigate to Google Cloud Console and Create a Simple Spring Boot Application

- Naviage to https://start.spring.io/
  § Project: Maven
  § Packaginging: jar
  § Java: 17 (we used 17 instead)/ but based on the instructor's notes, recommend using version 8.
  § Add the Spring Web dependency and click generate

- Package the Maven Build: To test and get development
  server running, we will need maven.
  o If there is a path variable defined for maven run:
  § mvn clean install
  o If no path variable, macOS can run
  § ./mvnw clean install
  o Windows can run
  § ./mvnw.cmd clean install
  • This packages the maven build into a JAR file in the Target
  directory which we will use to deploy onto GCP
- Deploy to GCP
  o Run gcloud -v to make sure the Google Cloud CLI is
  installed
  o Run gcloud init to initialize google cloud.
  § Make sure to choose the default configuration
  § You will then be prompted to login with your email
  (Make sure to use the email that has billing set up with the credits provided)

- About Database:
- MongoDB
  Set the url to the MongoDB in environment variable, and we set this auto_create_database connect with GCP, and set up the authentication with GCP, then create a
  admin role, and we get this url:`spring.data.mongodb.uri=mongodb+srv://adminUser:yourSecurePassword@127.0.0.1:27017/accounts`, replacing `<adminUser>`, `<yourSecurePassword>`, and `<127.0.0.1:27017>` with your IP range.

- Once successfully deployed, there will be a URL in the console to take you to where the project is deployed.
- If not, run：
  § gcloud app browse
- Last step: clean up to avoid billing charges: Project settings => shut down project

## Backend - Spring Boot configuration:
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
The app should be available on [http://localhost:5173>].

This is the result:
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

# Troubleshooting

#### Team 8