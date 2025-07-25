---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Guide to Stateful and Stateless Widgets in Flutter'
pubDate: 2025-06-08
updatedDate: 2025-06-08
description: 'Learn the fundamental differences between Stateful and Stateless widgets in Flutter. This guide will help you understand how and when to use each of them to create dynamic apps.'
author: 'Edgar Moreira'
tags: ["Beginner", "Dart", "Flutter", "Flutter Widgets"]
---

Central to *Flutter*'s functionality are widgets. Widgets are used to describe the structure and layout of your application's elements, such as buttons, text fields, images and more. In *Flutter*, widgets can be classified into two categories: Stateful and Stateless. In this guide, we'll explore what are Stateful and Stateless widgets, when and how to use them, and provide practical example to illustrate their applications.

---

If you are building an application with *Flutter*, your UI will be built out of widgets. Widgets are the building blocks of a *Flutter* app; in fact, everything in *Flutter* is a widget. The view of your app is a tree of widgets composed from simple elements (like text labels and buttons) to complex layouts and animations. Understanding widgets is a crucial step in building effective and dynamic *Flutter* applications.

## Overview of what are widgets in *Flutter*
Before we start talking about Stateful and Stateless widgets, let's talk a bit more about what are widgets in *Flutter*.

As mentioned above, in *Flutter*, widgets are components (similar to *ReactJs*) that represent the UI of your app. They form a hierarchical structure which defines the layout and organization of the UI elements.

Widgets are represented by immutable classes that are used to configure a tree of objects. This means that when a widget is created they cannot be changed. When the state of a widget changes (for example, by a user pressing a button), instead of *Flutter* modifying the widget, a new one is created.

We have seen before that an app in *Flutter* is a tree of widgets; so we can say that a widget can be composed of many other widgets. In other words, widgets can be composed together to build complex UIs from simple components. By taking this approach, you can create reusable widgets with an easier way to maintain the code.

With this in mind, let's finally start talking about the two types of widgets: Stateful and Stateless.

## Stateless widgets
Stateless widgets are immutable and do not hold any state; so they remain the same throughout its life time and are used for static content.

An example of this type of widget can be a text label or, as we'll see now, can represent an item from a list.

```dart title="example_stateless_widget.dart"
class CustomListItem extends StatelessWidget {
    final String title;

    const CustomListItem({ super.key, required this.title });

    @override
    Widget build(BuildContext context) {
        return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(
                child: Text(title)
            ),
        );
    }
}
```
As you can see, the content of the widget will never change; it'll always be a text label with a `title` that is passed as a parameter.

With this code, everytime you create a list that just needs to present text, you can use this `CustomListItem` widget. We'll now see how to use this widget with a Stateful widget.

## Stateful widgets
Stateful widgets maintain a mutable state that can change over time; they are used for dynamic content that can update based on user interation or other events.

Examples of this type of widget are a checkbox, a form input or, as we'll see, a dynamic list.

```dart title="example_stateful_widget.dart"
class CustomDynamicList extends StatefulWidget {
    const CustomDynamicList({ super.key });

    @override
    State<CustomDynamicList> createState() => _State();
}

class _State extends State<CustomDynamicList> {
    List<String> items = [];

    void addItem() {
        items.add("Item #${items.length + 1}");
        setState(() {
            items = [...items];
        });
    }

    @override
    Widget build(BuildContext context) {
        return Column(
            children: [
                Expanded(
                    child: ListView.builder(
                        itemCount: items.length,
                        itemBuilder: (context, int index) {
                            return CustomListItem(title: items[index]);
                        }
                    )
                ),
                Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: ElevatedButton(
                        onPressed: () => addItem(),
                        child: const Text("Add item")
                    )
                )
            ]
        );
    }
}
```
Here, we implemented a dynamic list widget, composed of the `CustomListItem` widget we created before; the dynamic part is how many `CustomListItem` are going to be created.

In this example, when the user presses the `ElevatedButton` a new item is added to the list `items`; since the list's state has changed (by adding a new item to the list), the `setState` function is called triggering a redraw of the widget, which then creates a new `CustomListItem` (Stateless widget), passing just a string of text as the required `title` parameter.

## Recap

We've explored the fundamental concepts of widgets and learned that they are the core building blocks of a *Flutter* application, providing a flexible and efficient way to create and manage UI components. 

Stateless widgets (like `CustomListItem` we created before) are perfect for static content; while Stateful widgets (like `CustomDynamicList`) handle dynamic and changeable states within your app.

By understanding these principles and concepts, you can build robust, dynamic, and maintainable *Flutter* apps.