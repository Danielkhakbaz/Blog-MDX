import Link from "next/link";

const HomePage = async () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Link href="/blog" className="btn btn-error">
        Blog
      </Link>
    </section>
  );
};

export default HomePage;
