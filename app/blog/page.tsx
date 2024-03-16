import Link from "next/link";
import { getBlogs } from "utils/fetcher";

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <main className="prose w-screen h-screen flex flex-col justify-center items-center flex-wrap gap-4">
      <Link href="/" className="btn btn-warning">
        Home
      </Link>
      <div className="flex gap-4">
        {blogs.map((blog, index) => (
          <article key={index} className="border-2 rounded-lg p-4">
            <Link href={`/blog/${blog.slug}`} className="font-bold text-2xl">
              {blog.frontmatter.title}
            </Link>
            <p>{blog.frontmatter.author}</p>
            <p>{blog.frontmatter.publishDate}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
