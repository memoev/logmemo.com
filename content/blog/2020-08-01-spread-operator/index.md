---
slug: "/blog/2020-08-01-spread-operator"
date: "2020-08"
title: "The Spread Operator"
---

### 1. Intro to spread operator

### 2. Example

```javascript
setImageAttributes( index, attributes ) {
  const { attributes: { images }, setAttributes } = this.props;
  if ( !images[index] ) {
    return;
  }
  setAttributes( {
    images: [
      ...images.slice( 0, index ),
      {
        ...images[ index ],
        ...attributes,
      },
      ...images.slice( index + 1 ),
    ],
  } );
}
```

### 3. Spread Operators for Arrays

The core piece to know is the `...` syntax. `This is the spread operator`, and it essentially takes either an array or an object and expands it into its set of items. This lets you do fancy things, so for example if you have the code:

```javascript
const array = [1, 2];
const array2 = [...array, 3, 4];
```

The value of array2 will end up being `[1, 2, 3, 4]`.

### The spread operator lets you essentially drop an array in and get its values.

Coming back to our original code example, at the outer level what we have is...

```javascript
images = [...images.slice(0, index), {some stuff}, ...images.slice(index+1)]
```

What this is saying is: set the images array to be the old images array from 0 to index, followed by a new thing that we'll cover shortly, followed by the old images array from index+1 to the end.

In other words, we're going to replace the item at index.

### 4. Spread Operators for Objects

Next, for objects that spread syntax lets you do the equivalent of Object.assign, `copying the values of an object into a new one`. Looking at a simple code example:

```javascript
const obj1 = {a: 'a', b: 'b'};
const obj2 = {c: 'c', ...obj1};
```

This results in obj2 being `{a: 'a', b: 'b', c: 'c'}`.

Looking back to the code example, the inner level , (labeled {some stuff} in our assessment of the array), we have:

```javascript
{
  ...images[ index ],
  ...attributes,
}
```

To translate: create an object, populate it first with the values from images[index], and then with the values from attributes. Any duplicate values get overwritten by the later one.

So this is saying: take my old image from index, and apply any values I have in attributes to it, with values in attributes taking precedence.

If we come back to our entire code example:

```javascript
images: [
    ...images.slice( 0, index ),
    {
        ...images[ index ],
        ...attributes,
    },
    ...images.slice( index + 1 ),
],
```

The whole big fancy thing is saying: I have an images array, an index, and a set of attributes I want to apply. Return a new images array that changes the item at index to have my new attributes.

### 5. Conclusion - Spread Syntax Enables Compact and Expressive Code

Let's look at what we've accomplished. In one short, hopefully now readable statement we've managed to create a new copy of an array that has an updated, complex object at a particular index. We have not modified the original array, meaning other parts of our code can call this without fear of side effects. Beautiful.

### 6. Resources

[Understanding the Spread Operator in JavaScript](https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html)