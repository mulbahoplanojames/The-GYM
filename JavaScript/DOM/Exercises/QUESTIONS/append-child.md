🔧 JavaScript appendChild() Interview Questions
📘 Conceptual Understanding

    What is the purpose of the appendChild() method in the DOM, and what does it return?

    Can you explain the difference between appendChild() and append()? Which one is more flexible and why?

    What happens if you try to append a DOM element that already exists elsewhere in the DOM using appendChild()?

    What are some situations where using appendChild() would be inappropriate or lead to unexpected results?

    Can appendChild() be used to add text directly to an element? Why or why not? If not, what should you do instead?

🔨 Practical Usage

    Write a JavaScript function that creates a <li> element and appends it to an existing <ul> with the ID task-list.

    How would you append multiple newly created elements efficiently to a container using appendChild()? Why might using DocumentFragment help in this situation?

    Given a reference to an existing DOM node, write code to create a new <div> element and insert it as the last child of that node.

    What will happen if you use appendChild() to append the same element multiple times? Demonstrate this with code.

    How can you use appendChild() in combination with createElement() to build a simple card component (title and description) and add it to the DOM?

🧠 Advanced Use & Edge Cases

    If you use appendChild() to add a child to a node that already contains it, will it clone the node or move it? Explain the behavior.

    What will happen if you attempt to appendChild() on a node that doesn’t exist in the DOM yet? Will it throw an error? Why or why not?

    How can you use appendChild() to dynamically build a nested structure like a navigation menu or a tree view? Describe the approach.

    Is it possible to use appendChild() with text nodes or comment nodes? Provide examples.

    Discuss how appendChild() behaves in different document contexts like <iframe> or Shadow DOM. How would you adapt your code to handle those cases?
