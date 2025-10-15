
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/postDetails.jsx";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className="logo">My Blog</Link>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
