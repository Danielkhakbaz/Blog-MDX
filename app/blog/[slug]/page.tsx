import Link from "next/link";
import { getBlogBySlug, getAllBlogs } from "utils/fetcher";

export const generateStaticParams = () => {
  return getAllBlogs();
};

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogBySlug(params.slug);

  return (
    <main className="prose">
      <Link href="/blog" className="btn btn-warning">
        Go Back
      </Link>
      <article>{blog.content}</article>
    </main>
  );
};

export default BlogSlugPage;
