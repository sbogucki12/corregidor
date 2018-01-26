# Corregidor (Client Side Application)

This is the public facing website I am building for Corregidor Services, LLC.  The server-side infrastructure with code for capturing the user-submitted form data and the Entity Framework for submitting that data to the SQL Server database is currently in a sepearate repository until being merged later.   

You can check out the current backend code here: 

<https://github.com/sbogucki12/corregidorbackend>


## What's Been Done So Far

I've laid out the basic website.  The routes are established and the basic contact form has been written.  

## Next Steps

On the server side, I still have to finish my API controller, though much of the associated prep work is complete. 

I then have to come back to this server-side code and connect the existing web forms to the API using the HTTP client module.  

After that, I have some views to finish, and need to refactor to make the site more mobile friendly.  Eventually this will be deployed to Azure or AWS (though, probably Azure since the backend is written in .NET with a SQL Server database; just makes sense - to me, at least).

## Screenshots


+ Day One (Jan 25, 2018)

![Imgur](https://i.imgur.com/UqqpuHP.jpg)

![Imgur](https://i.imgur.com/3AmrRf0.jpg)

![Imgur](https://i.imgur.com/3AmrRf0.jpg)


## Technologies

+ Client-side: 

HTML, CSS (Bootstrap), Angular (5)

+ Server-side:

C# (.NET Core), Entity Framework, SQL Server

(I know this sounds crazy, but I think the actual web server for the basic site hosting will be written in JavaScript via Node/Express.  WHy have a .NET API separate from the core Node Server?  IDK.  I just wanna.  We'll see.)

## Prototype

You can check out a barebones, static version of the site now, uploaded to an AWS S3 bucket.  The forms aren't in this version, but the routing works.  It's a test site, basically: 

<http://corregidor-services.s3-website-us-west-1.amazonaws.com/>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
