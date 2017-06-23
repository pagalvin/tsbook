# The Grand Introduction

Greetings and welcome to the exciting world of TypeScript!

This book aims to provide a casual introduction to the main features of the TypeScript language. This chapter discusses:
- The intended audience for this book (i.e. who did I imagine would be interested in reading it?)
- Why learn TypeScript?
- Aren't there enough books out there already? Why write *another* one?
- A more personal note on how I wrote the book.

## Intended Audience

This book is meant for three types of users:
- You've never used TypeScript, you're not sure you ever want to use it, but you've been hearing about so you want a hassle-free introduction. 
- You've been using TypeScript a bit, you're mostly sold on it and you want to dig a bit deeper into mainstream TypeScript "stuff" like interfaces, classes, generics and the like. 
- You're a Java or C# programmer who wants to transition to the world of front-end development but have always avoided it because duck typing just isn't your cup of tea.

If you fit any of these categories, welcome!

If not, you're welcome, too!

Before we continue, if you just want to get started learning the language then skip ahead to chapter 3. This chapter is your typical fluffy introduction and chapter 2, *The Gloss Overs*, actually identifies out of scope topics. Things start to get interesting and, well, practical, in chapter 3, *Practical Considerations*.

## Introduction - Why TypeScript?

The JavaScript community's ranks are growing, have been growing and will probably continue to grow in the forseeable future. Why is that?  There are a lot of reason. The entrance fee is quite low - all you need is a text editor and web browser. If you have a computer, you can start writing JavaScript apps. Newly minted developers can quickly build JavaScript solutions with minimal tooling and they don't need extravagant training[^1]. Some experienced server-side developers see a comparatively easy edit/save/deploy process and want to join the band up on this wagon. The language is nearly ubiquitous. JavaScript is just about everywhere these days - browsers, servers (via node) and even helping the emerging Internet of Things (IoT). It's even making a play to displace, or at least take a seat at native applications' table. JavaScript is, effectively, 

As I write these words, the JavaScript development community continues to grow in size. Its tooling options are more numerous than ever before. Great tooling affords the community the opportunity to build truly amazing solutions on the front and back end. The opportunity landscape expands every day. This is an age where we lucky few get to apply our intellect to some fascinating problem domains. These are exciting times!

We're also inundated with options. We have full blown frameworks like Angular, React, Ember, Meteor, Vue and others. We have sophisticated task runners and bundlers such as gulp, grunt and webpack. We have classic go-to utility libraries such as JQuery, lodash and underscore.

This begs the question, why should we further complicate our lives and take time to learn about TypeScript if JavaScript already has all the things?

I believe there are two good reasons to look at TypeScript - its growing popularity and - more importantly - the pure joy of working with it.

### TypeScript's Popularity

For starters, at least one major framework, Angular 2+, pushes you hard into using TypeScript. If you work at an Angular shop, you have a strong practical reason to learn it[^2]. Other frameworks provide TypeScript-friendly features or vice-versa. For instance, TypeScript provides first-class support to React developers via smart JSX intellisense. 

Some poeple might characterize "learn it because you *need* it for future dev work" as a "negative externality" and not exactly _popular_.  That would be fair. But consider the fact that many pure JS library authors have worked hard to provide TypeScript-friendly interfaces. Here's the DefinitelyTyped project as of a few months ago:

![](/assets/DefinitelyTypeAsOf2017_03_05.png)

Check it out today and see how much it's grown since March 2017.

I'll explain typings later in the book. At a high level, they help bridge the gap between TypeScript and pure JavaScript libraries. I bring up the DefinitelyTyped github project because it shows a that a good-sized group of library developers and/or devotees think it's worth their time to create these typings. With over 3,000 contributors, almost 27k commits and pushing 10k stars - the project offers some evidence that it's worth your while learning about this.

All of this is to say that TypeScript has and continues to gain traction in the JavaScript community. The jury is still out as to whether it will "win" and become a truly main stream scripting language for web dev. It probably won't become _the_ language of the web[^3]. But its appeal cannot be denied. A growing swath of current and future front end developers are choosing TypeScript over pure JavaScript. Some folks are even wondering if they should learn TypeScript nee TypeScript and skip JavaScript altogether.

### The Pure Joy Of It

TypeScript's growing popularity answers the "Why TypeScript" question in part. A lot of us aren't swayed by popularity, however. I'm sympathetic to that point of view. 

I came to TypeScript after spending about three or four years building solutions that contained minor to major bits of client-side code. I used jQuery for DOM manipulation and async work and lots of straight JS logic. I struggled with all the usual things at first, like closures or how to test for `null` or `undefined`. I eventually came to an uneasy understanding of these things but some problems never went away. I found it difficult to apply common design patterns with great confidence. Pure JavaScript is terribly difficult to refactor, even for trivial changes.

As you'll discover in chapter 4, TypeScript is a statically typed language. Or at least, you can use types if you want. It's much less ambiguous than pure JavaScript both from an "intent" perspective ("what did the programmer intend with this code?") as well as straight-up technical meaning. Since TypeScript mitigates ambiguity, IDEs can provide better support. You'll see many examples of this throughout the book.

These two points combine to make working with TypeScript a truly joyful experience. Closure complexities recede (but don't go away entirely). It's more difficult to accidentally assign strings to numbers. Refactoring isn't as difficult so you're likely to make necessary changes in a timely manner rather than pile on a little more technical debt. It's a breeze to manage complex objects. TypeScript's syntax maps nicely and neatly to many common design patterns. 

For me, TypeScript is like starting to cook a large, complicated meal in a freshly cleaned and well-stocked kitchen. You can focus on producing a beautiful meal instead of worrying over whether you have enough unexpired tarragon in your spice rack. 

It is, simply, a joy.

## Why *Another* TypeScript Book?

The market has given rise to TypeScript several books, free and not-free (not to mention thousands of blog posts, paid articles, videos and PluralSight courses). This hasn't stopped me from writing this one because I believe the market can bear another one[^4]. I also know that different people learn things differently - more teaching "voices" help more people.  This book is one such voice. I hope you find it a pleasant one :).

At the moment, there are several great resources for learning TypeScript, including the proto-iconic. _TypeScript Deep Dive_, which you can read here: [http://basarat.gitbooks.io/typescript/](http://basarat.gitbooks.io/typescript/). It's a fine book and I will refer to it often throughout.

Each chapter lists out a few "further investigation" links, mostly to blog posts. The final chapter lists all of them all over again included links to advanced topics that are not (currently) covered in the book. They ought to help you in your journey.

## About the Book

I'm always a bit curious about how books like this come into being and thought I'd share a bit about my process for those of you that may be interested.

I spent about six months writing the book, including two periods (each about 3 weeks) of fairly intensive writing and many weeks with no writing. I tend to write a lot of high level bullet points and then go off and do something completely unrelated, like an out-of-control home renovation project[^5].


---
[^1]: That's not to say that they are doing it well, but they are surely giving it a try.

[^2]: Even if you're an Angular 1.x shop today, you'll want to try and get ahead of the curve by learning TypeScript. It's only a matter of time before your shop starts investing in Angular 2+.

[^3]: Given that JavaScript is already the "machine language of the web," we riches-embarrassed developers will be able to pick almost any language we want to use in the future and work seamlessly with everyone else. See more of my thoughts on this subject here: ["The Wonderful Consequences of JavaScript as the Virtual Machine Language of the Web"](https://hackernoon.com/the-wonderful-consequences-of-javascript-as-the-virtual-machine-language-of-the-web-3a65cbf887fa#.b9rxgbbrs "https://hackernoon.com/the-wonderful-consequences-of-javascript-as-the-virtual-machine-language-of-the-web-3a65cbf887fa#.b9rxgbbrs") 

[^4]: At least I think the market can bear another free, online book :\).

[^5]: It started with "hey, let's pull up the carpet and refinish the hardwood!" And then it progressed, by inches, to re-doing the hardwood in the whole first floor, pull out the old trim and replacing it, fixing cracks in the ceiling, painting the basement stairs and putting in new treads, new chandelier and kitchen stuff... It's still not done. Fun stuff, but ... maybe I shouldn't have started.