# The Grand Introduction

Greetings and welcome to the exciting world of TypeScript!

This book aims to provide a casual introduction to the main features of the TypeScript language. This chapter covers:
- The intended audience for this book (i.e. who did I imagine would be interested in reading it?)
- Why learn TypeScript? What's the return on investment here?
- Aren't there enough books out there already? Why write *another* one?
- A more personal note on how I wrote the book for those of you interested in the mechanics and other metrics of such things.

## Version
The current version of this book is: 1.0..
Last pushed on 07/11/2017.

See the end of this chapter for a more detailed version history.

## Intended Audience

This book is meant for three types of users:
- You've never used TypeScript, you're not sure you ever want to use it, but you've been hearing a lot about it on the Social Media. You want a hassle-free introduction. 
- You've been dabbling with TypeScript you're mostly sold on it. You want to dig a bit deeper into mainstream TypeScript "stuff" like interfaces, classes and generics. You want a book that does this in a structured manner that also doesn't overwhelm you with the more obscure or advanced bits like intersection types, mix-ins or decorators.
- You're a Java or C# programmer who wants to transition to the world of front-end development but have always avoided it because you don't like that oily feeling you get when working with plain JavaScript. Duck typing just isn't your cup of tea.

If you fit any of these categories, welcome!

If not, you're welcome, too!

Before we continue, if you just want to get started learning the language then skip ahead to chapter 3. This chapter is your typical fluffy introduction and chapter 2, *The Gloss Overs*, actually identifies out of scope topics. Things start to get interesting and, well, practical, in chapter 3, *Practical Considerations*.

## Introduction - Why TypeScript?

The JavaScript community's ranks are growing, have been growing and will probably continue to grow in the forseeable future. Why is that?  There are a lot of reasons. The entrance fee is quite low - all you need is a text editor and web browser. If you have a reasonably modern computer, you can start writing JavaScript apps. Newly minted developers can quickly build JavaScript solutions with minimal tooling and they don't need extravagant training[^1] beforehand. Some experienced server-side developers see a comparatively easy edit/save/deploy process and want to join the band up on this wagon. The language is nearly ubiquitous. JavaScript is just about everywhere these days - browsers, servers (via node) and is helping to power the emerging field of the Internet of Things (IoT). It's even making a play to displace, or at least take a seat at native applications' table[^2]. JavaScript is, effectively, the machine language of the internet.

As I write these words, the JavaScript development community continues to grow in size. Its tooling options are more numerous than ever before. Great tooling affords the community the opportunity to build truly amazing solutions on the front and back end. The opportunity landscape expands every day. This is an age where we lucky few get to apply our intellect to some fascinating problem domains. These are exciting times!

We're also inundated with options. We have full blown frameworks like Angular, React, Ember, Meteor, Vue and others. We have sophisticated task runners and bundlers such as gulp, grunt and webpack. We have classic go-to utility libraries such as JQuery, lodash and underscore.

This begs the question, why should we further complicate our lives and take time to learn about TypeScript if JavaScript already has all the things?

I believe there are two good reasons to look at TypeScript - its growing popularity and - more importantly - the pure joy of working with it.

### TypeScript's Popularity

For starters, at least one major framework, Angular 2+, pushes you hard into using TypeScript. If you work at an Angular shop, you have a strong practical reason to learn it[^3]. Other frameworks provide TypeScript-friendly features or vice-versa. For instance, TypeScript provides first-class support to React developers via smart JSX intellisense. 

Some poeple might characterize "learn it because you *need* it for future dev work" as a "negative externality" and not exactly _popular_.  That would be fair. But consider the fact that many pure JS library authors have worked hard to provide TypeScript-friendly interfaces. Here's the DefinitelyTyped github project:

![](/assets/DefinitelyTypeAsOf2017_03_05.png)

[Check it out today](https://github.com/DefinitelyTyped/DefinitelyTyped) and see how much it's grown since March 2017.

At a high level, typings help bridge the gap between TypeScript and pure JavaScript libraries. I bring up the DefinitelyTyped github project because it shows a that a good-sized group of library developers and/or devotees think it's worth their time to create these typings. As you can see in the screen capture above, with over 3,000 contributors, almost 27k commits and pushing 10k stars - the project offers some evidence that it's worth your while learning about this.

All of this is to say that TypeScript has and continues to gain traction in the JavaScript community. The jury is still out as to whether it will "win" and become a truly main stream scripting language for web dev. It probably won't become _the_ language of the web[^4]. But its appeal cannot be denied. A growing swath of current and future front end developers are choosing TypeScript over pure JavaScript. Some folks are even wondering if they should learn TypeScript alone and skip JavaScript altogether.

### The Pure Joy Of It

TypeScript's growing popularity answers the "Why TypeScript" question in part. A lot of us aren't swayed by popularity, however. I'm sympathetic to that point of view. 

I came to TypeScript after spending about three or four years building solutions that contained minor to major bits of client-side code. I used jQuery for DOM manipulation and async work and lots of straight JS logic. I struggled with all the usual things at first, like closures or how to test for `null` or `undefined` and the family of "=", "==" "===" operators. I eventually came to an uneasy understanding of these things but some problems never went away. I found it difficult to apply common design patterns with great confidence. Pure JavaScript is terribly difficult to refactor, even for trivial changes.

As you'll discover in chapter 4, TypeScript is a statically typed language. Or at least, you can use types if you want. It's much less ambiguous than pure JavaScript both from an "intent" perspective ("what did the programmer intend with this code?") as well as straight-up technical meaning. Since TypeScript mitigates ambiguity, IDEs can provide better support. You'll see many examples of this throughout the book.

These two points combine to make working with TypeScript a truly joyful experience. Closure complexities recede. It's more difficult to accidentally assign strings to numbers. Refactoring isn't as difficult so you're likely to make necessary changes in a timely manner rather than pile on a little more technical debt. It's a breeze to manage complex objects. TypeScript's syntax maps nicely and neatly to many common design patterns. 

For me, TypeScript is like starting to cook a large, complex meal in a freshly cleaned, well organized and well-stocked kitchen. You can focus on producing a beautiful meal instead of worrying over whether you have enough unexpired tarragon in your spice rack. 

It is, simply, a joy.

## Why *Another* TypeScript Book?

The market has given rise to TypeScript several books, free and not-free (not to mention thousands of blog posts, paid articles, videos and PluralSight courses). This hasn't stopped me from writing this one because I believe the market can bear another one[^5]. I also know that different people learn things differently - more teaching "voices" help more people.  This book is one such voice. I hope you find it pleasant and more importantly, helpful :).

At the moment, there are several great resources for learning TypeScript, including the proto-iconic. _TypeScript Deep Dive_, which you can read here: [http://basarat.gitbooks.io/typescript/](http://basarat.gitbooks.io/typescript/). 

Some chapters list out a few "further investigation" links, mostly to blog posts. The final chapter lists all of them all over again included links to advanced topics that are not (currently) covered in the book. They ought to help you in your journey.

## About the Book

I'm always a bit curious about how books like this come into being and thought I'd share a bit about my process for those of you that may be interested.
 
I spent about six months writing the book, including two periods (each about 3 weeks) of fairly intensive writing and many weeks with no writing. I tend to write a lot of high level bullet points and then go off and do something completely unrelated, like an out-of-control home renovation project[^6]. Meanwhile, things are percolating in the back of my head and when I sit down to write, a good bit gets out fairly quickly.

I decided to write this book using VS Code instead of a more traditional text editor, such as MS Word. VS Code isn't a word processor, but it does support [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). It integrates nicely with Git. I wrote a few thousand words and found that markdown is plenty good enough for what I want, especially since you can inject plain HTML  right inline with the text. That's how my callout boxes work and how I embed videos.

About the videos - I have come to learn over the years the value of "differentiated instruction," which is a term of art in the teaching profession. It just describes a process where you teach the same concept two or more different ways. Some people respond well to the first and others to the second. 

The book's videos don't have any sound. I didn't want to introduce any barriers, like plugging in ear phones, to view them. They contain many annotations and you can and should obviously pause and rewind as necessary.

# Contributing to this Book

I think that most authors, and I count myself among them, derive immeasurable satisfaction from reader feedback. If you'd like to contribute to the book in a non-material, spiritual way (like "attaboy!" or "Dear Lord, what fresh hell have you visited upon the world with this book!"), the easiest thing is to simply send me a note to [galvin.paul@gmail.com](mailto:galvin.paul@gmail.com). It would be helpful if you put the words "TypeScript Book" in the subject, but certainly isn't required. I always get a little extra pep in my step when someone leaves a comment on one of my blog posts or reaches out by email. It's better than being paid![^7].

I have long been impressed, interested and even a bit envious of the *You Don't Know JavaScript* series. Kyle Simpson obviously hit a nerve and he has a really thriving Github project going. I have, in fact, tried to follow his model. If you'd like to participate in a more material way, hit up this book's github site, https://github.com/pagalvin/tsbook:
- Star the project
- Log some issues
- Correct problems you find and issue a pull request
- Suggest and even write entire new areas of content and issue a pull request

I will make every effort possible to respond to your emails, review and manage github issues and honor high quality pull requests.

# Further Reading

This chapter's "further reading list" is much more extensive than any other. These articles reflect TypeScript's growing popularity, as well as at least one "anti-TypeScript" article.  

Here they are:
- Moving off Flow to TypeScript: http://jan.varwig.org/2017/02/15/flow-vs-typescript.html
- Preferring Flow over TypeScript for earlier error detection: http://thejameskyle.com/adopting-flow-and-typescript.html
- Stack Overflow tackling the question, "Why use TypeScript over JavaScript?"  https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript
- Short introduction to TypeScript for C# Developers:  http://www.codeguru.com/csharp/csharp/cs_webservices/tutorials/typescript-for-the-c-developer.html
- The good people at Slack (team messaging platform) migrated their code base to TypeScript. This article explains why: https://slack.engineering/typescript-at-slack-a81307fa288d
- Still unconvinced? Maybe this author's "Six Reasons" article will convince you: https://www.siliconrepublic.com/enterprise/typescript-programming-javascript
- An old "anti-TypeScript" article from 2014. It's actually a bit hard to find "TS is Bad" articles, but I wanted to include at least one thoughtful example and this is it: http://walkercoderanger.com/blog/2014/02/typescript-isnt-the-answer/
- Another software dev team explaining their decision to use TypeScript:  https://medium.com/@tomdale/glimmer-js-whats-the-deal-with-typescript-f666d1a3aad0

# Copyright

© 2017 Paul Galvin.

# Version History

| Date | Version | Change |
| -: | -: | - |
| 07/07/2017 | 1.0 | Initial go-live of the book, begin "marketing" it on social media.|
| 07/08/2017 | 1.01 | Added a link by Ayo Alfonso to chapter 4, Introducing Types|
|            |  |  Added Navalia github project to Continue Learning chapter. |
|            | | Updated TOC with chapter numbers. |
| 07/11/2017 | 1.02 | Merged a pull request from Frank Ali fixing a mistake in an example union type ("up" instead of "right").  Still need to correct the associated video. |

# Moving On

That's it's for the fluffies. The next chapter discusses some out of scope topics so that you don't get your hopes up for things not covered here in the book.

---
[^1]: That's not to say that they are doing it well, but they are surely giving it a try.

[^2]: Electron, for instance, provides a way to create and package JavaScript applications to be run on the desktop. Electron itself is very TypeScript-friendly.

[^3]: Even if you're an Angular 1.x shop today, you'll want to try and get ahead of the curve by learning TypeScript. It's only a matter of time before your shop starts investing in Angular 2+.

[^4]: Given that JavaScript is already the "machine language of the web," we riches-embarrassed developers will be able to pick almost any language we want to use in the future and work seamlessly with everyone else. See more of my thoughts on this subject here: ["The Wonderful Consequences of JavaScript as the Virtual Machine Language of the Web"](https://hackernoon.com/the-wonderful-consequences-of-javascript-as-the-virtual-machine-language-of-the-web-3a65cbf887fa#.b9rxgbbrs "https://hackernoon.com/the-wonderful-consequences-of-javascript-as-the-virtual-machine-language-of-the-web-3a65cbf887fa#.b9rxgbbrs") 

[^5]: At least I think the market can bear another free, online book :\).

[^6]: It started with "hey, let's pull up the carpet and refinish the hardwood!" And then it progressed, by inches, to re-doing the hardwood in the whole first floor, pull out the old trim and replacing it, fixing cracks in the ceiling, painting the basement stairs and putting in new treads, new chandelier and kitchen stuff... It's still not done. Fun stuff, but ... maybe I shouldn't have started.

[^7]: *Mostly* better than being paid.
