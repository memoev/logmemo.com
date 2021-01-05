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

We should write all and any single one the applications we just detailed above, in order to ensure proper functionality of our applications, for this we can follow the test pyramid convention:
![Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid/title.png)