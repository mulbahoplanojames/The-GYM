🔧 JavaScript before() Method Interview Questions
📘 Conceptual Understanding

    What does the before() method do in the DOM? How does it differ from insertBefore()?

    Which DOM nodes can call the before() method, and what types of arguments can it accept?

    What is the effect of calling before() on a node that has no parent in the DOM?

    How does the before() method behave if the inserted node is already in the DOM elsewhere?

    Is before() a method on the parent node or the target node itself? Explain with an example.

🔨 Practical Usage

    Write code that inserts a new <h2> title immediately before an existing <div> with the ID content-section.

    Demonstrate how to insert a text node before a paragraph using the before() method.

    How would you create and insert a custom alert banner before a form element when validation fails?

    Write a function that prepends a set of <li> elements before a specific <li> in an unordered list. Use before() and a loop.

    How can before() be used to reorder elements dynamically—for example, moving a card element above another card?

🧠 Advanced Use & Edge Cases

    Compare before() with insertBefore(), prepend(), and insertAdjacentElement(). In which situations is before() preferred?

    Can you use before() to insert multiple nodes or mixed content (e.g., strings and elements)? How does the method handle them?

    How does before() handle DocumentFragments? Is the entire fragment inserted or just its children? Explain.

    What happens if before() is called on a node that’s not connected to the DOM tree yet? Will the method throw an error?

    Can before() be used to manipulate elements inside a Shadow DOM or an iframe? If so, what special considerations apply?
