# Lost in Translation
*Create a sign language translator using Reac*

The goal with this assignment is to build an online sign language translator as a Single Page Application, SPA, using React.

## Set up the development enviroment
Using this REST API provided: https://github.com/dewald-els/noroff-assignment-api
For this to work you either have to deploy a fork of it yourself or spin up a localserver for this application to work.

## Design a component tree
Create a component tree of the application to map out the structure. This should tree should show the pages and feature components that are going to form the anatomy of the application. This step should be done BEFORE starting to code. 

## Requirements for the sign language translator
The application will have one main feature: to act as a “translator” from regular text to sign language. The application must be able to translate English words and short sentences to American sign language.

### Required features
- Using React as the library/framework to build the application
- Using React Router for handling the navigation between pages
- Using the API to store the users and their translations
- Either use ContextAPI or Redux to manage state
- Should consist of three pages:
    1. The Startup/Login Page
    2. The Translation Page
    3. The Profile Page

## 1. Startup/Login Page
The first thing a user should see is the “Login page” where the user must be able to enter their name. Save the username to the Translation API. Remember to first check if the user exists. Once the name has been stored in the API, the app must display the main page, the translation page. Users that are already logged in may automatically be redirected to the Translation page.  In this application the browsers’ local storage may be used to store/manage the session.

## 2. Translation Page
A user may only view this page if they are currently logged into the app. Please redirect a user back to the login page if now active login session exists in the browser storage.
The user types in the input box at the top of the page. The user must click on the “translate” button to the right of the input box to trigger the translation. Translatioins must be stored using the API, see "Set up the development enviroment" in this readme. The sign language characters must appear in the "translated" box. You may choose to limit the input to 40 letters (not required).

## Profile Page
The profile page must display the last 10 translations for the current user. You only need to display the text of the translation.
There must also be a button to clear the translations. This should “delete” in your API and no longer display on the profile page. To simplify things, you may simply delete the records, but you should NEVER delete data from a database. The Logout button should clear all the storage and return to the start page. You may design this however you’d like.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
