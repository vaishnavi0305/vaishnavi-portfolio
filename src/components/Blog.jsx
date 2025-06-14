import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const blogs = [
  {
    title: 'AWS vs Azure: A Cloud Comparison',
    file: 'aws-vs-azure.md',
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (selectedBlog) {
      fetch(`/blogs/${selectedBlog}`)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [selectedBlog]);

  return (
    <section id="blog" className="bg-gray-100 text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 inline-block border-blue-500">
          Blog
        </h2>

        {!selectedBlog && (
          <div className="grid gap-6 text-left">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded cursor-pointer hover:bg-blue-50"
                onClick={() => setSelectedBlog(blog.file)}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">Click to read more...</p>
              </div>
            ))}
          </div>
        )}

        {selectedBlog && (
          <div className="bg-white p-6 mt-8 shadow-md rounded text-left">
            <button
              onClick={() => setSelectedBlog(null)}
              className="text-blue-600 text-sm mb-4 hover:underline"
            >
              ← Back to Blog List
            </button>

            {/* Correct usage without className */}
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl font-semibold mb-3" {...props} />,
                p: ({node, ...props}) => <p className="mb-2 text-gray-700" {...props} />,
                li: ({node, ...props}) => <li className="list-disc ml-6 text-left text-gray-700" {...props} />
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
