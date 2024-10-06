---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Building a Modal with HTML, CSS and JavaScript'
pubDate: 2024-10-06
description: 'This tutorial guides you through building your own custom modals, perfect for displaying content, alerts or forms on wny webpage, using HTML, CSS and JavaScript.'
author: 'Edgar Moreira'
tags: ["CSS", "Frontend Development", "HTML", "JavaScript", "Tutorial", "Web Development"]
---

A modal is very widely used in web development as a versatile UI component for displaying content or messages without redirecting users to another page. It appears as a pop-up window that overlays the main content, making it perfect for alerts, forms, image galleries, and more, all while maintaining an interactive and seamless user experience.

---

## The plan
1. Create a basic webpage with a modal skeleton
2. Add *JavaScript* code to open and close the modal
3. Style the modal

## The implementation
Let's start by creating an *HTML* file, I named mine `index.html`, and put some basic structure to begin with.

We'll have a `<h1>` tag instructing the user to click the button to open the modal, and the button that, when clicked, will open the modal.

```html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to create a custom modal</title>
    </head>
    <body>
        <h1>Click the button to open the modal</h1>
        <button id="btnModal">Open modal</button>
    </body>
</html>
```

Now we'll add the `HTML` for the modal. It will be represented by a `div` with an `id=modal` and it will contain an header `div` for the modal title and close button and the content of the modal.

We will also add some *CSS* classes and IDs for styling and DOM manipulation with *JavaScript*.

```html title="index.html" ins={9-17}
<!DOCTYPE html>
<html>
    <head>
        <title>How to create a custom modal</title>
    </head>
    <body>
        <h1>Click the button to open the modal</h1>
        <button id="btnModal">Open modal</button>
        <div id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span id="btnClose">&times;</span>
                    <h2>Modal Header</header>
                </div>
                <p>Some content in the modal...</p>
            </div>
        </div>
    </body>
</html>
```

Let's add some styles now to finish our basic setup. Create a file called `styles.css` and type the following code.

```css title="styles.css"
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
}
```

Now that we have our *HTML* structure, we can start adding some styling and interactivity.

If you try the code that we have so far, the modal is being shown under the `<button id="btnModal">Open modal</button>`, as it should, because we are missing the styles to hide it.

Open the `styles.css` file and add the following styles.

```css title="styles.css" ins={2-37}
/* ... (previous code) */
#modal {
    display: none;
    position: absolute;
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: fit-content;
    width: fit-content;
    margin: auto;
    z-index: 1;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

#button-close {
    font-size: 40px;
    cursor: pointer;
}

.modal-content {
    padding: 20px;
}

.modal-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333333;
}

.modal-header h2 {
    margin-left: 15px;
}
```

Here, we style our modal, by hiding it by default and positioning it in the middle of the screen, in front of all other content, and with a `box-shadow` to make it more noticeable; we also style the modal components, like the close button and the header.

Now we just need to make the modal show when the button is clicked.

Let's go ahead and create a *JavaScript* file called `script.js` and write the following code.

```js title="script.js"
let btnModal = document.getElementById("btnModal");

btn.onclick = function() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

let btnClose = document.getElementById("btnClose");

btnClose.onclick = function() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
```

Using plain *JavaScript*, we get our buttons (the button to open the modal, and the button to close it), and then attach `onclick` event listeners that call a function when the user clicks on them.

Each function does very similar things, they get the modal and change its *CSS* `display` property; `block` to show the modal and `none` to hide it.

Everything is pretty much done, but we can still improve it by adding a background overlay that stays in front of the page's content and behind the modal. This will highlight our modal and make it more noticeable.

Start by opening the `index.html` file.

```html title="index.html" ins={3}
<!-- ... (previous code) -->
<button id="btnModal">Open Modal</button>
<div id="overlay"></div>
<div id="modal">
<!-- ... -->
```

Our changes are just to add an empty `<div>` that represents the overlay. Now we need to style it in order for it to actually be an overlay.

Open the `styles.css` file and add the following styles.

```css title="styles.css"
/* ... (previous code) */
#overlay {
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
```

By adding a fixed position at `top: 0` and `left: 0` with `width` and `height` properties with `100%` value, we make the sure that the overlay occupies the whole page, just like we wanted.

Now, we just need to make the overlay show when the modal opens.

Open the `script.js` file and add the following code.

```js title="script.js" ins={3-4} ins={7-8}
// ... (previous code)
btnModal.onclick = function() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
// ...
}
btnClose.onclick = function() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
// ...
}
```

We use the same logic, that we used to open the modal, to show the overlay: making the `display` property have a `block` value when the modal opens and changing it to `none` when the modal closes.

After these changes, if you try this code, you'll see a greyish background when you click the button to open the modal.

And that's it, we have a functioning modal built with plain *HTML*, *CSS*, and *JavaScript*.

# The recap
We got to the end of our post; let's recap everything we've done:
* **Create the *HTML* skeleton**: we defined the structure of our page, the main content, and the modal;
* **Add interactivity**: we added logic code with *JavaScript* so that when a button is pressed, the modal shows; it also closes when the close button is clicked;
* **Style the modal**: we styled our modal to appear at the center of the screen; we also created an overlay to make the modal more noticeable.