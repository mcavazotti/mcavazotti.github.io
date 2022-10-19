---
title: "How to: Move commits between repositories"
shortTitle: "How to: Move commits"
description: Find out how to move commits to other repositories
date: 2022-10-19 10:40:00 -3
tags: ["git", "how-to", "tutorial"]
published: true
---

This is my first how-to ever. I'll keep it short and direct, because I hate those tutorials that keep going around the bush.

## What are you trying to solve?
You want to transfer code from one repository to another, but you also want to keep that code's change history in the new repo.

## How to do it?
First, let's name things properly: **source repo** is the repository where the code is coming from, **destination repo** is the one that's receiving the code.

1. Add the **source repo** as a remote to the **destination repo**:
```bash
# you should be inside the destination repo, in the desired branch
$ git remote add source-repo <REPOSITORY LOCATION HERE> # it can be either a url from Github/etc. or the path to a repository in your computer
```

2. Fetch the commits from remote:
```bash
$ git fetch source-repo # you can specify a branch if you want
```

3. Find the commits you want to move. You can use any GUI client or the command line:
```bash
$ git log source-repo/<BRANCH>
```

4. Move the commits. Beware of merge conflicts!
```bash
$ git cherry-pick <COMMIT HASH> # check the docs to find more ways to use this command
```

5. (Optional) Remove the **source-repo** from the **destination repo**:
```bash
$ git remote remove source-repo
```

## Wrap up
As you can see, it's pretty simple, although this trick uses some less known Git commants. Any questions or suggestions, send me a message!