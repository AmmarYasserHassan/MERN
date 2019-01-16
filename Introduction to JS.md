# A beginner's introduction to Javascript 🚀 💻

![JS Logo](https://logonoid.com/images/javascript-logo.png)

## What is Javascript?
Javascript (JS) is an interpreted, dynamic, weakly-typed single-threaded asynchronous language. It’s always identified as a multi-paradigm language as it supports Object-Oriented, Functional and event-driven programming styles.

## Why JS?
One area where JS dominates is the web. For any web page to look and behave the way it does, three elements come into play:

* HTML
> The content of the webpage is created using HTML
* CSS
> The appearance and style of the content is achieved using CSS
* JS
> The role of JS is to serve dynamic content, manipulate values and make the pages interactive and responsive

Historically JS was only used in client-side functionalities. But, with the introduction of [Node.js](https://nodejs.org/), it can now be used both at client-side and server-side. It’s lightweight, easy to learn, easy to implement and it’s supportive open-source community along with the fact that new developers need to learn only one language for both the frontend and the backend made JS a hot topic in recent years.

> It’s important to note that JS is an implementation of the [ECMAScript](https://www.ecma-international.org/) standard.

Hence, many versions exist of JS. The versions that are most famous within the developers' community and widely supported by browsers are ES6 (ES2015) and beyond.

### Types

JS is weakly-typed which means that variable declaration does not require a type.

```javascript
let num = 5;
const word = 'Hi'
var greeting = "Hello"
let flag = true
```

> In JS if a line of code contains only one statement then the `;` could be omitted.


### Variable scope

There are three keywords to declare a variable in JS: 
* let
> let has a blocked-scope
* var 
> var has a function scope if defined within a function or a global scope if defined outside all functions
* const
> const dentoed a variable with a value that will **NOT** change


```javascript

function scopeExample() {

    var arr = [1,2,3,4]
    var globalCounter= 0
    for( let localCounter = 0; localCounter< arr.length; localCounter++ ) {
        globalCounter++
        // here we can access localCounter and globalCounter
        }
    console.log(globalCounter)
    // prints out 4
    console.log(localCounter)
    // error as localCounter's scope is restrained to the for loop
}

```

```javascript

const e = 2.18
e = 1.2 // error

```

### Operations

```javascript

let x = 5
let y = 2
let sum = x + y // 7
let product = x * y // 10
let power = x ** y // 25


let word1 = 'Software'
let word2 = 'Engineering'
let word3 = word1 + word2 // Software Engineering
```

### Objects

Creating objects in JS is really straight forward. 

```javascript

var employee = {}

```

This seemingly very simple line of code creates an empty object. But in general objects can hold any number of key-value pairs.

```javascript

var person = {
    name: 'Tywin',
    house: 'Lannister',
    age: 57,
    hobbies: ['hunting', 'planning to kill other people', 'horse riding'],
    isMarried: false
}

```

The above snippet creates an object stored in a variable called person:older_man:. The attributes of the object are name, house, age, hobbies and finally isMarried. The values of these attributes can be of any type as JS is weakly-typed.

### :warning: == vs ===

In most cases JS follows the same conventions as other languages like Java or Python. But, when it comes to the equality comparison `==` JS sometimes behaves in a not-so-traditional manner.

> In JS `===` and `!==` work as you'd expect

> In JS `==` and `!=` work as you'd expect when operands are of the same type. But, if the operands are not of the same type they attempt to coerce the values.

#### Examples of ==:

* ` '' == 0 // false `
* ` 0 == '' // true `
* ` 0 == '0' // true `
* ` false == 'false' // false` 
* ` false == '0' // true `
* ` false == undefined // false `
* ` false == null // false `
* ` null == undefined // true `



## :hammer: Functions

Functions play a major role in JS as it supports the functional programming paradigm. Functions are pieces of code that are reusable and they provide a cleaner more modular structure for our code. Functions could return a value or they could return no value, similar to a function of type `void` in Java.

```javascript

function helloWorld() {
    console.log('Hello, World')
}

function sum(x,y) {
    return x+y 
}

helloWorld() // prints 'Hello, World' to the console
let result = sum(2,3) // result = 5 but nothing is shown to the console

```

### Functions as Objects

In JS, functions could also considered as objects. Hence, they could be passed as arguments, assigned to a variable and so on.

```javascript

const helloWorld = function () {
    console.log('Hello, World')
}

const sum = function(x,y) {
    return x+y 
}

helloWorld() // prints 'Hello, World' to the console
let result = sum(2,3) // result = 5 but nothing is shown to the console

```

### Arrow Functions

Arrow functions are an alternative way to defining functions in JS that was introduced with ES6, and it is very widely used in modern JS development.

```javascript

const helloWorld = () => { 
    console.log('Hello, World')
}

const sum = (x,y) => { 
    return x+y
}

```
> To create an arrow function simply omit the keyword `function` replace it with `(any number of arguments) =>` 

### Callback functions

In JS as I previously mentioned, we can pass functions as arguments to other functions and call functions from within functions.

> A function that accepts another function as an argument is called a higher order function

> A function that is passed as an argument to another function is called a callback function

```javascript
function logger() {
    console.log('Hello World 1')
}

const loggerAsFunc = function() {
    console.log('Hello World 2')
}

const loggerAsArrow = () => {
    console.log('Hello World 3')
}

function takesCB(cb) {
    cb()
}
takesCB(logger) // Hello World 1
takesCB(loggerAsFunc) // Hello World 2
takesCB(loggerAsArrow) // Hello World 3
```

In the previous example we have a function `takesCB(cb)` that accepts a callback function as an argument and it simply executes it.

```javascript
const finish = () => { console.log('Finished work') }

const work = (activity, callback) => {
    console.log(`I am currently ${activity}`)
    callback() 
}

work('drawing', finish) // I am currently drawing
                        // Finished work
```

In the last snippet, finish is just a simple function that prints `Finished work` to the console. On the other hand, work is a function that accepts two arguments: `activity`, typically we expect it to be a string and `callback`, typically we expect it to be a function. The last line of code makes a function call with the arguments `'drawing'` and the function `finish`

### Why Callbacks?

Callback functions are essential to JS as it's asynchronous. What this means is that not all functions will be executed in the order they appear unlike most traditional programming languages. 


```javascript
var user = db.getUser() // A function that will take a long time as it will open a connection with the database
console.log(user) // prints undefined as the value of the variable user is still undefined
```
Since JS is single threaded the main event loop does not allow any operations that will take a long time to block the rest of the operations. Hence operations like I/O, API requests and `setTimeout()` will be scheduled on a seprate "Tasks queue" that will run in the background while the main event loop keeps executing commands on the main thread.

> NOTE: :timer_clock: Operations that take a 'long' time, usually take few hundereds milliseconds.

```javascript
const helloWorld = () => { console.log('Hello World') }
const takesLongTime = (func) => { setTimeout(func,1000)}
takesLongTime(helloWorld)
// We expect this to be printed after Hello World
// But Hi will be printed first
console.log('Hi')
// Output
// Hi
// Hello World
```

In the previous snippet, `helloWorld()` is just a function that prints `'Hello World'`, `takesLongTime()` is a function that accepts one input and then calls the predefined `setTimeout()` with the input and a delay of a 1000 ms. 
In other words, `takesLongTime()` executes whatever function is passed after 1 second. Hence, the event loop will continue  executing commands on the main thread in order not to block the rest of our code. Consequently the `console.log('Hi')` will be executed first followed by the delayed command.

> Callbacks are a way to ensure that our code is executed in the order that we intend

#### Example:
We're designing a simple book store application. We want to allow the users to search for books by author. The user enters the author's name and our application searches the backend for all books written by this author. Below are two possible versions that we might implement. Version 1 will not work for the same reason `'Hi'` was printed first in the previous example.

```javascript
// Version 1
const searchBooksByAuthor = (bookAuthor) => { 
    var books = db.find(bookAuthor) // Query the database
    return books // db.find takes a long time and the variable 'books' does not contain the values we expect
}
console.log(searchBooksByAuthor('Charles Dickens'))
// Output --> undefined
```


```javascript
// Version 2
const searchBooksByAuthor = (bookAuthor, cb) => { 
    db.find(bookAuthor,cb) // Query the database 
                          // But this time pass a callback function to be executed after the query has returned
}
const handleReturnOfBooks = (books) => {
    console.log('Found books')
    console.log(books)
}

searchBooksByAuthor('Charles Dickens',handleReturnOfBooks)
// Output --> ['A Tale of Two Cities', 'Great Expectations', 'Oliver Twist']
```
> As you might have expected, handling complex chained queries and errors using callbacks will lead to unreadable hard to maintain code. This is why ES6 introduced [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and ES7 introduced [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Nevertheless callbacks as a concept are inseparable from the process of learning JS, for more info consult [Callback Hell](http://callbackhell.com/).

## Promises

> Promises represent the future result of an asynchronous operation
In other words a promise is an object that can be returned synchronously from an asynchronous function. 

A promise has one of three states:
* Pending
> A promise always starts as pending
* Fulfilled
> Promise was settled successfully
* Rejected 
> Promise was settled unsuccessfully

The two most important promises' functions are `.then()` and `.catch()`, `.then()` contains the code to be executed on success while `.catch()` is executed whenever an error occurs. Promises provide a lot of advantages over traditional callbacks: they're easier to read, maintain and most importantly to deal with errors. Promises can be chained allowing for a number of `.then()`s and then finally having one and only one `.catch()`. Compare that to the callback hell where every callback had to handle any error that might occur within it's scope.

#### Example:
So assume we want to simulate a real-life scenario where we want to get some data from a remote server, we will use an open source fake [api](https://jsonplaceholder.typicode.com/) for this example. I will use the fetch method

```javascript
let url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url) // Function that takes a long time, but instead of passing a callback for it, it returns a promise.
    .then(posts => posts.json()) 
    .then(postsAsJson => console.log(postsAsJson))
    .catch(err => console.log('Error while getting posts'))
```
`.then()` expects a function to be executed when the promise is resolved so we pass a simple function that accepts 1 argument that I called posts as we're expecting posts. Then we're invoking a predefined method `.json()` to the posts to transform it to json format. `.json()` returns a promise as well, hence we will chain promises having another `.then()` with another simple function that accepts 1 argument called `postsAsJson` and it just prints it out to the console. We have a single `.catch()` that will be invoked if any error occurred in either the `.fetch()` the first `.then()` or the second `.then()`.

> NOTE: the convention for naming the result of an api request is `res` I used `posts` to be clearer in the example
> NOTE: :warning: the `.catch()` method should handle the error and return an suitable message to the user, here I just printed a simple statemnet 


## Async/Await
