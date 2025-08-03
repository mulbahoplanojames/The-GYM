🔧 JavaScript DocumentFragment Interview Questions
📘 Conceptual Understanding

    What is a DocumentFragment in JavaScript, and how does it differ from a regular DOM node?

    What is the main benefit of using a DocumentFragment when manipulating the DOM?

    How does DocumentFragment help improve performance in complex DOM operations?

    Can you explain how DocumentFragment interacts with the DOM tree? Is it part of the live DOM when created?

    What happens to the child nodes inside a DocumentFragment once it is appended to the DOM? Are they cloned or moved?

🔨 Practical Usage

    Write code that creates a list of 100 <li> elements and appends them to a <ul> using a DocumentFragment.

    How would you use DocumentFragment to insert multiple dynamically created product cards into a container efficiently?

    Demonstrate how to build and append a navigation bar using DocumentFragment and createElement().

    How would you use DocumentFragment to re-order multiple elements in the DOM without causing layout thrashing?

    Write a function that accepts an array of strings and prepends each as a new <p> to a container using DocumentFragment.

🧠 Advanced Use & Edge Cases

    Does a DocumentFragment preserve event listeners when moved or appended to the DOM? Why or why not?

    Is it possible to use querySelector() or getElementById() on a DocumentFragment? If so, what are the limitations?

    How does DocumentFragment behave when nested (e.g., one fragment inside another)? Can this be useful?

    How would you conditionally insert a DocumentFragment into the DOM only if a target container is empty or meets a condition?

    Compare DocumentFragment with virtual DOM approaches (e.g., React’s virtual DOM). What are the similarities and differences?
