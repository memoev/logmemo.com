---
slug: "/blog/2021-02-02-clean-code"
date: "2021-02"
title: "Clean Code"
---

## Clean Code Principles

### Right tool for the job
Every technology has its place. Developers who've become too fixated on a given tool, pattern, or paradigm are cursed to misuse it. It's common to hard fit solutions into some of our problems, expecting a compliment of how good of a problem solver you might be by using unexpected tool as a work around, like the handle of a big enough screwdriver as a hammer, but we might be sacrificing how optimal a technique might be. One tech example could be using Regex to validate an email? Not easy.

#### Watch for Boundaries
When selecting tools, the risk for picking the wrong tool for the job exists at the boundaries. Let's consider a common stack of technologies for building a web application today:
- HTML
- CSS
- Javascript
- C#
- SQL
Each tool has a specific purpose. HTML provides semantic markup for our content. CSS separates our styling form  our markup. Javascript provides behavior. The server-side language that we choose, like C#, manages the  business logic. Finally, SQL is useful for relational database data access and manipulation.

It's the boundaries and interactions between these technologies what get people in trouble. For example:
- It might be tempting to put HTML in a Javascript string so that you can dynamically inject HTML onto a page. But all markup should ideally be written as HTML. JS is the wrong tool for storing markup.
- It might be tempting to put JS directly in our HTML. This mixes concerns by injecting behavior directly into your markup and it eliminates the opportunity for caching and reuse.
- Another example: Generally relational databases should contain raw normalized data so that it can be leveraged for a variety of purposes. Besides, storing HTML in the db or injecting HTML and query results as strings can be problematic. It binds the presentation and data storage together, which makes reuse really difficult.
- Another example is mixing HTML and CSS inline styling, this eliminated the opportunity for caching and reuse of CSS.
- It's easy to create highly dynamic SQL in a server-side language like C# using strings to generate SQL statements. But stored procedures and ORMs often provide a safer and more elegant approach to generating dynamic SQL. 
- Using a server-side language, like C#, to generate dynamic JavaScript. In most cases, JS can be in a .js file, and JSON can be return from the server to provide dynamism.

#### Stay Native
By staying native our code is cached and downloaded into the browser, so our files don't need to be requested  again because they already exist within our resources. IDEs help a lot when your typing language that matches the file format, so we have syntax check. We count on a healthy separation of concerns and makes our code  reusable. We don't need to deal with string parsing on every single request. Another overlooked benefit is being able to minifying some files, like JS.

#### Bottom line
- Avoid using one language to write another language/format via strings.
- Leverage libraries to generate such formats.
- Strive for ONE language per file.

### High signal to noise ratio
Maximize the signal to noise ratio, for example in music, if there's to much noise it becomes really hard to understand the lyrics, the whole experience becomes less enjoyable and more taxing. In the same way, code with a high signal to noise ratio is easier to understand.

We will define signal as any logic that follows the TED RULE:
- Terse, code should not be excessively wordy.
- Expressive, it's clear what the code is trying to do.
- Does one thing, it should have a clear responsibility and it should do that thing well.

Noise could be: high cyclomatic complexity, excessive indentation, zombie code, unnecessary comments, poorly named structures, huge classes, long methods, repetition, no whitespaces, overly verbose.

When we read code our brain is the compiler. There's a rule of thumbs, wcich describes the "Rule of 7":
- Number of parameters per method
- Number of methods in a class
- Number of variables currently in scope
If something is bigger than that, we should look for a way to break it down into bite size pieces that we can actually hold in our head. Signal naturally decays over time, and noise gradually grows over time, so we should regularly refactor or maintain our code to avoid creating a huge mess that needs to be replaced.

#### DRY Principle
Another worth mentioning principle as a sub-section of this part is DRY (Don't Repeat Yourself). Clean code honors the DRY principle by static a piece of knowledge or logic once and only once, this is the same as the principle of DB normalization, ensuring each piece of data is defined in a single place. This assures that the db operates efficiently and consistently, easing maintenance. Copy and paste is often a sign of a design problem and it can be easily eliminated by creating a reusable function or adding a parameter to an existing function to make it more flexible, like overloads.

### Self-documenting code
Good programming style avoid the need of comments. Programming style as documentation is all about writing code in such an expressive and clear style that the author's intent is obvious, so obvious that new people reading can easily navigate the code to get up to speed.

Self-documenting code strives to do four core things:
- Express intent clearly, so that readers understand exactly what we're trying to accomplish.
- Layers of abstraction should be used so that the problem domain can be considered and walked through at different levels of detail.
- Formatting in a friendly and consistent manner will optimize the reading experience.
- Favoring code over comments will asure that the code is as expressive as it can be without relying on comments to explain away unnecessary ambiguity.

Self-documenting code can reduce and ideally eliminate the need for out-of-band documentation by clearly expressing desired behaviour within the code instead.
