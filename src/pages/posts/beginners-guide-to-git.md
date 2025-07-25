---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Beginner's Guide to Git"
pubDate: 2025-07-20
updatedDate: 2025-07-20
description: 'Learn some of the most essential Git commands that every developer should know. From setting up your first repository to branching and merging, this post gives you a solid foundation in version control.'
author: 'Edgar Moreira'
tags: ["Beginner", "Git"]
resources: ["https://git-scm.com/docs", "https://git-scm.com/downloads"]
---

*Git* is a free, open-source version control system that lets you track changes in your code, work on different features without messing up the main project, and collaborate with others without overwriting each other's work. Think of it as a time machine and coordination tool for your code.
Knowing *Git* is a must-have skill in any developer's toolkit.

**Note:** This guide assumes you have *Git* already installed on your computer. Check this website https://git-scm.com for instructions on how to install *Git* on your machine.

## Set up Git
Before using *Git*, you should configure your name and email. This information is used with each commit you make, so you and others know who made what changes.

Run these commands in your terminal:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

The `--global` flag means this configuration applies to all your *Git* projects, so you only need to do this once.

To verify your settings, run:

```bash
git config --list
```

You should see the values you just configured among other configurations.

## Create a repository
To start using *Git* on your project you need to create a repository. A *Git* repository is just a folder that *Git* tracks for changes. This repository stores all your project's history and versions.

Use the following command to initialize *Git*:

```bash
cd your-projects-location
git init
```

The `init`  command creates a hidden folder called `.git` inside your project, where *Git* stores all the information it needs to track your project's history.

## Track and save changes
Now you are ready to start tracking changes to your files. *Git* does this in two steps: **staging** and **committing**.

### Staging
In this step you simply indicate to *Git* what files you want to include in the next version.

```bash
git add hello-world.txt
```

To add all files you can use the `--all` flag.

```bash
git add --all
```

### Committing
After staging your work, you are ready to commit. Commit is like a saving point in your work. It records a snapshot of your files at a certain time, with a message describing what changed. This allows you to go back to a previous commit if you need to.

```bash
git commit -m "These are the changes to my code"
```

Always write a clear message with the `-m` flag so you and others can understand what changes were made with the commit.

## Check your work
As you make changes in your project, *Git* provides simple commands to check what's going on.

### View current status
To check which files have been modified, which files are staged for commit, or even which files are untracked, use the `status` command.

```bash
git status
```

### View commit history
To see all commits made, use the command `log`.

```bash
git log
```

This shows a detailed list of all commits in your repository, including the information about the author, date, and commit message.

## Branching and Merging
In *Git*, a branch acts like a separate workspace where you can make changes and try new ideas without affecting the main branch.
The main branch is usually used to represent the stable, production-ready version of your project, so it's advisable not to make changes directly to it.

### Branching

You should use a new branch when you are, for example:
* developing a new feature;
* fixing a bug;
* experimenting with new ideas.

Create a new branch with the following command:

```bash
git branch new-feature
```

In this example, `new-feature` is the name of the branch. You can name it whatever you want.

By default, you are still on the main branch. To switch to the newly created branch, use:

```bash
git checkout new-feature
```

Now you are correctly on the `new-feature` branch and ready to start making changes to your code.

You can also do these last two steps in one single command:

```bash
git checkout -b new-feature
```

The `-b` flag on `checkout` will create a new branch and move to it.

### Merging

When you are done making changes to your code and have already committed them, it's time to merge. Merging in *Git* means combining the changes from one branch into another. This is how you bring your work back into the main project after working separately on features or fixes.

First, switch to the branch you want to merge into (in this example, main):

```bash
git checkout main
```

Then, run the `merge` command, specifying the branch you want to bring in:

```bash
git merge new-feature
```

At this point, your changes are on the main branch and ready to be pushed to production.

## Conclusion

That's it!

We've explored the fundamentals of Git, how to set up a repository, track and save changes, explore your project’s history, and manage your code with branches and merges. These skills aren’t just nice to have. They are essential for working on real-world projects, whether you’re coding alone or collaborating with a team.

Mastering these basics will give you more confidence to experiment, improve your workflow, and protect your work from costly mistakes. With just a handful of commands, you can version your code like a pro.

As you get more comfortable, you should explore more advanced things like working with remote repositories on GitHub, handling merge conflicts, and collaborating with others through pull requests.