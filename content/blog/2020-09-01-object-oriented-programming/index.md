---
slug: "/blog/2020-09-01-object-oriented-programming"
date: "2020-09"
title: "Object Oriented Programming"
---

### 1. INTRODUCTION

Object oriented programming is a term that, as a developer, you hear a lot and you build into the concept as you write more code and create variables contaning properties and/or methods, but it was until recently that I decided take a deeper dive into really understanding what it is and the greater advantages of exploiting it's benefits.

Here's a quick example of how an `Object` looks like in javascript:
```javascript
let myObject = {
    myStringProperty: 'OOP',
    myNumberProperty: 21,
    myMethod: () => {
        return this.myNumberProperty++;
    }
}
```

### 2. DEFINITION

- [OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

OOP (Object-Oriented Programming) is an `approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts`.

It's important to mention that javaScript is heavily object-oriented. It follows a prototype-based model (as opposed to class-based). Every single datatype has it's own prototype with it's own properties and methods, the way to invoke them is using the keyword `prototype`, for example: `Array.prototype`. With this we just created a instance of an array.

The best way to put OOP into simple words, it's a box containing all characteristics, traits, attributes, features, etc, that define a concept. For example, if we want to describe a car in OOP, we could do something like this:
```javascript
let car = {
    model: '...',
    year: 0000,
    engineOn: false,
    start: _ => {
        return this.engineOn = true;
    },
    stop: _ => {
        return this.engineOn = false;
    }
}
```
On the example above we just describe a car by modeling it into an object containing all it's key properties and some methods, which are functions that a car actually can do.

### 2. BENEFITS

Pre-OOP, javascript programming was mainly procedural, which basicly means, having a lot of variables with a bunch of functions which would alter data in order to achive a desired output. Which in most cases is "easy" to follow-up and might be straightforward. The problem with this is, as your program grows, so does it's complexity, and you might end up with a large number of functions all over the place with repetitive code blocks and we might end up with `spaghetti code`.

#### ENCAPSULATION

OOP came to solve this issue by encapsulating data into units, making it easy to access and manipulate. This units are the objects, the data becomes the properties and manipulating the data is our methods.

Here's an clear example that brights to light the benefits of encapsulation:
```javascript
let baseSalary = 30000;
let overtime = 20;
let rate = 15;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
```

In this example, we have 3 variables on one side and a function performing an arithmetic calculation returning a result on the other side. Here's how this code block would look through the eyes of OOP:
```javascript
let employee = {
    baseSalary = 30000,
    overtime = 20,
    rate = 15,
    getWage: _ => {
        this.baseSalary + (this.overtime * this.rate);
    }
}

employee.getWage();
```

