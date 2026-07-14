import { useParams, Link } from "react-router-dom";
import { BLOG_DATA } from "../data/blogData";

const BlogDetail = () => {
  const { id } = useParams();

  // Find the blog matching the ID in the URL
  const blog = BLOG_DATA.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="container">
        <h2>Blog Not Found!</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        ← Back to All Blogs
      </Link>

      <article className="full-blog-content">
        <h1 className="detail-title">{blog.title}</h1>
        <p className="detail-author">Written by: {blog.author}</p>
        <hr className="divider" />
        <p className="detail-body">{blog.content}</p>
      </article>
    </div>
  );
};

export default BlogDetail;
