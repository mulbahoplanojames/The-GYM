🔧 JavaScript innerHTML Interview Questions
📘 Conceptual Understanding

    What is the purpose of the innerHTML property in the DOM? How does it differ from textContent and innerText?

    What kind of value does innerHTML return? How is it different from the actual DOM structure?

    Is innerHTML a method or a property, and how does this impact how it is used?

    Can innerHTML be used to both read and write HTML content? What are the limitations when doing so?

    What happens if you set innerHTML with invalid or malformed HTML? How does the browser respond?

🔨 Practical Usage

    Write code that uses innerHTML to inject a simple HTML card (with <h2> and <p>) into a <div> with ID container.

    How would you use innerHTML to dynamically generate and display a table of user data from an array of objects?

    What is the effect of setting element.innerHTML = ''? How does this compare with element.remove() or element.textContent = ''?

    Demonstrate how innerHTML can be used to add a form dynamically to the page. What are the caveats?

    How can you use innerHTML to include HTML content from an API response? What precautions should you take?

🧠 Advanced Use & Edge Cases

    Discuss the security risks of using innerHTML, especially in the context of user-generated content. What is XSS, and how can you mitigate it?

    What are the performance drawbacks of using innerHTML repeatedly to update DOM content inside a loop? How can you improve this?

    How does browser parsing behave when assigning innerHTML that includes <script> or <style> tags?

    Can innerHTML be used to insert event listeners? Why or why not? What are the alternatives?

    Compare and contrast using innerHTML vs document.createElement() and appendChild() for building dynamic UI elements. What are the trade-offs in terms of performance, maintainability, and security?
