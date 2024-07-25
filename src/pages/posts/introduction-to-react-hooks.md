---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Introduction to React Hooks'
pubDate: 2024-07-28
description: "Explore the essentials of React Hooks in this comprehensive beginner's guide. Learn how to simplify your React code by managing state and side effects with ease, even if you are new to web development."
author: 'Edgar Moreira'
tags: ["Beginner", "Javascript", "React", "React Hooks", "Web Development"]
---

*React* has revolutionized the way user interfaces are built, and with the introduction of Hooks, it has become even more powerful and intuitive. Whether you are new to *React* of have some experience, understanding Hooks is essential for modern *React* development. In this post, we will break down the basics of *React* Hooks, explaining what they are, why they matter, and how you can start using them to manage state ans side effects in your web applications. By the end of this guide, you will have a solid foundation to being incorporating Hooks into your *React* projects with confidence.

---

## What are *React* Hooks?
*React* Hooks provide functional components with the ability to use **state and manage side effects**, allowing developers to add state and other *React* features without having to be limited to a class component. They provide a cleaner, easier-to-understand and more concise way to handle state and side effects in *React* applications.

Hooks can only be called at the top level of your components, this means that you can't call Hooks inside conditions, loops, or other nested functions. Think about it this way, you "call" Hooks at the top of your component similar to how you "import" modules at the top of your file.

We will now explore some Hooks already available in *React*.

## State Hooks
When a component needs to store information, for example an input form, we can use state to hold that data. To add state to a component, use one of this hooks:
- `useState` : declares a state variable that can be updated directly
- `useReducer` : declares a state variable with the update logic inside a **reducer function**

### useState
Using a simple example to demonstrate how to implement the `useState` hook, here we'll have a component with a button that holds the amount of times it has been pressed; that information is stored in the `count` variable and is updated through the `setCount` function.
```js title="useState.js"
import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked { count } times.
        </button>
    );
}
```

### useReducer
On the surface, `useReducer` is very similar to `useState`, but it lets you move the state update logic from multiple event handlers into a single function.

In this example, we'll have a component with a form and we'll make use of the `useReducer` hook to update it; the form is made of a text input where the user can type a *name* and two buttons for the user to *increment* or *decrement* an *age* value.

```js title="useReducer.js"
import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "changed_name": {
            return {
                ...state,
                name: action.newName
            };
        }
        case "incremented_age": {
            return {
                ...state,
                age: state.age + 1
            };
        }
        case "decremented_age": {
            return {
                ...state,
                age: state.age - 1
            };
        }
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, { name: "John", age: 25 });

    return (
        <>
            <input value={state.name} onChange={(e) => dispatch({ type: "changed_name", newName: e.target.value })} />
            <div>
                <button onClick={() => dispatch({ type: "decremented_age" })}>Decrement age</button>
                <button onClick={() => dispatch({ type: "incremented_age" })}>Increment age</button>
            </div>
            <p>Hello { state.name }, your age is { state.age }.</p>
        </>
    );
}
```

## Context Hooks
In *React*, passing data from a parent component to its children can be troublesome, specially if those children are too deep into the component tree. This is called *prop drilling*, which is the process of passing data through multiple levels of components.

To pass information to a component from a distant parent without *prop drilling* you can use context. A top-level component can pass its current context to all components below, no matter how deep they are, using a context hook.
- `useContext` : reads and subscribes to a context

### useContext
A common use case for the `useContext` hook is applying a dynamic theme to your app. In this example, we'll demonstrate how to implement a light/dark mode toggle using this hook.

As you'll see below, the parent component, called `App` is the one that holds the information on what theme is active; that `theme` is stored using a `useState` hook, that is passed through context to all children. All components that need to know the value of `theme` need to be wrapped in a `Context.Provider` component that we create using the `createContext` function.

```js wrap title="useContext.js"
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <Header />
            <section>
                <Sidebar />
                <Body />
            </section>
            <Footer />
            <label><input type="checkbox" onChange={(e) => { setTheme(e.target.checked ? 'dark' : 'light') }} />Use dark mode</label>
        </ThemeContext.Provider>
    );
}

const Header = () => {
    const theme = useContext(ThemeContext);
    return <header className={theme}>Header</header>;
}

const Sidebar = () => {
    const [theme] = useState("dark");
    return <div className={theme}>Sideber</div>;
}

const Body = () => {
    const theme = useContext(ThemeContext);
    return <div className={theme}>Body</div>;
}

const Footer = () => {
    const theme = useContext(ThemeContext);
    return <footer className={theme}>Footer</footer>;
}
```

In this example, we have a simple app structure with an `<Header />`, an `<Sidebar />`, a `<Body />` and a `<Footer />`, followed by a checkbox. This checkbox is what allows the user to change the app theme. When the user checks or unchecks the checkbox all components that subscribe to the `useContext` hook will have is theme changed. If you try this code, you will see that the `<Sidebar />` component does not change and is always using the "dark" theme, this is because that component has its own theme defined by the `useState` hook.

To finalize, let's type some *CSS* to make the example prettier and to show you what the classes **.light** and **.dark** are in terms of code.

```css title="styles.css"
header, div, footer {
    padding: 10px;
    margin: 10px;
}

section {
    display: flex;
}

section div {
  flex: 1;
}

section div:last-child {
  flex: 2;
}

.light {
    background-color: #ffffff;
    color: #141414;
}

.dark {
    background-color: #141414;
    color: #ffffff;
}
```

This *CSS* snippet does not add any information for you to understand how to use and apply the `useContext` hook, I just like to show all the code I used to offer more context and completeness to my example.

## Ref Hooks
When you want a component to hold some information, like a DOM node, but you don't want to trigger new renders, you should use a *ref*. Unlike state, updating a ref does not trigger a re-render of your component.

Refs are very useful when you need to work with non-*React* systems, like built-in browser APIs.
- `useRef` : declares a ref

## Effect Hooks
Effect hooks are useful when a component needs to deal with network, browser DOM, animations, even interact with a non-*React* component; they allow you to run code after rendering.

As an example, let's say your component needs to fetch data from a remote server. To accomplish this task, an effect hook would be the best tool to use. Since a data fetch is an asynchronous task, an effect hook unsures that the remote call runs only after the component has rendered, which makes the user experience much better.
- `useEffect` : connects a component to an external system

## Performance Hooks
Optimization should be a concern if, for example, your app does lots and very complicated calculations, which can make the app very slow and irresponsive for some time. A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can reuse a cached calculation or skip a re-render if data has not changed using performance hooks, like:
- `useMemo` : lets you cache the result of an expensive calculation
- `useCallback` : lets you cache a function definition before passing it down to an optimized component

## Custom Hooks
*React* comes with several built-in hooks, not just the ones I have listed above, but sometimes you might need a hook for something more specific. For that purpose, *React* allows you to create your own custom hooks.

<!-- ## Context Hooks

## Ref Hooks

## Effect Hooks

## Performance Hooks

## Custom Hooks

## Conclusion -->