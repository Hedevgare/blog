---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Mastering CSS Pseudo-Elements: Unlock the Power of "::before" and "::after"'
pubDate: 2024-06-21
description: 'Learn how to effectively use CSS pseudo-elements like `::before` and `::after` to enhance your web design skills with practical examples and best practices.'
author: 'Edgar Moreira'
tags: ["Beginner", "CSS", "Pseudo-Elements", "Web Development"]
resources: ["https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements", "https://developer.mozilla.org/en-US/docs/Web/CSS/::after", "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"]
---

CSS is an essential tool for every web developer, but pseudo-elements can often be confusing to understand and implement. In this post we will explain what are these selectors, particularly `::before` and `::after`, how they work and how to use them. We'll also present some useful practical examples and best practices to help you finally master CSS pseudo-elements.

---

## Introduction to Pseudo-Elements
A *CSS* pseudo-element is a keyword added to a selector that lets you style a specific part of the selected elements.

For example, it can be used to:
* style the first letter of an element;
* insert content before, or after, the content of an element.

It's important to note that pseudo-elements are not the same thing as pseudo-classes. This type of selector is out of the scope of this post, but pseudo-classes are used to target elements based on their specific states (`:hover`, `:active`, `:focus`, `:visited`, `:not` are some examples of pseudo-classes).

## Syntax and Usage
The syntax is fairly simple if you are already familiar with *CSS*'s syntax. First, you use the selector, and in front of it, you write the pseudo-element to use; then, between brackets, like any other *CSS*, you write the styles to apply.

```css
selector::pseudo-element {
    property: value;
}
```

Since in this post, we will focus on `::before` and `::after` pseudo-elements, let's see their syntax.

```css
p::before {

}

p::after {

}
```

## Styling Content with `::before` and `::after`
These two types of pseudo-elements behave in similar ways; the only difference is that `::before` adds content before the selector and `::after` adds content after the selector. Exactly as their names suggest.

In order to add content, we need to specify the `content` property. If this property is not specified, has an invalid value, or has `none` as value, then the pseudo-element will not be rendered; it behaves as if the property `display: none;` is set.

Let's create a simple example to demonstrate how to use `content` property along with other CSS properties. The following snippet inserts the text `"Before "` before and the text `" After"` after a paragraph.

```html title="example.html"
<style>
p::before {
    content: "Before - ";
    color: red;
}

p::after {
    content: " - After";
    color: blue;
}
</style>

<p>Mastering CSS Pseudo-Elements</p>
```
It renders `Before - Mastering CSS Pseudo-Elements - After`, with the text **Before** in red and the text **After** in blue.

## Practical Examples
In this section, we will explore some examples of what you can build with the help of `::before` and `::after` *CSS* pseudo-elements. So, let's dive in and see these tools in action.

### 1. Creating custom bullets for lists
When creating a list, the `::before` pseudo-element can be very useful for customizing the bullet point item to anything you want.

```html title="custom_list.html"
<style>
    ul {
        list-style: none; /* Hide the default bullet points */
    }

    li {
        margin-top: 10px;
    }

    li::before {
        content: "👉"; /* Add the 👉 emoji before each list item in place of a bullet point */
        padding-right: 10px;
    }
</style>

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

In this example, we are hiding the default bullet point and replacing it with the 👉 emoji using a `::before` pseudo-element selector.

### 2. Styling blockquotes
If you intend to include quotes in your content, *CSS* pseudo-elements can help you add stylish quotation marks to enhance the visual appeal of your blockquotes.

```html title="custom_quotes.html"
<style>
    blockquote {
        position: relative;
        padding: 20px 50px;
        font-style: italic;
        background-color: #f9f9f9;
        border-left: 10px solid #3498db;
    }

    blockquote::before {
        content: "\201C";
        position: absolute;
        top: 10;
        left: 10;
        font-size: 3rem;
    }
    
    footer::before {
        content: "\2014";
        padding-right: 5px;
    }
</style>

<blockquote>
    <p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
    <footer>Albert Einstein</footer>
</blockquote>
```
Resorting to the `::before` *CSS* pseudo-element, in this example, we added and styled a quotation mark (before the `<blockquote>` content) and a dash (before the `<footer>` content).

### 3. Improve the visual effects of a tooltip
Tooltips are an interactive way to present additional information when you move your cursor over an element. In this third example, we'll improve the visuals of a tooltip-like element.

```html title="custom_tooltip.html"
<style>
    main {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .tooltip-container {
        position: relative;
        cursor: pointer;
    }

    .tooltip-text {
        visibility: hidden;
        width: 150px;
        background-color: #333333;
        color: #f9f9f9;
        text-align: center;
        border-radius: 5px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%; /* Move the tooltip above the element */
        left: 50%;
        margin-left: -75px; /* Center the tooltip; the margin is half its width */
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip-text::after {
        content: "";
        position: absolute;
        top: 100%; /* Position the pseudo-element under the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #333333 transparent transparent transparent;
    }

    .tooltip-container:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }
</style>

<main>
    <div class="tooltip-container">
        Put your cursor over me
        <span class="tooltip-text">Hi! 🙂</span>
    </div>
</main>
```
Here, the pseudo-element `::after` is used to create a square with just a top border showing (it creates the effect of a triangle pointing down) to improve the appearance of a tooltip that only appears when we move the cursor over.

## Limitations and Best Practices
The pseudo-elements generated by `::before` and `::after` are generated as if they were immediate children of the element on which they are applied; therefore, they cannot be applied to *replacement elements*, like `<img>` or `<iframe>`, whose content is outside the scope of the *CSS* formatting model.

Also, remember to specify a `content` property; otherwise, the pseudo-element will behave as having a property `display` set to `none`.

Modern browsers, including Chrome, Firefox, Safari, and Edge, fully support CSS pseudo-elements like `::before` and `::after` with consistent rendering; on the other side, older browsers, or even some mobile browsers, may present some rendering issues or not render at all.

Ensure to test thoroughly if you are using pseudo-elements and need to support old browsers, like Internet Explorer.

When you use pseudo-elements to enhance the visual design of your websites, like we have seen above, it's a good practice to make sure that your core content and functionality are accessible without them. It's also recommended to provide fallback styling or even alternative designs when you need to support browsers that do not fully support *CSS* pseudo-elements.

To finish, if you have accessibility concerns, you should avoid using `::before` or `::after` pseudo-elements, as they may not be totally accessible to screen readers.

## Conclusion
*CSS* pseudo-elements, like `::before` and `::after`, offer web developers powerful tools to enhance your site's design without cluttering the HTML. Throughout this guide, we've explored their versatility in creating custom bullets for lists, styling blockquotes, adding visual effects like tooltips, and managing browser compatibility and limitations.

By understanding these two pseudo-elements, you can:
* add decorative elements and improve readability without extra markup;
* reduce reliance on *JavaScript* for visual effects;
* achieve consistent styling across different browsers.

There are more pseudo-elements available, but `::before` and `::after` are the most versatile; with them, you can achieve pretty much any design you want.