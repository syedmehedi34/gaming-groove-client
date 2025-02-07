# Project Name : _Gaming Groove : A Game Review Application_
<img src="https://i.ibb.co.com/YBb4VYPb/gaming-groove-title.png" alt="AMS Screenshot" style="width: 100%; display: block; margin: 0 auto;">

## Project Requirements : https://docs.google.com/document/d/1MLY5uKcQQfrVWuLN6xZk6uXFq6sPhmnSryaavn1nUQw/edit?tab=t.0#heading=h.spqqwm7b6xdw

## Live Link - https://gaming-groove.surge.sh/

**Project Description :** Build a **Gaming Groove,** a user-friendly game review application . The goal of this project is to design a platform where users can explore and share game reviews. You need to develop key features such as user authentication and review management to enhance the user experience. The application should have a clean and respogansive UI, focusing on simplicity and functionality to provide a "chill" experience.

### Key Features:

- **Best Games**: Here a user can find a wide range of games review for his entertainment.
- **User-Friendly Interface**: An organised and responsive design for both desktop and mobile, ensuring a smooth collecting coupons experience on any device.
- **Detailed Product Listings**: Each reviews have includes a short description with each details of the game with review.
- **Easy register and login**: Secure login and register options. Login with google also available
- **User Dashboard**: User can see his given review, and edit or delete his own review.
- **Watch List**: User can set a game to his watch list for later.

### Technologies Used:

- **React**: Building the user interface with reusable components.
- **Tailwind CSS & DaisyUI**: Styling the website with a modern, responsive design and pre-styled components.
- **React Router**: Enabling seamless navigation across different pages.
- **React Awesome Components**: Adding interactive UI elements for an engaging user experience.
- **React Icons**: Enhancing visuals with a variety of scalable icons.
- **Context API**: Managing global state efficiently across the application.
- **Firebase Authentication**: Used firebase authentication for register and login. Used firebase google authentication also.
- **MongoDB**: MongoDB as the database to store review data and other informations.

### React Fundamental and Advanced Concepts Used

1.  **JSX (JavaScript XML)**: Enables writing HTML-like syntax directly within JavaScript, making the UI more readable and declarative.
2.  **Components**: Modular, reusable components that define different parts of the app, such as product cards, navigation bars, and the footer.
3.  **Props**: Passes data from parent to child components, allowing customisation and dynamic content for different sections of the app.
4.  **State Management**: Manages data within components (e.g., user inputs, product lists, and cart items) and updates the UI when state changes.
5.  **Event Handling**: Manages user interactions like clicks and form submissions, enhancing interactivity.
6.  **Conditional Rendering**: Dynamically displays components based on specific conditions, such as displaying loading indicators or product details based on availability.
7.  **Lists and Keys**: Efficiently renders lists of items (like products) with unique keys for optimised rendering and identification.
8.  **Context API**: Provides a way to share global state across multiple components, avoiding prop drilling (useful for shared data like user authentication and cart data).
9.  **React Router**:
    - **useLocation**: Retrieves the current location object, helpful for conditional rendering based on the current route or page.
    - **useNavigate**: Allows programmatic navigation between pages (e.g., redirecting to the checkout page after adding items to the cart).
    - **useLoaderData** (if using React Router v6): Fetches data for a particular route before rendering, ensuring that essential data is loaded ahead of time.
10. **Lifecycle Methods with Hooks**:

    **useEffect**: Handles side effects like data fetching, updating the title, or setting up subscriptions after rendering.

11. **Error Boundaries** (if applicable): Catches and handles errors in components to prevent the entire app from crashing.
12. **MongoDB** for the database data store.

### Data Handling and Management

1.  **Context API**: Manages global state for data like user authentication and shopping cart, accessible across components.
2.  **Local Storage**: Local storage used for locally store some users information for the best user experience.
