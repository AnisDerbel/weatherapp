# Demo

https://github.com/user-attachments/assets/3f3ae1c0-a1cc-419f-848c-62e4ae820752


# Architecture Overview
![weatherapp](https://github.com/user-attachments/assets/a5f948ef-e202-444d-a3b9-a92bf6e6d912)

Each screen in the application follows a modular architecture consisting of controllers, hooks, and pure components, ensuring separation of logic and UI.

Controllers: Act as intermediaries, managing UI logic and invoking hooks.

Hooks: Handle API integration and business logic, centralizing data fetching and state management.

Pure Components: Represent reusable UI elements imported from the UI library, focusing on rendering without business logic.

# Testing Strategy

The architecture is designed to facilitate separate testing of business logic and UI components, improving reliability and scalability.

Pure Components: Tested for UI behavior, element existence, and text rendering.

Custom Hooks: Verified against API interactions and state transitions (loading, error, and data handling).

Controllers: tested for expected outputs from hooks and correct interactions with components.

Screens: Responsible for navigation and composition of controllers.
  
