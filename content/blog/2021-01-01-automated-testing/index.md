---
slug: "/blog/2021-01-01-automated-testing"
date: "2021-01"
title: "Automated testing"
---

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
![Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid/teaser.png)

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