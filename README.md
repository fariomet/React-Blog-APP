# 📝 React Blog Application

A modern, responsive blog application built with React that fetches and displays posts from JSONPlaceholder API. Features a clean design, search functionality, and smooth navigation between pages.

## ✨ Features

- Responsive Design - Works perfectly on desktop, tablet, and mobile
- Search Functionality - Filter posts by title in real-time
- Post Details - Full post view with author information
- Fast Navigation - Smooth page transitions with React Router
- Clean UI - Modern, professional design with custom CSS
- Loading States - Elegant loading spinners and error handling
- Author Details - Displays post author information from API

## 🛠 Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP requests
- **Custom CSS** - Styling with CSS variables and responsive design
- **JSONPlaceholder API** - Fake REST API for blog data

## 📦 Installation & Setup

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (version 14 or higher)
- **npm** (usually comes with Node.js)

### Step 1: Clone or Download the Project
If you have the project files, navigate to the project directory:
```bash
cd react-blog-app
```

### Step 2: Install Dependencies
Install all required packages:
```bash
npm install
```

This will install:
- `react` & `react-dom`
- `react-router-dom` (for navigation)
- `axios` (for API calls)

### Step 3: Start the Development Server
Run the development server:
```bash
npm run dev
```

### Step 4: View the Application
Open your browser and visit:
```
https://react-blog-app-eight-drab.vercel.app/
```

The app will automatically reload if you make any changes to the code.

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with optimized files ready for deployment.

## 📁 Project Structure

```
my-blog/
├── public/
│   ├── index.html
│   └── ...static assets
├── src/
│   ├── components/
│   │   ├── Loading.jsx         # Loading animation
│   │   └── postCard.jsx        #  Individual post preview card
│   ├── pages/
│   │   ├── Home.jsx           # Main posts listing page
│   │   └── PostDetails.jsx    # Single post detail page
│   ├── styles/
│       ├── index.css  
│   ├── api.js
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # Application entry point
│   └── index.css              # All styles and responsive design
├── package.json
└── README.md
```

## 🎯 Key Implementation Details

### Data Fetching
- Uses `axios` for API calls to JSONPlaceholder
- Implements custom React hooks (`usePosts`, `usePost`)
- Handles loading states and error scenarios gracefully

### Routing
- Home route (`/`) - displays all posts
- Post detail route (`/post/:id`) - shows individual post with author info
- Uses React Router for client-side navigation

### Responsive Design
- Mobile-first CSS approach
- CSS Grid and Flexbox layouts
- CSS custom properties for consistent theming
- Breakpoints for tablet and desktop views

### Features Implemented
- ✅ Post listing with excerpts
- ✅ Search and filter functionality
- ✅ Post details with full content
- ✅ Author information display
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Clean, professional UI

## 🌐 API Endpoints Used

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Users**: `https://jsonplaceholder.typicode.com/users/:id`

## 🎨 Customization

You can easily customize the app by modifying the CSS variables in `src/styles/index.css`:

```css
:root {
  --max-w: 900px;        /* Maximum container width */
  --accent: #2563eb;     /* Primary brand color */
  /* Add more variables as needed */
}
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React**
