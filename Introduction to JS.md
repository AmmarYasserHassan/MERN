# A beginner's introduction to Javascript 🚀 💻

![JS Logo](https://logonoid.com/images/javascript-logo.png)

## What is Javascript?
Javascript (JS) is an interpreted, dynamic, weakly-typed language. It’s always identified as a multi-paradigm language as it supports Object-Oriented, Functional and event-driven programming styles.

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

In JS, functions are also considered as objects. Hence, they could be passed as arguments, assigned to a variable and so on.

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

There is an alternative way to defining functions in JS that was introduced with ES6. It is called arrow functions and they are very widely used in modern JS development.


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
