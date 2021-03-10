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

The purpose of this API is to sit between your application (e.g. your Mendix application) and your database (e.g. the PostgreSQL hosted on Azure).

By doing so, we can easily retrieve the data from the database and manipulate it as we like. If not this API, we would have to manually import the CSVs in the modeler and we don't want that, right?

<img alt="License" src="./what-is-an-api.png">

## :question: How does an API work? ##

An API request occurs when a developer adds an endpoint to a URL and makes a call to the server.

An API endpoint refers to the touchpoints of interaction between an API and another system.  An endpoint provides the location where an API accesses the resources they need. An API works by requesting information from a server and then receiving a response after that. 

For more information about REST operations, please check: https://learning.postman.com/docs/getting-started/sending-the-first-request/.


## :notebook: What is TypeScript? ##

I would recommend reading https://www.typescriptlang.org/docs/handbook/typescript-from-scratch. It will give you a good understanding of what it is, how it works and why is it useful.

## :notebook: What is Prisma? ##

Without getting into too much details (for those who want, there is a link below), Prisma is a tool that will conveniently synchronize our Postgres, update it and give us a set of tools to manipulate the database without writing literal SQL queries. 

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

  ### I have a bunch of errors now in the .ts files ###

  Now that you have updated the schema to match your database, you will get a bunch of errors and that is perfect :D.

  You will find comments throughout the code.

  For the explanation, I will always refer to the Client object assuming that everybody has some sort of Client/User. You can safetly remove the co2.ts and route.ts files and all the references to them.

  First, let's understand the structure of the project: 

  #### src/index.ts ###
    
  This is the file that gets executed by the npm run dev. It sets up the local server, the route towards the docs (we'll speak about it later) and the Routes for our API.  

  #### src/routes/index.ts ###

  This file is the entry point for all your routes. It should collect all of them, add them in the express route object and export it.

  #### src/routes/client.ts ###
  This file is the place where you add the routes to the server and define the type of REST operation. 
  
  I hope that the GET request and POST request are self explanatory and I will explain how the path parameter works.

  ```javascript
     router.get("/:clientCode", async (req, res) => {
    const controller = new ClientController();
    const response = await controller.getClient(req.params.clientCode);
    if (!response) res.status(404).send({ message: "No user found" });
    return res.send(response);
  });
  ```
  By doing router.get("/:clientCode") we are setting up a route to our server so it will be localhost:8000/client/:clientCode.
  Because clientCode has the : in front, it will be dynamic. So, in our path we can write localhost:8000/client/someId and we can retrieve the client by it's id from the database.
  In the controller.getClient(req.params.clientCode) make sure that the req.params.clientCode matches your route.

  #### src/controllers/client.controller.ts ####

  This file will be mainly used to control how swaggerUI works. We are using the tsoa library to set it up. 

  Lets look at an example 
  ```javascript
    @Get("/:clientCode")
  public async getClient(@Path() clientCode: string): Promise<Client | null> {
    return getClient(clientCode);
  }
  ```
  In this example, we are using @Get("/:clientcode") which will tell to swaggerUI to show this path as a GET with the parameter :clientCode.
  In the getClient(@Path() clientCode: string): Promise<Client | null> there are 3 things happening.
   1. We tell to swaggerUi that clientCode is our path parameter 
   2.  We use the TypeScript's type check and say that clientCode MUST be a string, nothing else
   3. We use the TypeScript's type check and say that the return of this function will be a Promise that will hold a Client (our type from the prisma model) or it is null, and nothing else.
   
  #### src/repositories/client.repository.js ####
  
  This file contains the queries to the database using the PrismaClient.
  
  ```javascript
  export const getClient = async (id:string): Promise<Client | null>  => {
    const prisma = new PrismaClient()
    return prisma.client.findUnique({
        where: {
            clientcode: id
        }
    })
  };
  ```

  By using the same logic as from the previous file, id must be a string, and return type must be a Promise holding a Client or null.

  We instanitate the prisma client and then we do prisma.client.findUnique({}). this will find 1 value from your client model based on the where condition. 
  The where condition, in our case, is the clientcode we sent as a parameter.

  #### Sum it up ####

  To sum it up, I will leave a schema here that should explain the flow of the data through the application from the client to the database.

  <img alt="Schema" src="./flowchart.jpg">

## :memo: License ##

This project is under licens1e from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/eduardm1" target="_blank">Eduard Modreanu</a>

&#xa0;

<a href="#top">Back to top</a>
