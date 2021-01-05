---
slug: "/blog/2021-01-01-automated-testing"
date: "2021-01"
title: "Automated testing"
---

#  Automated testing (Emphasis on Unit Testing)

We're starting by defining what automated testing is. Automated testing is the practice of writing code to test your code, and then run those tests in an automated fashion. Test automation can automate some repetitive but necessary tasks in a formalized testing process already in place, or perform additional testing that would be difficult to do manually.

### Benefits of AT (Automated Testing)
With automated test, our code consists on `Production code` and `Test code`. Our test code could automate the manual process of running our application, in some cases having to login, navigate and run different scenarios trying to find any bugs or non-wanted results from the functionality of our application. It can become really repetitive and time consuming. The more complex and big the application, time will grow exponentially. Automated testing can be run every time you run your code, commit your code, publish applications, on deploying applications, and with it you can run multiple tests in just a few seconds. Test your code frequently, in less time.

The begins benefit of AT (automated testing), is the capacity of catching bugs before deploying, which is becoming more the industry standard, since it allows you deploy your application with more confidence. It's important to clarify that with AT you will produce `bug-free` software, but you considerably reduce the posibility of unexpected bugs in your apps, and with this improve its quality.

## Types of tests
### Unit test
The concept of unit testing revolves on testing an application or part of an application without its `external` dependencies, such as files, databases, web services, etc. They are usually cheap to write and execute really fast, so you can run a lot of the in just a few seconds. There's a negative side to them, you can't get a LOT of confidence on the reliability of your application.

### Integration test
Integration testing does test code including `external dependencies`, such as files, databases, web services, etc. These type of tests take longer to execute since they often involve reading/writing to a database, but they give you more confidence on the reliability and health of your software. They are defined as a test that takes a few units or classes and tests they behaviour as a whole.

### End-to-end test
This basically drives an application through its UI. There's specific tools used to created E2E tests, such as [Selenium](https://www.selenium.dev/) and [Cypress](https://www.cypress.io/) among the most popular ones. Some of them allow us to record the interaction of a user with our application and check if the app is returning the right results or not. They have a few problems, they are usually REALLY slow. Another problem is that they are really brittle (breaks easily).

We should write all and any single one the applications we just detailed above in order to ensure proper functionality of our applications, for this we can follow the test pyramid convention:
![Test Pyramid](https://blogs.unity3d.com/wp-content/uploads/2014/05/pyramid-140x140-1400512554.png)

Most of your tests should be in the category of unit tests, because they are easy to write and execute quickly, but since they don't give a lot of reliability, you should also include integrations tests since they provide a lot of the advantages of E2E tests but without the complexity of dealing with user input. Lastly, you should write a few E2E to test the happy path of an application. This pyramid is just a guideline, is not a must of how to do things. Unit tests should be writen to test the logic for conditional statements and loops, calculations as well.

There's takeaways from the pyramid. First, favour unit tests over E2E tests, since they pin point specifics from the applications in a fast manner. Cover the unit tests gaps with integrations tests. And finally, use E2E tests sparingly.

## Code testing
You will need a testing framework to start creating automated tests for your application. Some examples for C# are `NUnit`, `MSTest` and `xUnit`. All these framneworks provide a library and a test runner that you can run to check results. It's important to distinguish we should not focus on the framework but on the fundamentals of testing, since that's what really matters.

FINALLY, here's an example of a unit test writen for C#, using the Visual Studio IDE and the MSTest framework built in to VS 2019. Lets imagine a simple application that records reservations for a restaurant:

```csharp
namespace Table.Fundamentals
{
    public class Reservation
    {
        public User MadeBy { get; set; }

        public bool CanBeCancelledBy(User user)
        {
            return (user.IsAdmin || MadeBy == user);
        }
    }

    public class User
    {
        public bool IsAdmin { get; set; }
    }
}
```

So to be able to test the `CanBeCancelledBy(User user)` method written above, we will test three different scenarios or `execution paths` to our given code. One scenario would be checking if the user is an admin, if the reservation was `MadeBy` the current user or if the if someone else tries to cancel the reservation.  you would write the following:

```csharp
using System;
using Table.Fundamentals;
using NUnit.Framework;

namespace Table.UnitTests
{
    [TestClass]
    public class ReservationTests
    {
        [TestMethod]
        public void CanBeCancelledBy_AdminCancelling__ReturnsTrue()
        {
            // Arrange
            var reservation = new Reservation();
            // Act
            var result = reservation.CanBeCancelledBy(new User { IsAdmin = true });
            // Assert
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CanBeCancelledBy_CameUserCancelling_ReturnsTrue()
        {
        	// Arrange
            var user = new User();
            var reservation = new Reservation { MadeBy = user };
            // Act
            var result = reservation.CanBeCancelledBy(user);
            // Assert
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CanBeCancelledBy_AnotherUserCancelling_ReturnsFalse()
        {
        	// Arrange
            var reservation = new Reservation { MadeBy = new User() };
            // Act
            var result = reservation.CanBeCancelledBy(new User());
            // Assert
            Assert.IsTrue(result);
        }
    }
}
```
Some syntax/convention on writting test methods is the following:
```csharp
public void [NameOfTheMethod]_[Scenario]_[ExpectedBahaviour]
```
Inside of every test methods, we have three parts:
- Arrange: This is were we initialize our objects, we prepare the objects we want to test.
- Act: This part is were we act on the object initialized, so we basically call the method.
- Assert: In this part we verify that the result of the act part is correct. There's helper classes that frameworks provide to check this. In the example above we are using `Assert`.

To run the test, we need to follow the process provided by our prefered IDE. If you're using VS 2019, there's options you can select if you navigate to the `Test` button at the top of the solution, were you can either select `Run All Tests`, `Debug All Tests`, `Repeat Last Run`, etc; or even configure your testing environment. This will activate the `Test Explorer` window to either the left or right of your VS 2019. On a real case application, this window will be populated with all the tests you have written for the given solution.

### NUnit
[NUnit](https://nunit.org/) is not built in to Visual Studio 2019, so you will need to install a couple of packages to get it ready to run.

There's a couple of things that change when using `NUnit`, and that's property names and Assertions. You would need to switch `[TestClass]` to `[TestFixture]`, `[TestMethod]` to `[Test]` and `Assert.IsTrue(result)` to `Assert.That(result == true)`.

## TDD (Test Driven Development)
When talking about AT, a combnination of words that you start to hear often is `Test Driven Development`, also called `Test First`, which is an approch of writting test code before writting the application or production code. The way to do this is by writting a failing test, then you would write the simplest code to make the test pass (SIMPLE KISS), then refactor your code if necessary. These 3 steps are the foundation of TDD.

The benfits of this is that your code will be tesable from the get go, then any line of your production code is full covered by test, and lastly, you will achive a simpler imprementation. You will need specific and well written requirements. The name comes from development being driven by test. TDD can be more promesing because of the benefits, but in some cases this could make things a bit more complicated. In simple terms, test cases for each functionality are created and tested first and if the test fails then the new code is written in order to pass the test and making code simple and bug-free.

## Fundamentals of Unit Testing

### Characteristics of Unit Testing
Unit tests are really important within your solution and they're considered first class citizens, so they are as, if not even more important that production code, and that means you need to apply the same characteristics when writting them (best practices). They should be clean, readable and maintainable. Unit tests should have a single responsability and idially should be 10 lines long. Also, they should not have any logic (no conditionals or loops), you should simply call a method and make an assertion. Also, unit tests should be isolated and not called each other. Lastly, unit tests should not be too specific or too general.

### What to test and what not to test
If your code is clean or properly structure, you should know what to test, you should always test the outcome or output of a method. With your methods or functions, you can either query or command.

#### Query Functions
Query functions return some value based on possibly multiple executions paths. If this is the case you need to test all executions paths.

#### Command Functions
A command method will perform an action, this often involves changing the state of an object in memory and/or updating a db or calling a web service or sending a message to a msg queue. They are making a change in the system. To test this method, you should test the outcome of this method, if you change an object, you need to test that the object is outputted in the right state.

You should not test language features, 3rd-party code like other frameworks.

## Naming and Organising Tests
For each project on your solution you'll have a unit testing project. If you have a project called `Table`, you should have another project called `Table.UnitTests`. We will want to separate unit tests and integration tests because of how time differs for each. In projects you should have a test class per class in your solution. So if you have a class called `Reservation`, you need a `ReservationTests` class, it's plural to indicate that the class has multiple tests. For each method in the `Reservation` class, you should have one or more test methods. This is a quick rule of tumb to figure how many tests you need:
```
Number of Tests >= Number of Execution Paths
```

The name of your tests should clearly specify the business rule you're testing:
```
[MethodName]_[Scenario]_[ExpectedBehaviour]
```
It's important to know that if you have the same name for a method below different classes, you can prefix the `[MethodName]` with the name of the class that it references too:
```
[ClassName]_[MethodName]_[Scenario]_[ExpectedBehaviour]
```

## Examples
Here's more examples with unti tests for simple methods within a math project:

### Solution code
```csharp
using System.Collections.Generic;

namespace Math.Fundamentals
{
    public class Math
    {
        public int Add(int a, int b)
        { 
            return a + b;
        }
        
        public int Max(int a, int b)
        {
            return (a > b) ? a : b;
        }

        public IEnumerable<int> GetOddNumbers(int limit)
        {
            for (var i = 0; i <= limit; i++)
                if (i % 2 != 0)
                    yield return i; 
        }
    }
}
```

### Unit test code
```csharp
using Math.Fundamentals;
using NUnit.Framework;
using System.Linq;

namespace TestNinja.UnitTests
{
    [TestFixture]
    class MathTests
    {
        private Math _math;
        // SetUp
        [SetUp]
        public void SetUp()
        {
            _math = new Math();
        }


        [Test]
        public void Add_WhenCalled_ReturnTheSumOfArguments()
        {
            var result = _math.Add(1, 2);

            Assert.That(result, Is.EqualTo(3));
        }

        [Test]
        [TestCase(2, 1, 2)]
        [TestCase(1, 2, 2)]
        [TestCase(1, 1, 1)]
        public void Max_FirstArgumentIsGreater_ReturnTheGreaterArgument(int a, int b, int expectedResult)
        {
            var result = _math.Max(a, b);

            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GetOddNumbers_LimitIsGreaterThanZero_ReturnOddNumbersUpToLimit()
        {
            var result = _math.GetOddNumbers(5);

            //Assert.That(result, Is.Not.Empty);
            //Assert.That(result.Count(), Is.EqualTo(3));

            //Assert.That(result, Does.Contain(1));
            //Assert.That(result, Does.Contain(3));
            //Assert.That(result, Does.Contain(5));

            Assert.That(result, Is.EquivalentTo(new[] {1, 3, 5}));

            //Assert.That(result, Is.Ordered);
            //Assert.That(result, Is.Unique);
        }
    }
}
```

There's a couple of differences in this last piece of testing code, there's a couple of new things that are related to using `NUnit`. The first one we can see if using the `[SetUp]` attribute, which reduces how many times we create a `Math()` instance, if we do this we just set it up once and we can re-use it within all our test, each `math` varible is a new brand initialization of itself.

The other difference for this is the use of the `[TestCase(...)]` attribute. This is called parameterized tests, which allows you to use parameters instead of writting a lot of tests that look alike (just like functions). So we can go from something like this (this is something really specific for a function like Max()):
```csharp
[Test]
public void Max_FirstArgumentIsGreater_ReturnTheFirstArgument()
{
	var result = _math.Max(2, 1);
    
    Assert.That(result, Is.EqualTo(2));
}

[Test]
public void Max_SecondArgumentIsGreater_ReturnTheSecondArgument()
{
	var result = _math.Max(1, 2);
    
    Assert.That(result, Is.EqualTo(2));
}

[Test]
public void Max_SameArguments_ReturnTheSameArgument()
{
	var result = _math.Max(1, 2);
    
    Assert.That(result, Is.EqualTo(2));
}
```
Into something like this, by using parameters within the test:
```csharp
[Test]
[TestCase(2, 1, 2)]
[TestCase(1, 2, 2)]
[TestCase(1, 1, 1)]
public void Max_FirstArgumentIsGreater_ReturnTheGreaterArgument(int a, int b, int expectedResult)
{
	var result = _math.Max(a, b);

	Assert.That(result, Is.EqualTo(expectedResult));
}
```

## Conclusion
I would consider AT necessary given the great benefits it brings to software development as a whole. It helps making the code base healthy as it relieves the task of writting and deploying code. Code becomes trustworthy if testing is implemented right, proof comes from a lot of dev teams incorporating TDD into their standards and guidelines, making applications more secure reliable. There's no perfect code, testing helps to mitigate and lower the possibility of bugs in our systems, but it does NOT produce flawless code, it's another tool we, developers, have under our belt and should use it pragmatically.