---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Building a Modal with HTML, CSS and JavaScript'
pubDate: 2024-08-18
description: 'This tutorial guides you through building your own custom modals, perfect for displaying content, alerts or forms on wny webpage, using HTML, CSS and JavaScript.'
author: 'Edgar Moreira'
tags: ["CSS", "Frontend Development", "HTML", "JavaScript", "Tutorial", "Web Development"]
---

A modal is very widely used in web development as a versatile UI component for displaying content or messages without redirecting users to another page. It appears as a pop-up window that overlays the main content, making it perfect for alerts, forms, image galleries, and more, all while keeping an interactive and seamless user experience.

---

## The plan
1. Create a basic webpage with a modal skeleton
2. Add *JavaScript* code to open and close the modal
3. Style the modal

## The implementation
Let's start by creating an *HTML* file, I named mine `index.html`, and put some basic structure to begin with.

We'll have a `<h1>` tag instructing the user to click the button to open the modal, and the button that when clicked will open the modal.

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

Now we'll add the `HTML` for the modal. It will be represented by a `div` with an `id=modal` containing an header and a body for content.

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

Now that we have our *HTML* structure and can start adding some interactivity.

If you try the code that we have so far, the modal it's being shown under the `<button id="btnModal">Open modal</button>`, as it should, because we are missing the styles to hide it.

Let's add some styles now. Create a file called `styles.css` and type the following code.

```css title="styles.css"
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

Here, we style our modal, by making it appear in the middle of the screen, in front of all other content, and with a `box-shadow` to make it more noticeable; we also style the modal components, like the close button and the header.

Now we just need to make the modal show when the button is clicked.

Let's go ahead and create a file called `script.js` and write the following code.

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

## The recap