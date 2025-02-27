import { unstable_cache } from "next/cache";
import Link from "next/link";

const createBlog = unstable_cache(
  async (formData: FormData) => {
    "use server";
    const blogs = await db.select().from(blogTable);
  },
  ["posts"],
);

function BlogCard() {
  return (
    <div className="card bg-base-100 border border-base-300">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <Link href="/blog" className="link text-base font-bold link-hover mt-8">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
