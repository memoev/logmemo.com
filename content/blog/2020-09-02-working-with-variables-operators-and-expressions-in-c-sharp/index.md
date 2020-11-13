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
- Implicitly Typed Local Variables

## Understanding statements, identifiers and keywords
### Statements
A `statement` is a command that performs and action, such as calculating a value and storing a result or displaying a message to a user. You combine statements to create methods. Statements in C# follow a rules describing their format and construction, also known as `syntax`. Meanwhile, the specification of what a statement does is known as `semantics`. For example, in contrast with Javascript, which is a more permissive programming language, you don't have to worry so much about ending your statements with a semicolon (;), since the compiler adds them asumming you forgot to. But in C#, if there's a statement with out semicolon, you'll get a compiling error.

```csharp
Console.WriteLine("Hello, World!"); // C# syntax
```

### Identifiers
`Identifiers` are the names that you use to identify the elements in your programs, such as `namespaces`, classes, methods and variables. There's two main rules when selecting identifiers:
- Only use letters (uppercase and lowercase), digits, and underscore characters.
- Identifiers MUST start with a letter or underscore.
Something to take into consideration is that C# is a case-sensitive language: `thisIdentifier` is different than `ThisIdentifier`.

```csharp
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
```csharp
int age;
age = 21;
```
In the last example, we first declare what the date type of the variable, in this case we use the primitive data type `int` which denotes a integer. Then we assign the value of the variable, which in this case is 42. To assign the value, you use the `equals` sign (=) and is known as the `assignment operator`.

## Primitive data types

Common types such as numeric, strings, character and boolean values, are collectively know as the `primitive data types`. 
- [C# Primitive Data Types](https://condor.depaul.edu/sjost/nwdp/notes/cs1/CSDatatypes.htm).

## Operators

### Arithmetic Operators
C# supports the regular arithmetic operations we all learn throughout childhood. The symbols `+, -, *, /` are called operators because they "operate" on values creating new ones. It's important to clarify that not all operators apply to all data types. The arithmetic operators can't be used on, for example, `string` types or `booleans`. However, you can use the `+` operator to concatenate string values, for example:
```c-sharp
Console.WriteLine("43" + "1"); // This will output 431, not 44!
```
Soemthing to take into consideration is that the result of arithmetic operations depends on the type of the operands used. For example, the value of the expressions `5.0/2.5` is 2.5; the type of both operands is double, so the ttype of result is also double (Remember that in C#, literal numbbers with decimal points are always double, not float, to maintain as much accuracy as possible). Another trick in C# is the representation of `Infinity` just for float and double data types, which can be represented as 5.0/0.0. Also NaN (Not a Number), which cas appear by paradoxes such as 0.0/0.0.

Another less-familiar arithmetic operator is the `remainder`, or `modulus`, operator, which is represented by the percent sign (%). The best way to describe its purpose is: the result of x % y is the integer remainder after dividing the integer value x by the integer value y.

### Assignment Operator
The equal sign (=) is the assignment operator. The operand on the right side is evaluated and then stored in the operand on the left side. The value of the assignment operator is the value that is assigned to the left of the operand.
```csharp
int myInteger;
myInteger = 10; // value of assignment expression is 10.
```

### Precendence and Associativity
In C#, the multiplicative operators `(/, *, and %)` have `precendence` over the additive operators `(+ and -)`, so in expressions such as 2 + 3 * 4, the multiplication is performed first, followed by the addition.
```csharp
2 + 3 * 4 // This will output 14, not 20.
```
But what happends when an expression contains different operators with the same precendence? `Associativity` comes into play, which determines if an expression is calculated from left to right or from right to left. Arithmetic operators are left associative and the assignment operator (=) is right associative.

### Unary operators
C# provides operators with the only task of adding or substracting 1 to a variable (++ and --). This operators are unary, which means that they take only one single operand. They share the same precendence and are both left associative. They are also unusual in that you can place them either before or after the variable:
```csharp
count++; // postfix increment
++count; //prefix increment
count--; // postfix decrement
--count; // prefix decrement
```
The benefits of this is seen when evaluating operations. The value returned by count++ is the value of count before the increment takes place, whereas the value returned by ++count is the value of count after the increment takes place. For example:
```csharp
int x;
x = 42;

Console.WriteLine(x++); // Returns 42, not 43.
Console.WriteLine(++x); // Returns 43.
```

## Implicitly Typed Local Variables
Before ending this, I would like to introduce `Implicitly Typed Local Variables`, which are represented by using the `var` keyword when declaring/assigning a variable:
```csharp
var myVariable = 99; // Type of int number
var myOtherVariable = "Hello"; // Type of string
```
By doing this you are asking the C# compiler to infer the type of a variable from an expression and use this type when declaring the variable. This causes myVariable to only be able to take int data types. you should also understand that you can only use the `var` keyword when programming full declarations, so it's purpose its just for convenience.