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
# TaskTracker







Tutorial source
https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=2580s
video title: React JS Crash Course

server on both described below
can use npm run start or npm run build

npm run build

running on a server instead of local
install server
$ sudo -S npm i -g serve

$ npm run build

build server from build folder on port 8000
$ serve -s build -p 8000

to use the .json server use
$ npm run server
open new terminal and run 
$ npm run start

This will run on localhost 3000 using the db.json file, updating it in real
time when changes are made to the website



This project creates a series of buttons and containers, with input fields so that the user can fill out a simple form and create to-do tasks, update them, delete them and flip their toggleReminder boolean. In all cases, the buttons have full functionality. The next step for making this project better would be to add persistent data logging and a backend so that the users could log in to their account and still have access to the to-do list they have made. Also implementing logic for the set reminders would be nice. as of now it just flips a visual flag.

The react App component uses UseState to instantiate and manipulate the states of this app. When executed, the app returns DOM components with default parameters.
- set the state to showing new tasks added in the list,
- flipping the boolean state for showAddTask
- creates the Task component which has default methods such as 
 - tasks={tasks} 
 - onDelete={deleteTask}
 - onToggle={toggleReminder}
 - and sets the default text to 'no tasks to show' if tasks.length is not greater   than zero (there are no tasks)

 The most interesting aspect of this project to me, is the ability to create instances of this task component which have identical methods, but each method only corresponds with the task that shares an ID with it. so each task will be able to update state without affecting the others or being effected by others during state change.

 Then, everything is rendered by index.js so that the styles referenced therein can by applied by index.css. 

 reportwebvitals can be removed. Its part of the default React Boilerplate stuff.