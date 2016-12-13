# NG2-TRU-POC

Angular 2 TRU POC project

## How do I get set up?

* Summary of set up
* Building atrifacts
* Dependencies
* How to run tests
* Deployment instructions
* All available CLI commands

### Summary of set up

install dependencies

	npm i
	
start dev-server

	npm start
	//or
	npm run devserver
	
The application is available on `http://localhost:8080`.
	
### Building atrifacts

To build artifacts using `dev` configuration use:

	npm build
	//or
	npm run build:dev
	
To specify prod configuration use:

	npm run build:prod
		
If you want to build in watch mode you can use

	npm run watch:dev
	//or
	npm run watch:prod
	
The artifacts available in `/public`	folder at root directory.

### Dependencies

All dependencies listed in `package.json` file.

### How to run tests

To run the unit test:

	npm test
	
To run tests in watch mode:

	npm watch:test	
	
### All available CLI commands

* `npm run devserver` or `npm start` - start wepback dev-server;

* `npm run build:dev` or `npm run build` - build artifacts using dev configuration;

* `npm run build:prod` - build atrifacts using prod configuration;

* `npm run clean:dist` - to clean "public" and "coverage" report folders;

* `npm run clean` - clean npm cache and remove "public", "coverage", "node_modules" folders;

* `npm test` - run unit tests/

* `npm run watch:dev` - observe files changes and build artifacts using dev configuration;

* `npm run watch:prod` - observe files changes and build artifacts using prodd configuration;

* `npm run watch:test` - observe files changes and run unit tests
	
### Deployment instructions

Pickup artifacts at `/public` folder.

//TODO

## Contribution guidelines

* Writing tests
* Code review
* Other guidelines

//TODO

## Who do I talk to?

* Team contact

//TODO