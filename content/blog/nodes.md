---
title: "WebGL Node Editor: the importance of good design"
shortTitle: The Importance of Good Design
description: What are the takeaways from my latest project? Check them out!
date: 2023-11-07 09:00:00 -3
tags: ['project', 'software architecture', 'ui']
published: true
---

It's been about a year since I last wrote something in this blog. Let's reset the "Days since last publication" counter.

I recently published a new project (which you can check out in the Projects page) and I was very satisfied with the result, mainly because I started working on it last year and it took me a few attempts to get it right. Now, I want to share some of the process.

The idea of making a WebGL node editor came from the question ["How does Blender’s shader node editor works?"](https://www.linkedin.com/posts/mcavazotti_software-diy-blender-activity-6950118444558098432-4bWS). From that, I set out to make the whole interface inside a HTML Canvas using pure Typescript (I can't live without type checking!) and have everything to be encapsulated inside a class so I would be able to easily embed it inside another application. As you can see from [this post](https://www.linkedin.com/posts/mcavazotti_typescript-html5-webgl-activity-6980974067205984256-LyLu), I got a decent result. I got the "node compiler" right from the first time but faced a major limitation with the interface: the user should be able to write numbers and pick colors, and I didn't find a satisfactory way of doing it with HTML Canvas. On the bright side, by implementing all the UI rendering by hand, I learned about and had to implement some concepts that are also used by browsers and other UI libraries (such as Flutter). Although front-end development is usually regarded as easier than back-end, the engines on which the front-end runs is very complex, and I could feel it first-hand! All in all, I didn't feel I accomplish what I wanted.

Sometime later, I revisited the project. I reused most of the code related to code generation, but I ditched the idea of having all the UI inside a Canvas. Instead of implementing an UI engine of my own, I chose to use HTML's capabilities and bend them to my will. I still used a Canvas element to draw the connections, however everything else was HTML Div and CSS. Things were running smoothly: I got the inputs as I wanted, the UI was working properly, and so on. As you'd expect, things went wrong. The problem began when I introduced nodes that could have different types:

![separate node](assets/images/separate-node.png)

Depending on the value selected, I needed to show or hide some sockets. The problem was that I couldn't make this feature work with the way I designed the save/load functionality because of how I designed the nodes themselves! To make things less abstract, imagine that there was an abstract class `BaseNode` and each node type had its own class: `SeparateNode`, `MathNode`, `OutputNode`. The `BaseNode` class had some methods that were implemented by its children classes, such as `generateCode`, `getHTML` (to render the component) and `toJSON` (used during save), and it also implemented the static method `fromJSON` (and here's where lies the problem). This method returned an instance of a child class depending on the JSON:

```ts
abstract class BaseNode{
    // STUFF HERE
    static fromJSON<T extends BaseNode>(type: new (...args: any[]) => T, json: SerializedNode) {
        return Object.create(type.prototype, {
            // STUFF HERE
        }) as T;
    }
}
```

As you can see, it was a bit hacky, it required a helper class (`SerializedNode`) and didn't work all the time. Besides that, I created a messy dependency graph between my classes, which made things worse. In the end, I couldn't restore properly the state of the nodes after a save/load. After struggling for some time, I just left this project on the backburner.

Finally, I felt the "inspiration" to come back to it for a third time! Now, instead of having a class for every single type of node, I decided to have only one class, that was responsible for everything, from rendering the UI to code generation. This class would receive a configuration object which, in turn, contained a state object. I also used callbacks and dependency injection extensively to avoid cross dependencies.

The final code is not simple and there's a lot going on, but creating new nodes and integrating them to the existing system is as easy as it can be! That was one of my goals. I want to introduce more nodes over time and even give users the possibility to create their own nodes! For now, I'm happy with how it is though.


*PS: I'm not used to writing blog posts, so it feels awkward, and I don't know if I'm rumbling too much. If you've read it until here, thank you so much! BTW, any feedback is more than welcome.*