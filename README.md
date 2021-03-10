<div align="center" id="top"> 

  &#xa0;

  <!-- <a href="https://api.netlify.app">Demo</a> -->
</div>

<h1 align="center">Api</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/eduardm1/api?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/eduardm1/api?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/eduardm1/api?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/eduardm1/API">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/api?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/api?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/api?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Api 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#why">Why do I want to use an API?</a> &#xa0; | &#xa0;
  <a href="#why">How does an API work?</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/eduardm1" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This project is intended to serve as a start for a REST API for the 3rd module, Business Intelligence and IT, within the University of Twente. 

Even though the API routes that are created within this project are probably not fit for your case, this README should be enough to help you design it for your own case.



## :question: Why an API? ##

APIs help software developers to streamline and shorten the application building process by eliminating frequently repeated program development processes. In short, they help you not to keep reinventing the wheel every time you are using the same procedure to build applications. 

The purpose of this API for your project is to sit between your application (e.g. your Mendix application) and your database (e.g. the PostgreSQL hosted on Azure).

Integrating this API will take your application to the next level. Resulting in data that is coming straight from the PostgreSQL database and therefore always up-to-date, instead of manually imported and therefore outdated data.
If not for this API, your app will be outdated due to the fact that we can't use the beautiful database created in the first part of the project, and we don't want that, right?

<img alt="License" src="./what-is-an-api.png">

## :question: How does an API work? ##

An API request occurs when a developer adds an endpoint to a URL and makes a call to the server.

An API endpoint refers to the touchpoints of interaction between an API and another system.  An endpoint provides the location where an API accesses the resources they need. An API works by requesting information from a server and then receiving a response after that. 

For more information about REST operations, please check: https://learning.postman.com/docs/getting-started/sending-the-first-request/.

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Tsoa](https://github.com/lukeautry/tsoa)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/eduardm1/API

# Access
$ cd api

# Install dependencies
$ npm install

# Setup the .env
In the current folder, you will see that there is a env.sample file. Rename it to .env and add the variables to match your databes login.
If you wish to use a version control, the .env file will not be added, automatically, so do not worry about compromising your credentials.

# Synchronize the local model with the postgres database
$ prisma instrospect

# Generate the prisma client
$ prisma generate

# run the project - might not work right away
$ npm run dev

# The server will initialize in the <http://localhost:8000>
```

## :boom: Make the API fit to your case ##

  ### Overview ###

Now you might be wondering what did prisma introspect and prisma generate do.

By using prisma introspect, you told to prisma to connect to the database, fetch the structure and generate a model according to the structure.
The model can be found in the root folder in the schema.prisma file.

  ### But I have errors in the schema.prisma file ###

  There might be the case that you have missmatches between the type of a foreign key that references the primary key in another table. 
  (If people will encounter other problems, I will add here)

  

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/eduardm1" target="_blank">Eduard Modreanu</a>

&#xa0;

<a href="#top">Back to top</a>
