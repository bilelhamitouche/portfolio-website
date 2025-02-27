import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section id="blog" className="py-12 px-8 md:py-24 lg:py-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <BlogCard />
      </div>
    </section>
  );
}

export default Blogs;
