question-1(what is difference between getElementById,getElementsByClassname and querySelector,querySelectorAll)

ans:-getElementById works only for one element,give only one element by using getElementById,and it is unique.

getElementsByClassName works for many element with using same class name,it gives multiple elements.

querySelector: using querySelector it gives only first the element 

querySelectorAll: it gives multiple elements which is using same css selector





question-2(how do you create and insert a new element into the dom)

Ans: how to create element using dom: document.createElement('tag name') then innerHTML or innerText used to create a ne element in dom
how to insert element: appendChild used to insert for a new element in dom




question-3(what is event bubbling and how does it works)

Ans: eventBubbling is like a tree method which is break all the tags of a html file.
first come parentNode then comes its childnode,after that how many child contains this tag,then gives this childTag.
like first gives html then head and body the how many child tag contains this head tag or body tag.then gives its child tag.





question-4(what is event delegation in javascript? why is it useful)

Ans: event delegation is a technique,which is event attached in the parent element to performance a easy coding.
it is useful because using only one event listener for many elements.its code is small and easy to write.



question-5(what is the difference between preventDefault() and stopPropagation() methods)
Ans: preventDefault() used for to prevent form submission and to prevent navigating to another page when clicking a link

stopPropagation() used to stop event bubbling