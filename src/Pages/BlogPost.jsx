import React from "react";
import { useParams, Link } from "react-router-dom";
import { insights } from "../data/blogData";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = insights.find((post) => post.slug === slug);

  if (!blog)
    return <div className="text-center py-20 text-red-500">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/blog" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
      <img
        src={blog.imageSrc}
        alt={blog.alt}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.fullContent}
      </div>
    </div>
  );
};

export default BlogPost;
