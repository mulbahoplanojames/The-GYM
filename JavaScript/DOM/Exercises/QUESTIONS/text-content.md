🔧 JavaScript textContent Interview Questions
📘 Conceptual Understanding

    What is the purpose of the textContent property in the DOM? How does it differ from innerText and innerHTML?

    What kind of value does textContent return when accessed on a DOM element with child elements?

    How does textContent treat whitespace and hidden elements (e.g., display: none) in contrast to innerText?

    Is textContent a method or a property? How does that affect how you use it in code?

    Can textContent be used on both element nodes and text nodes? What happens when it is?

🔨 Practical Usage

    Write a function that retrieves and logs the textContent of all <p> tags on a page.

    How can you use textContent to remove all child elements and replace them with plain text? Provide an example.

    Demonstrate how to dynamically update the text content of a <span> element showing a live countdown timer.

    How can you use textContent to sanitize user input before displaying it on the page? Compare this to innerHTML.

    Write code that sets the textContent of an element to a string that includes special characters like <, >, and &. What will be the result and why?

🧠 Advanced Use & Edge Cases

    What will textContent return when called on a node that has only comment or whitespace child nodes?

    How does setting textContent on an element affect its child nodes and structure? Is it destructive?

    Can textContent be used to extract all visible and hidden text from a deeply nested element tree? Why or why not?

    If a DOM node contains both elements and text, how does textContent handle this mixture when reading and writing values?

    What’s the impact of using textContent inside loops when rendering large amounts of data? Are there performance considerations compared to other approaches?
