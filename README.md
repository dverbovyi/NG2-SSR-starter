# NG2-starter

Angular 2 starter app with server-side rendering using Angular Universal, Express, TypeScript language, Webpack 2, Karma, Jasmine

## How do I get set up?

* Summary of set up
* Building atrifacts
* Dependencies
* How to run tests
* All available CLI commands

### Summary of set up

install dependencies

	npm i
	
build **DEV** configuration and start server

	npm start
	//or
	npm run server:dev
	
The application is available on **http://localhost:3000**.
	
### Building atrifacts

All artifacts available in **/dist**	folder at root directory.

To build artifacts using **DEV** configuration use:

	npm build:dev
	
To specify **PROD** configuration use:

	npm run build:prod
		
If you want to build in watch mode you can use

	npm run watch:dev
	//or
	npm run watch:prod
	

### Dependencies

All dependencies listed in `package.json` file.

### How to run tests

To run the unit test:

	npm test
	
To run tests in watch mode:

	npm watch:test	
	
### All available CLI commands

* `npm run build:dev` - build artifacts using dev configuration;

* `npm run build:prod` - build atrifacts using prod configuration;

* `npm run clean:dist` - to clean "dist" folder;

* `npm run clean:aot` - remove ngc generated files 

* `npm run clean:coverage` - remove coverage report folder

* `npm run clean:all` - execute all clean-commands

* `npm test` - run unit tests

* `npm run watch:dev` - observe files changes and build artifacts using dev configuration;

* `npm run watch:prod` - observe files changes and build artifacts using prodd configuration;

* `npm run watch:test` - observe files changes and run unit tests

* `npm run server:dev` - build artifacts using dev configuration and start express server

* `npm run server:prod` - build artifacts using prod configuration and start express server
	
