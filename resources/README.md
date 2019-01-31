readme.md

## goals
- to use class and ids only for style
- semantic tags only for semantic purposes that can change?

## cautions
- DocumentFragment not fully supported https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
-

## what's new?
- script defer: https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Loading
- last css import: https://css-tricks.com/precedence-css-order-css-matters/
- no html4 type="text/javascript"

## other sources
tons https://developer.mozilla.org/en-US/
html beautifier https://codebeautify.org/htmlviewer/
html symbols https://www.w3schools.com/charsets/ref_utf_symbols.asp

## what's next?
- can i run all browser queries at once for only one reflow? one reflow function to grab all my elements at once?

## trivia
- null and undefined are data types while false is a value for a boolean which is a data type: In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015). Undefined reflects the absense of values. null reflects a the absence of an objects/variable.

## roadbumps
- fragment creation... const fragBod = DocumentFragment(bod);
- my index/callStack model didn't work because of weird scope issues. which is a pitty because you would have a very clear order of opporations for quickly understanding how something is built. couldn't even declare the variables global at the start like php. getElements(); makeFragments(); test();
- null in safari? document.querySelector('.cards');
- i thought it'd be cool to make dynamic card variable but i looks hard: const "card" + i = cards[i];
- why is event function running w/o any clicking? cards[i].addEventListener("click", cardClick())
