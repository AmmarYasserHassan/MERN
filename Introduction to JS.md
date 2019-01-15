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


let word1 = 'Ammar'
let word2 = 'Yasser'


```

