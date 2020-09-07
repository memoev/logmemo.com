---
slug: "/blog/2020-09-01-object-oriented-programming"
date: "2020-09"
title: "Object-Oriented Programming"
---

### 1. INTRODUCTION

Object-oriented programming is a term that, as a developer, you hear a lot and you build into the concept as you write more code and create variables containing properties and/or methods, but it was until recently that I decided to take a deeper dive into really understanding what it is and the greater advantages of exploiting its benefits.

Here's a quick example of how an `Object` usually looks like in javascript:

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

It's important to mention that javaScript is heavily object-oriented. It follows a prototype-based model (as opposed to class-based). Every single datatype has its own prototype with its own properties and methods, the way to invoke them is using the keyword `prototype`, for example: `Array.prototype`. With this we just created an instance of an array.

The best way to put OOP into simple words: box containing characteristics, traits, attributes, features, etc., that define a concept or idea. For example, if we want to describe a car in OOP, we could do something like this:

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

On the example above we just modeled a car into an object containing all its key properties and methods, which are functions that a car actually can do.

### 3. BENEFITS

Pre-OOP, javascript programming was mainly procedural, which basically means, having a lot of variables with a bunch of functions which would alter data in order to achieve a desired output. Which in most cases is "easy" to follow-up and might be straightforward. The problem with this is, as your program grows, so does its complexity, and you might end up with a large number of functions all over the place with repetitive code blocks prone to breaking and bugs, in other words: `spaghetti code`, but there's four core concepts that OOP provides, which will help us find ways to manage this issue.

#### ENCAPSULATION

The first benefit is the ability of encapsulating information into units, making it easy to access and manipulate. These units are objects, the data/variables is our properties and any manupulations affecting the data is our methods.

Here's a clear example that brings to light the benefits of encapsulation:

```javascript
let baseSalary = 30000;
let overtime = 20;
let rate = 15;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
```

In this example, we have procedural code with 3 variables on one side and a function performing an arithmetic calculation returning a result on the other side, you can say that they are decoupled. 

Here's how this code block would look through the eyes of OOP:

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

We created a new employee object with three properties and a single method which computes the data returning a result. Benefits are clear, if you look at the `getWage` function you can notice there's no parameters being passed along; since the `employee` object already contains all data within its properties, we can use the scope to use them (`this`). All properties and methods inside the `employee` object, are highly related and modeled into one single unit. So we can say, one of the symptoms of procedural code it's functions with multiple parameters, but as you write more OOP code, you'll get functions with fewer parameters. The lower the number of parameters, the easier it is to use and maintain.

#### ABSTRACTION

The main purpose of abstraction is: the ability to remove a complex concept out of sight and mind. You can image a CPU as a black box with buttons, since the case covers the motherboard, cables, power source, graphic cards, fans, etc., people don't really give a lot of thought of all the delicate intricacies that go into the build of having a working computer. From here you can say that the concept of a CPU has been abstracted from the user.

You can use the same technique in OOP by hiding some of the properties and methods from the outside. Some of the benefits of doing this would be:
- A simpler interface to interact with the object.
- You reduce the impact of change.

By having a container unit, you're able to just expose some properties and methods, making it more digestible for the user. As well, if you change these private methods contained within the object, changes won't leak to the outside global scope of our code and affect less of the overall functionality of our program. By this you're avoiding the spaghetti mentioned up top.

#### INHERITANCE

By using inheritance, we avoid the need of redundant code. Objects can be modeled into cookie-cutters which will create multiple variables, each having the same properties and methods. With this we're creating multiple clones with different names but with the same functionality. You can later reference these clones in a unique and particular way, affecting one of them but not all. This introduces us to the concept of an `object template`, or constructor. By using constructors you can generate object instances that will have the same usability across our program, instead of having to redefine all these properties and methods per element created.

Constructors are functions which assign features to an object. Here's a quick example of how this looks:

``` javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = _ => {
    alert('Hi! I\'m ' + this.name + ', and I\'m ' + age + ' years old.');
  };
}
```

In this example we're creating a person with name and age as properties and a greeting method. In order to use it, we write the following:

``` javascript
let person1 = new Person('Jimmy', 20);
let person2 = new Person('John', 21);

console.log(person1.name); // Jimmy
console.log(person2.name); // John
```

#### POLYMORPHISM

To understand Polymorpism better, we're going to look into how the word is compose, `poly` means many and `morph` means form. In OOP, polymorphism is a core concept that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As javaScript is not a type-safe language (unless you are using either Typescript or strict mode), we can pass any type of data members with our methods.

Going back to our Person example, we're able to see how the `greeting` method returns two different outputs, since it depends on the values on `name` and `age`.

```javascript
person1.greeting(); // Hi! I'm Jimmy, and I'm 20 years old.
person2.greeting(); // Hi! I'm John, and I'm 21 years old.
```

Basically the advantage of polymorphism is, that as developers, we are able to design objects to share behaviors and to be able to override shared behaviors with specific ones, taking advantage of inheritance to make this happen. If we want to alter the behavior of one specific instance of the person class and create an athlete, we would want to go about it like this:

```javascript
function Athlete(age, weight, speed){
 this.age = age;
 this.weight = weight;
 this.speed = speed;
}

Employee.prototype = new Person();
```

After this, we want to alter the behavior of the `greeting` method, by letting users know how fast our new athlete can go:
```javascript
Athlete.prototype.greeting = _ => {
    alert('Hi! I\'m ' + this.name + ', I\'m ' + age + ' years old, and I can run up to ' + speed + ' miles per hour');
}
```

Being able to do all this, will provide a user friendly and more elegant way to describe different cases for specific scenarios that demand multiple outcomes depending on the type of the input. That's something that would be written more extensible within switch/case statements.

### 4. SUMMARY

Object-oriented programming allows us to model/design our data as units, providing the benefits of `Encapsulation`, which allows us to group related variables and functions together, reducing complexity and reusing code along different parts of the program. With `Abstraction`, we hide the details and complexity, showing only what's necessary, helping us to isolate the impact of changes. `Inheritance` helps us to eliminate redundant code and lastly, with `Polymorphism` we are able to avoid overloading our code with multiple case scenarios.