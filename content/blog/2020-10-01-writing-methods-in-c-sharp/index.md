---
slug: "/blog/2020-10-01-writing-methods-in-c-sharp"
date: "2020-10"
title: "Writing Methods in C#"
---

# INDEX
- Declaring methods and passing parameters
- Returning information from a method
- Calling methods
- Conclusion

## Declaring methods and passing parameters
A `method` is a named sequence of statements, it has a name and a body. Following best programming practices, methods should have a meaningful name that indicates the overall purpose of the method. The body contains the actual statements that the method will run upon being called. Additionally, methods can be given some data (parameters) for processing and can return information, which is usually the result of processing the statements. It looks like:
```c-sharp
returnType methodName ( someParameterList )
{
	// method body goes here (statements)
}
```
The method's body lives within the curly brackets, or braces, and it contains all statements (lines of code) that will be executed when it gets called. It's important to make emphasis that all methods should be written inside of a class; otherwise, the code will not compile.

When a method does not return a value, and it's used just for processing purposes, it should be preceded by the `void` keyword:
```c-sharp
void showAnswer(int answer)
{
	// ...
}
```

## Returning data from a method
If we want to return some information from calling a method (in other words, if the return type is not `void`), we must include a `return` statement which is **usually** at the end of the method's body, after all the statements we want executed, followed by the expression that specifies the returned value and a semicolon. The type of the expression mut be the same as the type specified by the method declaration:
```c-sharp
int addValues(int firstInteger, int secondInteger)
{
	return firstInteger + secondInteger;
}
```
The `return` keyword causes the method to finish, and control results to the statement that called the method. Any statements that occur after the `return` statement are not executed. If you want your method to finish, eventhough it wont return any value, you can use a variation of the `return` statement and place it followed immediately with a semicolon.
```c-sharp
void showAnswer (int answer)
{
	Console.WriteLine($"The answer is {answer}");
    return;
}
```

## Calling methods
The main reason to create methods, is to called them! You call a method by name to ask it to perform its job/task. If a method requires parameters, we must supply the information requested for it to work. If a method return information, you should arrange to capture this information somehow, usually into a variable.
```c-sharp
int firstNumber = 10;
int secondNumber = 11;
int result = sumValues(firstNumber, secondNumber); // The result of the method is stored into the result variable.
showAnswer(result);
```

### Using expression-bodied methods
Some methods can be very simple, performin a single task or returning the results of a calculation without involving any additional logic. C# presents a simplified form for methods that involve using a single expression. Here some examples:
```c-sharp
int sumValues(int firstNumber, int secondNumber) => firstNumber + secondNumber;
void showAnswer(int answer) => Console.WriteLine($"The answer is {answer}");
```
The main differences are the use of the `=>` operator and the absence of the `statement` and curly braces.

### Returning multiple values from a method
There may be occasions when you want to `return` more than one value from a method. You can achive this by returning a `tuple`. A `tuple` is a small collection of values (literaly a tuple contains two values, but C# tuples can comprise bigger sets than this). We indicate that a method returns a `tuple` by specfiying a lest if types as part of the method definition; one type for each value that's going to be returned. To ilustrate this:
```c-sharp
(int, int) returnTuple( ... )
{
	int numberOne;
    int numberTwo;
    ... // Calculate values for both variables
    return(numberOne, numberTwo);
}
```
This way you can assign the returned information from this method into a set of integers like this:
```c-sharp
int value1, value2;
(value1, value2) = returnTuple(...)
```

## Conclusion
Working with methods is one of the most important, if not the most important, tasks when defining an application in all programming languages. Is where the logic behing your program lives and adds functionality to triggering actions, like inputing information, pressing a key on your keyboard, clicking a button, etc. Understanding the nuances behind them plays an important role matching the output you want to get with the output you're really going to get. C# provides syntax which helps us, as programmers, to match those scenarios as one, by declaring your returns and declaring the data type of our variables, which is extremely useful.