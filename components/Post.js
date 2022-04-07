import Link from "next/link";

export default function Post({ post }) {
    return (
        <div>
        <span>{post.id}</span>
        {" : "}
        <Link href={`/posts/${post.id}`} passHref>
            <span className="cursor-pointer text-whhite border-b border-gray-500 hover:bg-gray-600">
                {post.title}
            </span>
        </Link>
    </div>
    );
}