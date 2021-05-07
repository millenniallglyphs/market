import { useState } from "react";
import Link from "next/link";

function BlogList({ blogs }) {
  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">Posts</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {blogs.map((blog) => (
          <div key={blog._id} {...blog}>
              <Link href={`/blog/${blog.slug.current}`}>
                <a>
                  {blog.title}
                </a>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
