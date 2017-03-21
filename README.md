# Introduction - Why TypeScript?

Greetings and welcome to this casual introduction to the exciting world of TypeScript!

As I write these words, the JavaScript development community continues to grow in size. Its tooling options are more numerous than ever before. Great tooling affords the community the opportunity to build truly amazing solutions on the front and back end. The opportunity landscape expands every day. This is an age where we lucky few get to apply our intellect to some fascinating problem domains. These are exciting times!

The community's ranks are also growing for several reasons. It's comparatively easy to build front-end applications versus classic server-side counterparts \(think Java/.NET\). Some server-side devs from the .NET and Java world see this and want to jump up onto the bandwagon. At the same time, the entrance fee is quite low - newly minted developers can quickly build JavaScript solutions with minimal tooling and without the need for extravagant training[^1]. Experienced server-siders need even less time to get up pto speed. 

We're also inundated with options. We have full blown frameworks like Angular, React, Ember, Meteor, Vue and others. We have sophisticated task runners such as gulp and grunt. We have classic go-to utility libraries such as JQuery, lodash and underscore. 

This begs the question, why should we further complicate our lives and take time to learn about TypeScript? 

I believe there are two good reasons to look at TypeScript - its growing popularity and - more importantly - the pure joy of working with it.

## TypeScript's Popularity

For starters, at least one major framework \(Angular\) pushes you hard into using TypeScript. If you work at an Angular shop, you have a strong practical reason to learn it[^placeholder1]. Other frameworks provide TypeScript-friendly features or vice-versa. For instance, TypeScript benefits React development by supporting JSX. 

Some poeple might characterize "learn it because you *need* it for future dev work" as a "negative externality" and not exactly _popular_.  That would be fair. But consider the fact that many pure JS library authors have worked hard to provide TypeScript-friendly interfaces. Here's the DefinitelyTyped project:

![](/assets/DefinitelyTypeAsOf2017_03_05.png)

I'll explain typings later in the book. At a high level, they help bridge the gap between TypeScript and pure JavaScript libraries. I bring up the DefinitelyTyped github project because it shows a that a good-sized group of library developers and/or devotees think it's worth their time to create these typings. With over 3,000 contributors, almost 27k commits and pushing 10k stars - the project offers some evidence that it's worth your while learning about this.

All of this is to say that TypeScript has and continues to gain traction in the JavaScript community. The jury is still out as to whether it will "win" and become a truly main stream scripting language for web dev. It probably won't become _the_ language of the web[^2]. But its appeal cannot be denied. A growing swath of current and future front end developers are choosing TypeScript over pure JavaScript.

## The Pure Joy Of It

TypeScript's growing popularity answers the "Why TypeScript" question in part. A lot of us aren't swayed by popularity, however. I'm sympathetic to that point of view. 

I came to TypeScript after spending about three or four years building solutions that contained minor to major bits of client-side code. [You can see an example here](http://www.bigapplesharepoint.com). I used jQuery for DOM manipulation and async work and lots of straight JS logic. I struggled with all the usual things at first, like closures, how to test for `null` or `undefined`. i eventually came to an uneasy understanding of these things but some problems never went away. I found it difficult to reliably apply common design patterns and plain JavaScript is terribly difficult to refactor.

As you'll discover in chapter 4, TypeScript is a statically typed language. Or at least, you can use types if you want. It's much less ambiguous than plain JavaScript both from an "intent" perspective "what did the programming intend with this code" as well as a technical perspective. Since TypeScript tends to eliminate ambiguity, IDEs can provide better support.

These two points combine to make working with TypeScript a truly joyful experience. Closure complexities recede. It's more difficult to accidentally assign strings to numbers. Refactoring isn't as difficult so you're likely to make necessary changes in a timely manner rather than pile on a little more technical debt. It's a breeze to manage complex objects. 

For me, TypeScript is like starting to cook a big, complicated meal in a freshly cleaned kitchen. It is, simply, a joy.

## Why *Another* TypeScript Book?

The market has given rise to several books, free and not-free. This hasn't stopped me from writing this one because I believe the market can bear another one[^3]. At the same time, different people learn things differently - more teaching "voices" help more people. At the end of the day, service of this sort to others provides sufficient motivation.

At the moment, there are several great resources for learning TypeScript, including the proto-iconic. _TypeScript Deep Dive_, which you can read here: [http://basarat.gitbooks.io/typescript/](http://basarat.gitbooks.io/typescript/). It's a fine book and I will refer to it often throughout.


---
[^1]: That's not to say that they are doing it well, but they are surely giving it a try.

[^2]: Given that JavaScript is already the "machine language of the web," we riches-embarrassed developers will be able to pick almost any language we want to use in the future and work seamlessly with everyone else. See more of my thoughts on this subject here: ["The Wonderful Consequences of JavaScript as the Virtual Machine Language of the Web"](https://hackernoon.com/the-wonderful-consequences-of-javascript-as-the-virtual-machine-language-of-the-web-3a65cbf887fa#.b9rxgbbrs "https://hackernoon.com/the-wonderful-consequences-of-javascript-as-the-virtual-machine-language-of-the-web-3a65cbf887fa#.b9rxgbbrs") 

[^3]: At least I think the market can bear another free, online book :\).

[^placeholder1]: Even if you're an Angular 1.x shop today, you'll want to try and get ahead of the curve by learning TypeScript. It's only a matter of time before your shop starts investing in Angular 2+.