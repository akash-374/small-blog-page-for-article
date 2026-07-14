import { Link } from "react-router-dom";
import { BLOG_DATA } from "../data/blogData";

const BlogList = () => {
  return (
    <div className="container">
      <h2 className="section-title">Latest Articles</h2>
      <div className="blog-grid">
        {BLOG_DATA.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3 className="card-title">{blog.title}</h3>
            <p className="author-name">By {blog.author}</p>
            <Link to={`/blog/${blog.id}`} className="read-more-btn">
              Read Full Blog
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
