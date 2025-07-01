---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'How to Create a Function to Count Vowels in a String'
pubDate: 2025-06-01
updatedDate: 2025-06-01
description: 'This post guides you through creating a function to count the vowels in a string. It covers the logic and provides examples, making it suitable for both beginners and those looking to refresh their skills.'
author: 'Edgar Moreira'
tags: ["Algorithm", "Beginner", "Javascript"]
---

Counting characters in a string is a common task in programming that can be both educational and useful. In this tutorial, we'll be more specific and will walk through how to create a function to count the number of vowels in a given string. This guide is perfect for beginners and anyone looking to refresh their coding skills.

---

We'll start by identifying the problem. Our function will be receiving a string, count how many characters `a`, `e`, `i`, `o` and `u` are present and return that value. Seems easy, so let's get to work.

## The plan
1. Define a function that takes a string as an input parameter;
2. Initialize a counter variable that keeps track of the number of vowels;
3. Loop through the string and if a vowel is found, update the counter;
4. Return the count value.

## The implementation
I chose to use *Javascript* to solve this problem. You can use another language;; although the code will differ, the logic remains the same.

Begin by creating a *JavaScript* file. (I named mine `index.js` but you can name yours however you want.)
Then, let's start by step 1 of our plan; defining a function that takes a string as an input. Write the following code into your file.

```js title="index.js"
function countVowels(str) {

}
```

We can implement steps 2 and 4 at the same time, since both involve the counter variable. Initialize a variable called `counter` with a value of `0` and then return it.

```js title="index.js"
function countVowels(str) {
    let counter = 0;
    return counter;
}
```

Now we get to the best part, step 3.

First we'll identify the characters we want to find (in our case are the vowels `aeiou`) and assign them to a variable `vowels`. 
Then, since a string in *Javascript* is iterable, we can loop through each character in the input string and check if that character exists in `vowels`.

```js title="index.js" ins={3-6}
function countVowels(str) {
    let counter = 0;
    const vowels = "aeiou";
    for (let character of str) {
        if(vowels.includes(character)) counter++;
    }
    return counter;
}
```

The implemention of the function is almost complete; we just need to modify it for an edge case. What if the input string contains uppercase characters? The solution is simple: convert every character of the string to lowercase using the `toLowerCase` method. Update the following highlighted line.

```js title="index.js" {4}
function countVowels(str) {
    let counter = 0;
    const vowels = "aeiou";
    for (let character of str.toLowerCase()) {
        if(vowels.includes(character)) counter++;
    }
    return counter;
}
```

We are now ready to test our function. You can use different inputs to ensure it works as expected. Here are a few examples.

```js title="index.js" {"1.Add these lines at the end of the file":2-5}
// ... (previous code)

console.log(countVowels("hello world!")); // Output: 3
console.log(countVowels("Hedegare's Blog")); // Output: 5
console.log(countVowels("AEIOU are the vowels")); // Output: 10
```

## The recap
We got to the end of our post; let's recap everything we've done:
* **Define the function**: we defined a function called `countVowels` with a `str` parameter;
* **Initialize the counter**: we started with a vowel `counter` set to 0;
* **Define the vowels**: we defined a string containing all the vowels for easy comparison;
* **Convert to lowercase**: before iterating through the string, we converted it to lowercase to ensure uppercase characters are counted;
* **Iterate through the string**: we used a `for ... of` loop to iterate through each character in the string;
* **Check and count**: we checked if the character is a vowel by using the `includes` method and incremented the counter if it is;
* **Return count**: finally, we returned the value of the `counter`.