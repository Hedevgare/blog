---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'How to Convert a String to Camel Case'
pubDate: 2025-07-06
updatedDate: 2025-07-06
description: 'Solve a "Codewars" challenge that involves converting strings from kebab-case or snake_case into camelCase. This post will walk you through the problem statement, outlines a structured approach, and presents a clean and efficient solution. Perfect for anyone practicing string manipulation or preparing for coding interviews.'
author: 'Edgar Moreira'
tags: ["Beginner", "Challenges", "Javascript"]
resources: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
---

String manipulation is an important skill in programming, often used in data parsing, formatting, and preparing values for further processing. In this coding problem, the task is to convert a string containing words separated by dashes (kebab-case) or underscores (snake case) into camel case. 

These naming conventions help keep code consistent and easier to read, making it more maintainable and future-proof. We'll be using *Javascript* to solve this problem.

---

Before diving into the full problem statement, it’s helpful to understand these naming conventions and how they differ.
Here's a quick breakdown:
* **snake_case** - words separated by underscores (`example_string`)
* **kebab-case** - words separated by dashes (`example-string`)
* **camelCase** - first word either lower or capitalized, following words all capitalized (`exampleString` or `ExampleString`)

## The problem

This challenge comes from [Codewars](https://www.codewars.com/kata/517abf86da9663f1d2000003).

> Complete the method/function so that it converts dash/underscore-delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal Case). The next words should be always capitalized.

This is the starting code:
```js title="index.js"
function toCamelCase(str) {

}
```

### Examples:
`kebabs-taste-Very-Good` gets converted to `kebabsTasteVeryGood`

`snakes_are_reptiles` gets converted to `snakesAreReptiles`

`The_Last-Example` gets converted to `TheLastExample`

## The plan
1. Break the string into a list of words based on the delimited `-` and `_`;
2. Keep the first word unchanged;
3. Capitalize the remaining words;
4. Join everything together into a string.

## The implementation

Start by using the `split` function to break the string into a list of words. The `split` function takes a `separator` parameter that defines where each split should occur.

Since there are two cases where a string can be separated (`-` and `_`), using a regular expression (regex) is a good choice to use as a `separator`.
The regex `/-|_/g` finds all dashes and underscores in the string.

```js title="index.js" ins={2-3}
function toCamelCase(str) {
    var result = str.split(/-|_/g);
    return result;
}
```

Now that the words are separated and stored in an `array`, we can iterate through it and start capitalizing each word. But first, we need to make sure that the first word maintains its original form.

```js title="index.js" ins={3-9}
function toCamelCase(str) {
    var result = str.split(/-|_/g);
    result = result.map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    return result;
}
```

We use the `map` iterative method to go through each word and capitalize it, but only if it's not the first word in the list; this is done by checking the `index` value.

The final step is to join all the words back into a single string.

```js title="index.js" ins={10}
function toCamelCase(str) {
    var result = str.split(/-|_/g);
    result = result.map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    result = result.join("");
    return result;
}
```

Running this code with the examples above will show that it successfully converts the strings into camelCase.

The problem is solved, but we can simplify the code further by rewriting the function as a concise one-liner, like this:

```js title="index.js" {2-6}
function toCamelCase(str) {
    return str.split(/-|_/)
        .map((word, index) => {
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join("");
}
```

Instead of storing the result in a variable and changing it step by step, we directly return the transformed string by chaining methods together. The `map` callback uses a ternary operator instead of a `if ... else` statement.

These changes make the code more concise and easier to read without changing its result.

## The recap
Let's recap what we've done:
* **Define the separator**: we defined the regex where the string would be splitted;
* **Split the string**: we split the string into an array of words;
* **Iterate each word**: we went over each word by using the `map` method;
* **Check and capitalize**: we checked if it wasn't the first word and capitalized its first letter;
* **Join back the words**: we used the `join` method to merge the array into a single string;
* **Return the string**: finally, we returned the string in a camel case form.

String manipulation is a classic coding exercise. This challenge is a great way to practice logic, string operations, and array transformations in a clean and practical way.