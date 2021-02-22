---
slug: "/blog/2021-02-01-automated-testing-with-decoupled-external-resources"
date: "2021-02"
title: "Automated testing with Decoupled External Resources"
---

## Loosely-coupled Design (Dependency Injection)
In `Loosely-coupled design` you can replace one object with another at run-time. When you are testing a Class that talks to an external resource, you can replace that object with a fake object, we call that a `test double`. There's three steps you need to follow:
- Extract the code that uses an external resource into a separate class and isolate it from the rest of your code.
- Extract an `Interface` from that class. An interface is like a contract, it simple declares a bunch of methods and properties, but none of these have an implementation, none of the methods have code. An interface simply tells the C# compiler that somewhere there are *probably* one or more classes that implement the members declared in the interface. You could have two different classes that implement that interface:
    - One can be the real implementation that uses an external resource.
    - Another one that can be the fake one which we call the test double.
- We modify the class under the test to talk to the "fake" interface instead of one of the concrete implementations. So instead of being dependent on a specific implementation, it will be dependent only on the interface or the contract.
Following the 3 steps above, our class becomes loosely-coupled and testable.

It could look something like this and is an example as well of `DEPENDENCY INJECTION`:
```csharp
// Using FileListener Implementation
public void MyMethod()
{
    var listener = new FileListener();
    listener.listen();
}

// Using IFileListener Interface/Contract
public void MyMethod(IFileListener listener) 
{
    // var listener = new FileListener();
    listener.listen();
}
```

Now we're going to explain all the steps stated above using an example. Asume the following file structure:
```
/
|-- /TestingStuff
    |-- /MockingTestingStuff
        |-- /AudioService.cs
|-- /TestingStuff.UnitTesting
    |-- /References
    |-- /Properties
    |-- 
```
Let's look into the `AudioService.cs` class:
```csharp
namespace TestingStuff.MockingTestingStuff
{
    public class AudioService
    {
        public string ListenAudioTitle()
        {
            var str = File.ListenAllAudio("audio.txt");
            var audio = JsonConvert.DeserializeObject<Audio>(str);
            if (audio == null)
                return "Error parsing audio";
            return audio.Title;
        }
    }

    public class Audio
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsProcessed { get; set; }
    }
}
```
In this file, we get the content of the audio file and store it into a string variable called `str`, then we give it to the `JsonConvert` object to deserialize the string as a json object. All we're doing here is passing a string and converting it into an actual audio object. The audio object is defined below the method with its corresponding properties (`Id`, `Title` and `IsProcessed`). As part of converting the string into an audio object, we double check if the string is in the right format, in this case, we are not going ot get a proper audio object, we would get `null` and we would simple return a string saying `"Error parsing audio"`, if this is not hit, we would return the title of the audio (`return audio.Title`).

In the first part of the file we're touching an external resource (`File.ListenAllAudio("audio.txt")`), in this case a file system, so we want to reformat this in a way we make this code decoupled and testable. We must first move all the code into a separate class and isolate it from the rest of the code. So in this case, we need to move the external resource into a separate class. Within the `MockingTestingStuff` we create a class called `FileListener.cs`:
```
/
|-- /TestingStuff
    |-- /MockingTestingStuff
        |-- /AudioService.cs
        |-- /FileListener.cs <----
|-- /TestingStuff.UnitTesting
    |-- /References
    |-- /Properties
    |-- 
```

Here we will need just the method that we want to work with. With this the code that touches an external resource is encapsulated and isolated inside this FileListener, **which is the first step**:
```csharp
using System.IO; // For the File class

namespace TestingStuff.MockingTestingStuff
{
    public class FileListener
    {
        public string Listen(string path)
        {
            return File.ListenAllAudio(path);
        }
    }
}
```
Within the `AudioService.cs`, we would change that line of code like this. We wont change the logic of our application, we have simple restructured or refactored our code:
```csharp
// var str = File.ListenAllAudio("audio.txt");
var string = new FileListener().Listen("audio.txt");
```
Now in this implementation, the `AudioService` class is tightly coupled to the FileListener, because we're newing up an instance of FileListener. We can't replace this with a fake object or a test, we would need to implement an `Interface` or contract to make this testable. We can create the interface within the `FileListener.cs` file, this doesn't have to be exclusively like that, we could create an interface class file separately and even move it to another, namespace or even assembly, this would look like this:
```csharp
using System.IO; // For the File class

namespace TestingStuff.MockingTestingStuff
{
    public interface IFileListener
    {
        string Listen(string path);
    }

    public class FileListener : IFileListener
    {
        public string Listen(string path)
        {
            return File.ListenAllAudio(path);
        }
    }
}
```
Is important to mention that members declared within an interface don't have an access modifier like `public` or `private`, because an interface defines a contract. So when a class implements an interface, it's going to define all the members declared in an interface, as *public* members. To extract the actual interface we pass a column and the name of the interface next to the class `FileListener : IFileListener`. Adding an `I` before the name of the interface is a `.net` convention.

We can now create a fake implementation which we can use within our unit tests. For this we create a new class `FakeFileListener.cs`. This is a fake implementation and we can use this in our testing solution, it's also important to notice that this was defined outside of production code but within the `TestingStuff.UnitTesting` solution:
```
/
|-- /TestingStuff
    |-- /MockingTestingStuff
        |-- /AudioService.cs
        |-- /FileListener.cs
|-- /TestingStuff.UnitTesting
    |-- /References
    |-- /Properties
    |-- FakeFileListener.cs <----
```
And it would look like this:
```csharp
using TestingStuff.MockingTestingStuff;

namespace TestingStuff.UnitTesting
{
    public class FakeFileListener : IFileListener
    {
        public string Listen(string path)
        {
            return "";
        }
    }
}
```

A quick recap of what we have done. In `AudioService.cs` we extracted the first line from the `ListenAudioTitle()` method into a separate class called `FileListener.cs` and we also extracted an interface from this class called `IFileListener`, and finally we created another implementation of this interface called `FakeFileListener.cs` for testing purposes. Now we're just missing the last and final step to make our code loosely-coupled and testable, we're just missing to refactor our code to talk to an interface instead of talking to the `FileListener` concrete implementations.

### Dependency Injection
There's three ways to use dependency injection, this can be achived by passing parameters, properties or creating constructors. In this part we're going to be focusing on passing parameters. For purposes of the example above, this would look like this:
```csharp
public string ListenAudioTitle(IFileListener fileListener)
{
    var str = fileListener.Read("audio.txt");
    var audio = JsonConvert.DeserializeObject<Audio>(str);
    if (audio == null)
        return "Error parsing audio";
    return audio.Title; 
}
```
With this simple change, our audio service class becomes `loosely-coupled` and is not unit testable. Because of the parameter, we are able to pass a real `FileListener` object, or a fake one.

A test for this scenario would look something like this:
```csharp
using NUnit.Framework;
using TestingStuff.MockingTestingStuff;

namespace TestingStuff.UnitTesting
{
    [TestFixture]
    public class AudioServiceTests
    {
        [Test]
        public void ListenAudioTitle_EmptyFile_ReturnsError()
        {
            //Arrange
            var service = new AudioService();

            //Act
            var result = service.ListenAudioTitle(new FakeFileListener());

            //Assert
            Assert.That(result, Does.Contain("error").IgnoreCase);
        }
    }
}
```