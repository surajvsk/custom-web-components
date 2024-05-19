Web development has evolved significantly over the years, and one of the modern advancements is the introduction of web components. These components enable developers to create reusable and encapsulated HTML tags that can be used across different parts of a web application. In this article, we’ll walk through a practical example of creating custom web components using HTML, CSS, and JavaScript.

Understanding the Basics
Web components consist of three main technologies:

Custom Elements — Define new HTML elements.
Shadow DOM — Encapsulate the internal structure of the component, ensuring it is isolated from the rest of the document.
HTML Templates — Define chunks of markup that can be reused multiple times.

JavaScript for Custom Components
Next, we define our custom components in components.js. Each component is a class extending HTMLElement, and we define its structure in the connectedCallback method, which is called when the element is added to the document.


Explanation of the Code

Document Ready Listener: We use document.addEventListener(“DOMContentLoaded”, …) to ensure the custom elements are defined after the DOM is fully loaded.

Component Classes: Four classes are defined: VHeader, VMenu, VMain, and VFooter, each extending HTMLElement.

connectedCallback: This lifecycle method is called when the element is added to the DOM. It calls the render method to set the inner HTML of the component.

Render Methods: Each class has a render method that sets its inner HTML. For instance, VHeader contains a div with a title and a v-menu component.

Custom Element Definitions: Finally, we register each component with customElements.define, associating the tag names (v-header, v-menu, v-main, v-footer) with their respective classes.

Benefits of Using Custom Components
Reusability: Components can be reused across multiple pages or projects.
Encapsulation: The internal structure and styles of a component are encapsulated, preventing conflicts with other parts of the application.
Maintainability: Separating different parts of the UI into components makes the codebase easier to maintain and understand.
