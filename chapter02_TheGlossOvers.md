## The Gloss-Overs

This book focuses on what consider to be the "main" bits of the TypeScript language. This narrows its scope and as a result, several topics that you might think a table of contents informed by common sense would include are not, in fact, included[^1]. To wit:

<div style="float:right">
    <a href="https://www.flickr.com/photos/35237092540@N01/8167731771/"><img width="200px" src="/assets/BarackObama.jpg"></a>
</div>- History of TypeScript: It's an interesting topic[^2], but doesn't help achieve this book's practical aims. If you want to learn more
History of TypeScript, [consult the great people at Wikipedia to start](https://en.wikipedia.org/wiki/TypeScript#History).

- IDEs, deployment processes, webpack and task runners: This stuff is changing almost all the time, almost on a weekly basis. If I were to go all in, recommending some particular "TypeScript starter", it would be overtaken by newer, more streamlined solutions by the time you read my recommendation. In addition, the various starters you find on the interwebs tend to be framework-dependent. One family of starter projects supports Angular, another React, etc. This book isn't about those frameworks. 

Beyond those non-language features, the book also ignores what I consider to be more advanced and/or situational topics. These are:

- Decorators. Decorators allow you to enhance the functionality a TypeScript artifact, such as a class or property. This assignment is done in a declarative manner and can enhance the targeted artifact without the knowledge or consent of the artifact. It's fairly meta, I know :). They are very powerful and may become a common thing for people to do over time. However, I think they are too advanced for my target audience. In the chapter, *Continue Learning*, I point out a few great blog posts and github projects that showcase them. 

- Modules: Modules are not particularly complicated, but they mostly support bundling and other tooling (such as webpack). I'm on the fence as to whether I include a chapter on modules even as I write this. For now, I won't and I will refer you to good overviews of modules in the *Continue Learning* chapter.

- Mixins, intersection types and the like: I cover what I consider to be the "core" language features. As with decorators, some topics are fairly advanced while also being of use in a fairly narrow band of business applications. I didn't want to throw too many concepts out there. As a result, I leave these out of the book and invite you to learn about them from other sources.

That's enough on what's not covered. Let's move on to first big topic, how the heck does TypeScript work in the first place?

[^1]: Of course, we don't necessarily share the same sense of what's common. If you don't like mine, write your own book :). Or, suggest I add more content via a github issue or email me directly. The intro chapter provides links to both of these options.

[^2]: Did you know that TypeScript is over five years old? In the U.S., President Barack Obama was only just about to get re-elected to office when Microsoft released this language. Coincidence? Who knows? (Photo of Barack Obama from Peter Prodoehl @ https://www.flickr.com/photos/raster/).
