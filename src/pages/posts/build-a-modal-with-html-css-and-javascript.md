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
        <button>Open modal</button>
    </body>
</html>
```

Now we'll add the `HTML` for the modal. It will be represented by a `div` with an `id=modal` containing an header and a body for content.

```html title="index.html" ins={9-17}
<!DOCTYPE html>
<html>
    <head>
        <title>How to create a custom modal</title>
    </head>
    <body>
        <h1>Click the button to open the modal</h1>
        <button>Open modal</button>
        <div id="modal">
            <div>
                <div>
                    <span>&times;</span>
                    <h2>Modal Header</header>
                </div>
                <p>Some content in the modal...</p>
            </div>
        </div>
    </body>
</html>
```

## The recap