
import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const excerpt = post.body
    ? post.body.length > 80
      ? post.body.slice(0, 80) + "..."
      : post.body
    : "No content available.";

  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      {post.author && (
        <p className="author-date">
          <strong>{post.author}</strong>{post.date ? ` | ${post.date}` : ""}
        </p>
      )}
      <p className="excerpt">{excerpt}</p>
      <div className="card-actions">
        <Link to={`/posts/${post.id}`} className="btn">
          Read More
        </Link>
      </div>
    </article>
  );
}
