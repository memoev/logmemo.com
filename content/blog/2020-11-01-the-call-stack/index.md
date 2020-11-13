---
slug: "/blog/2020-11-01-the-call-stack"
date: "2020-11"
title: "The Call Stack"
---

## The Call Stack
There are two main types of JavaScript code: `global code`, placed outside of all functions, and `functional code`, contained within functions. When code is being executed by the JavaScript Engine, each statement is executed in a certain `execution context`.

[Javascript Visualized: The Javascript Engine](https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf)
[History on the Javascript Engine](https://en.wikipedia.org/wiki/JavaScript_engine)

### Execution Context
And just as there's two types of code, there's two types of execution contexts:
- Global Execution Context
- Function Execution Context
Here's the significant difference: **There's only one global execution context, created when our JavaScript program starts executing, whereas a new function execution context is created on each function invocation**.

Let's add that, there's a function context (`this`), which is the object on which our function is invoked, which can be accessed through the *this* keyword. An execution context, although it has a similiar name, is a completely different thing. It's an internal JavaScript concept that the JS Engine uses to track the execution of functions.

JavaScript is based on a single-threaded execution model: **Only one piece of code can be executed at a time**. Every time a function is invoked, the current execution context has to be stopped, and a new function execution context, in which the function code will be evaluated, has to be created. This is a lot of words just to say: whenever a new function is invoked a new function execution context gets prioritized and executed first, until it finishes. 

After the function, performs its task, its function execution context is `usually` discarded (unless your working with `generators`), and the caller execution context restored. So there's a need to keep track of all these execution contexts, both the one that;s executing and the ones that are patiently waiting. The easiest way to do this is by using a `stack`, called the `execution context stack` (or often called a `Call Stack`).

### Understanding the Call Stack
The `call stack` is where the computer stores the context in use, or the ones that are waiting. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stacj and uses that context to continue execution. Here's FINALLY, an example to explain all this:
```javascript
function greet(who) {
    console.log(`You're a wizard ${who}`);
}

greet("Harry");
console.log("Bye!");
```
A run through this program goes rougly like this: the global context starts running, the call to `greet` (line 4) causes control to jump to the start of the function (line 2). The function calls the method `log` from the `console` object, which takes control of the stack, does its job, and then returns control the function context, there it reaches the end, so it returns to the place that called it, which is line 4. The line after calls `console.log` once more. After that returns (// Bye!), the program reaches its end. We should think of this specific flow of control schematically like this:
```javascript
// not in function
    // in greet
        // in console.log
    // in greet
// not in function
    // in console.log
// not in function
```
This is a really visual way to see the stack filling up and dispatching calls.

### How to blow up the Call Stack
Storing this stack requires space int he computer's memory. When the stack grows too big, the computer will fail with a message like *"out of stack space"* or *"too much recursion"*. The following example can illustrate this by asking the computer who came first, the egg🥚 or the chicken🐔?
```javascript
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + "came first.");
// --> ??
```
This causes an infinite back-and-forth as a loop between two functions. If the computer had a infinite stack, this would rather come back as infinite. As it is, we will run out of space, or *"blow the stack"*.

Besides keeping track of the position in the application execution, the execution context is vital in `identifier resoutions`, the process of figuring out which variable a certain identifier refers to. The execution context does this via the `lexical environment`, but I'll cover that on another entry.

## Conclusion
The Call Stack is a beautiful thing and one of those things that make more sense the more code you write and try to understand the intricacies of programming as you develop complex applications. It usually, and in most cases, follows a LIFO operation, where the top execution contexts get executed first before returning to the global execution context. This allows you to structure and organize your applications following a logical aproach of operations.