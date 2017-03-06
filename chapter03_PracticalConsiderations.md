# Practical Considerations
If you haven't started using TypeScript at all or you've barely scratched the surface, this chapter is for you. 

TypeScript shares something in common with virtually every other computer language - a TypeScript program is just a text file. Computers can't run it without first transforming that text to machine language. We call that process *compilation*, of course and it isn't exactly a new thing under the sun[^1].

These days, many popular languages don't even compile down to machine language. Java compiles down to bytecode and executes in the context of a virtual machine. C# and other .NET languages compile down to bytecode as well, albeit a different format. They run in a  different virtual machine (the compile language runtime or CLR)[^2]. We programmers live in a world of virtual machines. These include, importantly, the web browsers that frequently run our web apps.



[^1] The name of this book itself pays homage to YACC, a compilation tool whose full name is "Yet Another Compiler Compiler." If you've eve been interested in writing a compiler (who isn't, really?) then YACC could be the first string you pull from that ball of string.
[^2]You maybe interested in a bit of historical context. When Microsoft first came out and announced .NET and this concept of a common language runtime, quite a few people (including me, sad to say) scoffed at the idea. Back then, there was no C#, or it was in its infancy. Borland C++ and things like Delphi had a lot of mind share, if not market share. It's been quite a journey and fascinating thing to look back and realize how far we've come as an industry.