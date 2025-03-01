import Image from "next/image";
import Link from "next/link";

function BlogCard() {
  return (
    <div className="flex flex-col gap-2 items-start card bg-base-100 border border-base-300">
      <figure>
        <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          width={400}
          height={300}
          className="size-full"
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title text-xl font-bold">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <Link href="/blog" className="btn btn-block">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
