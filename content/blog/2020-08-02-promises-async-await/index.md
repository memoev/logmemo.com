---
slug: "/blog/2020-08-02-async-await"
date: "2020-08"
title: "Promises, Async & Await"
---

# INDEX 
1. Promises
2. Chaining (Promise Chaining)
3. Async/Await

### 1. PROMISES

- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

A Promise is an `object representing the eventual completion or failure of an asynchronous operation`. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a `promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.`

A `Promise` is in one of these states:

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation completed successfully.
- `rejected`: meaning that the operation failed.

### 2. CHAINING

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

Here's the magic: the then() function returns a new promise, different from the original:

```javascript
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```
or 
```javascript
const promise2 = doSomething().then(successCallback, failureCallback);
```

This second promise (promise2) represents the completion not just of doSomething(), but also of the successCallback or failureCallback you passed in, which can be other asynchronous functions returning a promise. When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.

Basically, each promise represents the completion of another asynchronous step in the chain.

In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain:

```javascript
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

The arguments to then are optional, and catch(failureCallback) is short for then(null, failureCallback). You might see this expressed with arrow functions instead:

```javascript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

`Chaining after a catch`:
It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain. Read the following example:

```javascript
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
```

This will output the following text:
- Initial
- Do that
- Do this, no matter what happened before
   - Note: The text Do this is not displayed because the Something failed error caused a rejection.

### 3. Async/Await 

- **Synchronous vs. Asyncronous**
  - When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.

    That being said, in the context of computers this translates into executing a process or task on another "thread." A thread is a series of commands (a block of code) that exists as a unit of work. The operating system can manage multiple threads and assign a thread a piece ("slice") of processor time before switching to another thread to give it a turn to do some work. At its core (pardon the pun), a processor can simply execute a command, it has no concept of doing two things at one time. The operating system simulates this by allocating slices of time to different threads.

    Now, if you introduce multiple cores/processors into the mix, then things CAN actually happen at the same time. The operating system can allocate time to one thread on the first processor, then allocate the same block of time to another thread on a different processor. All of this is about allowing the operating system to manage the completion of your task while you can go on in your code and do other things.

    Asynchronous programming is a complicated topic because of the semantics of how things tie together when you can do them at the same time. There are numerous articles and books on the subject; have a look!

  [Synchronous vs. Asychronous](https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean)

- **Async**

  There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

  - **Async functions**
  
    Let’s start with the async keyword. It can be placed before a function, like this:
    
    ```javascript
    async function f() {
      return 1;
    }
    ```
    
    The word `“async”` **before** a function means one simple thing: `a function always returns a promise.` Other values are wrapped in a resolved promise automatically.

    For instance, this function returns a resolved promise with the result of 1, let’s test it:

    ```javascript
    async function f() {
     return 1;
    }

    f().then(alert); // 1
    ```
    
    …We could explicitly return a promise, that would be the same:
  
    ```javascript
    async function f() {
      return Promise.resolve(1);
    }

    f().then(alert); // 1
    ```
    
    So, async ensures that the function returns a **promise** (see promises above), and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, `await`, that works only inside async functions, and it’s pretty cool.

- **Await**
    
  The syntax:

  ```javascript
  // works only inside async functions
  let value = await promise;
  ```
  
  **IMPORTANT**: The keyword `await` **MAKES** JavaScript `wait` **until that promise settles and returns its result.**

  Here’s an example with a promise that resolves in 1 second:

  ```javascript
  async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait till the promise resolves (*)

    alert(result); // "done!"
  }

  f();
   ```

  The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

  `Let’s emphasize:` **await literally makes JavaScript `wait` until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.**

  It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.

  - **Can’t use await in regular functions**
  
      If we try to use await in non-async function, there would be a syntax error:

      ```javascript
      function f() {
        let promise = Promise.resolve(1);
        let result = await promise; // Syntax error
      }
      ```

      We will get this error if we do not put async before a function. As said, await only works inside an async function.

      Let’s take the showAvatar() example from the chapter Promises chaining and rewrite it using async/await:

      We’ll need to replace .then calls with await.
      Also we should make the function async for them to work.

      ```javascript
       async function showAvatar() {

        // read our JSON
        let response = await fetch('/article/promise-chaining/user.json');
        let user = await response.json();

        // read github user
        let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
        let githubUser = await githubResponse.json();

        // show the avatar
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        // wait 3 seconds
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));

        img.remove();

        return githubUser;
      }

      showAvatar();
      ```

      Pretty clean and easy to read, right? Much better than before.

  - **await won’t work in the top-level code**
  
       People who are just starting to use await tend to forget the fact that we can’t use await in top-level code. For example, this will not work:

      ```javascript
       // syntax error in top-level code
      let response = await fetch('/article/promise-chaining/user.json');
      let user = await response.json();
      We can wrap it into an anonymous async function, like this:

       (async () => {
        let response = await fetch('/article/promise-chaining/user.json');
        let user = await response.json();
        ...
      })();
      ```

  - **await accepts “thenables”**

       Like promise.then, await allows to use thenable objects (those with a callable then method). The idea is that a 3rd-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use with await.

       Here’s a demo Thenable class, the await below accepts its instances:

       ```javascript
       class Thenable {
        constructor(num) {
          this.num = num;
        }
        then(resolve, reject) {
          alert(resolve);
          // resolve with this.num*2 after 1000ms
          setTimeout(() => resolve(this.num * 2), 1000); // (*)
        }
      };

      async function f() {
        // waits for 1 second, then result becomes 2
        let result = await new Thenable(1);
        alert(result);
      }

      f();
      ```

      If await gets a non-promise object with .then, it calls that method providing native functions resolve, reject as arguments. Then await waits until one of them is called (in the example above it happens in the line (*)) and then proceeds with the result.

  - **Async class methods**
  
      To declare an async class method, just prepend it with async:

      ```javascript
      class Waiter {
        async wait() {
          return await Promise.resolve(1);
        }
      }

      new Waiter()
        .wait()
        .then(alert); // 1
      ```

      The meaning is the same: it ensures that the returned value is a promise and enables await.

- [Async/Await](https://javascript.info/async-await)