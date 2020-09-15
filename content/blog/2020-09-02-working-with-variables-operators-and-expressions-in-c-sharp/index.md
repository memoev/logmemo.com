---
slug: "/blog/2020-09-02-working-with-variables-operators-and-expressions-in-c-sharp"
date: "2020-09"
title: "Working with Variables, Operators, and Expressions in C#"
---

# INDEX
- Understanding statements, identifiers and keywords
- Variables
- Primitive data types
- Operators

## Understanding statements, identifiers and keywords
### Statements
A `statement` is a command that performs and action, such as calculating a value and storing a result or displaying a message to a user. You combine statements to create methods. Statements in C# follow a rules describing their format and construction, also known as `syntax`. Meanwhile, the specification of what a statement does is known as `semantics`. For example, in contrast with Javascript, which is a more permissive programming language, you don't have to worry so much about ending your statements with a semicolon (;), since the compiler adds them asumming you forgot to. But in C#, if there's a statement with out semicolon, you'll get a compiling error.

```c-sharp
Console.WriteLine("Hello, World!"); // C# syntax
```

### Identifiers
`Identifiers` are the names that you use to identify the elements in your programs, such as `namespaces`, classes, methods and variables. There's two main rules when selecting identifiers:
- Only use letters (uppercase and lowercase), digits, and underscore characters.
- Identifiers MUST start with a letter or underscore.
Something to take into consideration is that C# is a case-sensitive language: `thisIdentifier` is different than `ThisIdentifier`.

```c-sharp
namespace TestHello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("I love programming :)");
        }
    }
}
```
In the example above, `TestHello`, `Program` and `Main` are consider identifiers.

### Keywords
There's 77 identifiers that the C# programming language reserves for its own use and you cannot reuse these for your own purposes, they're called `keywords`. Here you can find the full list of keywords:
- [C# Keywords](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords).

## Variables
A `variable` is a storage location that holds a value, just like a box in the computer's memory that holds some specific information. You use a variable's name to later refer to the value it holds. A good practice in any programming language is to adopt a naming convention that helps to avoid confusion and can reduce the scope for bugs. You should avoid differentiating variables just by camel case. Here's a list of rule-of-thumb guidelines to follow when it comes to choose variable names:
- Don't create identifiers that differ only by case.
- Start the name with a lowercase letter.
- Use `camelCase` notation.
- Avoid Hungarian notation.

Variables can hold many different types of values, in C# you must specify the type of data it will store. You declare the type and name of a variable in declaration statements.
```c-sharp
int age;
age = 21;
```
In the last example, we first declare what the date type of the variable, in this case we use the primitive data type `int` which denotes a integer. Then we assign the value of the variable, which in this case is 42. To assign the value, you use the `equals` sign (=) and is known as the `assignment operator`.

## Primitive data types

Common types such as numeric, strings, character and boolean values, are collectively know as the `primitive data types`. 
- [C# Primitive Data Types](https://condor.depaul.edu/sjost/nwdp/notes/cs1/CSDatatypes.htm).



## Operators
