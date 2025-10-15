📰 React Blog App — JSON Placeholder API Project

## 📖 Project Overview
The React Blog App is a simple yet powerful blog interface built using React.js.  
It dynamically fetches posts from the public JSON Placeholder API, simulating a real-world blogging platform.

This project demonstrates understanding of:
- Fetching and displaying API data in React
- Managing state with hooks
- Rendering lists dynamically
- Building reusable components
- Adding extra features such as search, loading states, and error handling


### ✅ Core Features
- Fetches posts from JSONPlaceholder API:  
  `https://jsonplaceholder.typicode.com/posts`
- Displays a list of blog posts dynamically.
- Each post includes a title and a brief excerpt (body text).
- Fully functional navigation between pages.

### 🌟 Bonus Features
- **Search bar:** Quickly find posts by title keywords.
- **Loading state:** Displays a loading message or spinner while fetching posts.
- **Error handling:** Shows a user-friendly message if the API fails.
- **Responsive design:** Works perfectly on both desktop and mobile devices.
- **Reusable components:** Posts are rendered using a `BlogCard` component.


## 🧠 Learning Objectives
This project helped practice and understand:
- The concept of **React components** and **props**
- Using **React Hooks** (`useState`, `useEffect`)
- Performing **API requests** using `fetch()`
- Mapping and rendering dynamic data
- Managing conditional rendering for loading and error states


## ⚙️ API Reference

**Endpoint Used:**
https://jsonplaceholder.typicode.com/posts


**Example Response:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum..."
}

💻 Technologies Used
React.js            -   Frontendframework                
Vite                -  Development server and build tool 
JavaScript (ES6)    -   Logic and interactivity           
HTML5 & CSS3        -  Structure and styling             
JSON Placeholder API-  Data source for posts             
React Router DOM    -  Routing between pages             

⚙️ Installation and Setup
1. Created project with vite

npm create vite@latest my-blog -- --template react
cd my-blog
npm install


2. Install React Router

npm install react-router-dom

3. Start dev server

npm run dev


