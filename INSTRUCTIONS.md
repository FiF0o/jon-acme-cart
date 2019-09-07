
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and modified to add Sass, enzyme helper library and is using React, Redux and CSS material UI library for its interface.


## Requirements

Must have nvm to use one of the latest version of node (e.g. node 12.8.1).
Require node-sass.


## Prerequisites before running the project
Run the following command before running the available scripts below:
- `nvm use` to use the correct version of node
- `npm i` to install the dependencies

You will also need to set the environment variables in the `env.development` file and rename this file `.env.development` and source it in the terminal where you want to run the project - `source .env.development` -

By default, all the endpoints will be on your localhost but you still need to se the `PORT` env variable.
By default, the ports for the:
- Mock web API will be 4000
- Web App 3000


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
