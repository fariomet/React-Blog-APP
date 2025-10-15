import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostById, fetchUserById } from "../api";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData);

        const userData = await fetchUserById(postData.userId);
        setAuthor(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

//   if (loading) return <p>Loading post details...</p>;
if (loading)
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading post...</p>
    </div>
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="post-details">
      <Link to="/" className="back-btn">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {author && (
        <div className="author">
          <h4>Written by: {author.name}</h4>
          <p>Email: {author.email}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
