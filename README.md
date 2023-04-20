# GeoBook

Hosted API: https://geobook-api.onrender.com

## Project Summary

This was a final group project for the Northcoders bootcamp. We worked in a team of 4 for 2 weeks, to create this app. Team:

- https://github.com/erinmd
- https://github.com/beckybp
- https://github.com/rovercode1
- https://github.com/01gibbs

We used MongoDB, mongoose, express, node, and jest for this project. Firebase authentication is also used to secure our endpoints. The frontend for this project is hosted here: https://github.com/erinmd/geobook-be using react native.

Most of this technology was new to us, and we enjoyed the challenge of learning how to use it all!

This is an API used for our GeoBook App.

### API Endpoints
- Get Books
- Get Book
- Post Book
- Delete Book
- Get Users
- Get User
- Post User
- Patch User

## Instructions to use

### Initial setup
1. Clone the repo
2. Create a new GitHub repo, do not initialise the project with a readme, .gitignore or license.
3. From your cloned local version of this project you'll want to push your code to your enw repo using the following commands:
````
$ git remote set-url origin YOUR_NEW_REPO_URL_HERE
$ git branch -M main
$ git push -u origin main
````

### Install dependencies
````
npm i
````

### Setup your .env files
You will need to create two .env files `.env` and `.env.test`
For each file you need to add `DATABASE_URL = <MongoDB_URL_here>`

### Seed the database
To initate the database and seed, run the command
````
$ npm run seed-prod
````

### Run locally
````
$ npm run start
````

### Run tests
````
$ npm t
````

## Minimum requirements
Node v16