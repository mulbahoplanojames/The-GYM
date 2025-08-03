🔧 JavaScript append() Interview Questions
📘 Conceptual Understanding

    What is the primary purpose of the append() method in the DOM, and how does it differ from appendChild()?

    Can append() accept multiple arguments? If yes, what types are allowed?

    What is the difference between appending a Node and a string using append()? What happens in each case?

    What will happen if you try to append a DOM element that already exists elsewhere in the document?

    Does the append() method return any value? How can this affect method chaining or function composition in your code?

🔨 Practical Usage

    Write a function that uses append() to add both a text string and a newly created <span> element to a <div> element.

    Given a list of names in an array, write code that creates a <ul> and appends each name as a <li> using append().

    How would you append content conditionally using append() (e.g., append a message only if the container is empty)?

    Demonstrate how append() can be used to simplify code compared to appendChild() when adding mixed content.

    How can you use append() to insert a warning message below a form field only when a validation error occurs?

🧠 Advanced Use & Edge Cases

    Compare append(), appendChild(), and innerHTML. What are their pros and cons, especially with performance and security in mind?

    What are the limitations of append() with respect to browser compatibility? Are there any older browsers or environments where it's not supported?

    How does append() behave if one of the elements being appended is already part of the same parent node?

    Can you use append() inside a DocumentFragment? What are the performance benefits of this approach?

    How would you handle a situation where you want to append() both dynamic text and elements while ensuring accessibility (like ARIA labels)?
