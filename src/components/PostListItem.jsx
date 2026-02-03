import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {

  return (
    <Link to={`/${post.slug}`} className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-xl md:text-4xl font-semibold text-ellipsis overflow-hidden">
          <p className="">{post.title}</p>
        </Link>
        <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm">
          <span>Escrito por</span>
          <span className="text-[#147260] font-medium cursor-pointer">{post.user.username}</span>
          <span>categoria</span>
          <Link to={`/posts?cat=${post.category}`} className="font-medium text-[#147260]">{post.category}</Link>
          <span>há</span>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-[#147260] font-semibold text-sm">
          Ler mais
        </Link>
      </div>
    </Link>
  );
};

export default PostListItem;