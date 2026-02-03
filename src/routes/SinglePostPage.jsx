import { Link,  useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import NotFound from "../components/NotFound";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { ImFacebook, ImTwitter, ImReddit, ImWhatsapp } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import CopyButton from "../components/CopyButton";
import Loader from "../components/Loader";
import Helmet from "../components/helmet";
import Footer from "../components/Footer";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

export default function SinglePostPage() {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return <Loader />;
  if (error) return "Something went wrong!" + error.message;
  if (!data) return <NotFound />;

  const sharePost = `https://tecnodog.vercel.app/${slug}`
  const cardImage = `https://ik.imagekit.io/tecnodog${data.img}`

  return (
    <div>
      <div className='flex flex-col gap-8'>
      <Helmet
        title={data.title}
        description={data.desc}
        link={sharePost}
        keywords={data.keywords}
        imageCard={cardImage}
        largeTwitterCard={true}
        addPostfixTitle={true}
      />
      {/* detail */}
      <div className='flex flex-col gap-8'>
        <div className='lg:w-full flex flex-col gap-6 md:gap-8'>
          <h2>
            <Link to="/" className="bg-[#5f4b8b] text-white px-[10px] py-[3px] rounded">Inicio</Link>
            <span> • </span>
            <Link to={`/posts?cat=${data.category}`}>{data.category.toUpperCase()}</Link>
          </h2>
          <h1 className='text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-semibold'>
            {data.title}
          </h1>
          <p className='text-gray-500 font-medium'>
            {data.desc}
          </p>
          <div className='flex items-center gap-4'>
            <FacebookShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#1F74DE] hover:text-white hover:bg-[#1F74DE] p-2 text-xl rounded-full share">
                <ImFacebook />
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#1da1f2] hover:text-white hover:bg-[#1da1f2] p-2 text-xl rounded-full share">
                <ImTwitter />
              </div>
            </TwitterShareButton>
            <RedditShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#F94503] hover:text-white hover:bg-[#F94503] p-2 text-xl rounded-full share">
                <ImReddit />
              </div>
            </RedditShareButton>
            <WhatsappShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#25d366] hover:text-white hover:bg-[#25d366] p-2 text-xl rounded-full share">
                <ImWhatsapp />
              </div>
            </WhatsappShareButton>
            <TelegramShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#0088cc] hover:text-white hover:bg-[#0088cc] p-2 text-xl rounded-full share">
                <FaTelegramPlane />
              </div>
            </TelegramShareButton>
            <CopyButton text={sharePost} />
          </div>
          <div className='flex items-center gap-3 text-gray-600 text-sm'>
            <div className="">
              {data.user.img && (
                <img 
                  src={data.user.img}
                  className="w-10 h-10 rounded-full object-cover"
                  width={48}
                  height={48} 
                  alt="" 
                />
              )}
            </div>
            <div className="flex flex-col">
              <div>
                <span>Escrito por </span>
                <span className='text-[#147260] cursor-pointer'>{data.user.username}</span>
              </div>
              <div>
                <span>categoria </span>
                <Link to={`/posts?cat=${data.category}`} className='text-[#147260]'>{data.category}</Link>
                <span> há </span>
                <span> {format(data.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-12 justify-between'>
        {/* text */}
        <div 
          className='lg:text-lg flex flex-col gap-6 text-justify content-text'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
          {/* {data.content} */}
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
            {data.user.img && (
                <img 
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48} 
                  alt="" 
                />
              )}
              <span className="text-[#147260] font-medium cursor-pointer">{data.user.username}</span>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categorias</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/posts">
              Todos
            </Link>
            <Link className="underline" to="/posts?cat=jogos">
              Jogos
            </Link>
            <Link className="underline" to="/posts?cat=tecnologia">
              Tecnologia
            </Link>
            <Link className="underline" to="/posts?cat=programação">
              programação
            </Link>
            <Link className="underline" to="/posts?cat=marketing">
              Marketing
            </Link>
            <Link className="underline" to="/posts?cat=news">
              News
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Pesquisa</h1>
          <Search />
        </div>
      </div>
      <br />
      <h1 className="text-base font-medium">Partilhar:</h1>
      <div className='flex items-center gap-4'>
            <FacebookShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#1F74DE] hover:text-white hover:bg-[#1F74DE] p-2 text-xl rounded-full share">
                <ImFacebook />
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#1da1f2] hover:text-white hover:bg-[#1da1f2] p-2 text-xl rounded-full share">
                <ImTwitter />
              </div>
            </TwitterShareButton>
            <RedditShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#F94503] hover:text-white hover:bg-[#F94503] p-2 text-xl rounded-full share">
                <ImReddit />
              </div>
            </RedditShareButton>
            <WhatsappShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#25d366] hover:text-white hover:bg-[#25d366] p-2 text-xl rounded-full share">
                <ImWhatsapp />
              </div>
            </WhatsappShareButton>
            <TelegramShareButton url={sharePost} title={data.title}>
              <div className="bg-gray-300 text-[#0088cc] hover:text-white hover:bg-[#0088cc] p-2 text-xl rounded-full share">
                <FaTelegramPlane />
              </div>
            </TelegramShareButton>
            <CopyButton text={sharePost} />
          </div>
          <br />
      <Comments postId={data._id} />
    </div>
    <Footer />
    </div>
  )
}
