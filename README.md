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

### Env handling
The usual `.env` file used in development is split in two here: there is a `.env` file committed to the repo containing the non-sensitive variables (e.g. dev server port), and a `confidential.env` containing the secrets (e.g. credentials also needed in local dev) that is in gitignore. The two are merged and loaded on server start. They are also watched, the dev server restarts if any of them changes.

### Client prod build
```
npm run build-prod
```
Generates minified client code.

### Run tests (and linter)
```
npm t
```
