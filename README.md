# react-node-app-skeleton

A minimalist skeleton repo to make starting new projects easier. Includes setup for a React client, a dockerized Node JS server, SCSS build, and test runner setup for both the client and the server (using the Jasmine test framework).

Yes, the client and the server is in the same repo. This is intended.

### Project setup
```
npm install
```

### Start dev server
```
npm start
```
Compiles client with hot reloading and starts server with automatic restart on code change. Also opens the app in your browser.

### Client prod build
```
npm run build-prod
```
Generates minified client code.

### Run tests (and linter)
```
npm t
```
