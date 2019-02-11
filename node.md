# Introduction to Node and Express 💡

![JS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png)

### Node.js

[Node](https://nodejs.org/) is a runtime for JS. In other words, it's our way to run JS outside the browser. 
Node adds functionalities not originally found in JS, like access to the operating system (OS), the file system (FS), etc..

The following JS code could be added to a file names `Test.js` and just ran by typing `node test` in the terminal

```javascript

// Test.js

console.log('Hello World')

```
> As simplistic as the previous code might seem, it's runnable outside the browser!


### NPM
[NPM](https://www.npmjs.com/) stands for node package manager. It helps organize and keep track of dependencies and third party modules and libraries.
Npm keeps track of dependencies and other book-keeping meta-data in a file named `package.json`. A simple `package.json` file might look something like the following:


```javascript
{
    "name": "server",
    "version": "0.0.1",
    "description": "Introduction to node",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "server"
    ],
    "author": "Ammar Yasser",
    "license": "MIT",
    "dependencies": {
      "express": "^4.16.4"
    }
  } 

```
### Express

Our goal is to build full-stack applications using the same language. 
[Express](https://expressjs.com/) is the most commonly used framework to develop server side applications in node.

### First Server

So let's create our first server. In a file named `index.js` write the following: 

```javascript
const express = require('express');
const app = express()

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

```

In your terminal, write `npm i` to install all the packages and dependencies as specified in the `package.json` file.

> Note: For now we only have express as a dependency

Now that we have express installed type `node index` in your terminal. 
You should see the output in your terminal `Server up and running on port 3000`

Okay, so we created a server! 👏 it does absolutely nothing, nevertheless we created a functioning server.

### How do we add functionalities to our server?

Clients communicate with servers through some "end points". Special routes that when a request matches one of them, a certain functionality is triggered in the server.

Okay so let's make our server respond to the default route with a `Hello World`. 

> The default route is namely '/', for example the default route of our application will be localhost:3000/

Add the following to your `index.js` and run the server.

```javascript
const express = require('express');
const app = express()

// Define the default route
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
})

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

```
Now, if you go to http://localhost:3000/ you should see `Hello World`

In the previous snippet, we instructued JS given a request that matches the route specified in the `app.get('/', etc...)`
namely the '/' route, to send a simple html header with the content of Hello World.

Our server does not have to always return html. Actually, from now on we will be more interested in returning JSON data.
Try out the following:

```javascript

// Define the default route, respond with a json
app.get('/', (req, res) => {
    res.send({Message: 'Hello World'});
})

```

