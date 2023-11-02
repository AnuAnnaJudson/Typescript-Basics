#### What is typescript?
* Open-source programming language from Microsoft
* Typed superset of JavaScript(Typescrpt files are transpiled down to plain js use command : tsc <filename.ts>)
* Compiles down to plain JavaScript

#### Why typescript?
1. With static type checking, you get to learn about potential bugs as you're typing the code, than
   heading to the browser and figuring out at runtime
2. Provides a way to describe the shape of an object hence providing better documentation and
   autocomplete
3. Makes maintenance and refactoring of large code bases much easier

* Cannot assign another type value to the type which is already specified
* Using typescript can also enable the IDE to give suitable suggestions of inbuilt function according to type(intellisense support)

##### use ```tsc main.ts``` for generating main.js file, transpile the ts to js
##### use ``` tsc main --watch``` to reflect changes in js files everytime the .ts file is saved, automatically
##### use ```node main.js``` to run the js file
