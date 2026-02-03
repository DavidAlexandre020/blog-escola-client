import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
import FeatureMenu from "../components/FeatureMenu";
import Image from "../components/Image";
import Helmet from "../components/helmet";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <div className='mt-4 flex flex-col gap-4'>
      <Helmet
        title="Tecnodog"
        largeTwitterCard={true}
        addPostfixTitle={true}
      />
      {/* BREADCRUMB */}
      <div className='flex gap-4'>
        <Link to='/'>Inicio</Link>
        <span>•</span>
        <span className='text-[#147260] font-medium'>Blogs e artigos</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className=''>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
            Bem-vindo ao Complexo Escolar Privado J.T.J.Z
          </h1>
          <p className='mt-8 text-md md:text-xl'>
            O seu parceiro ideal no mundo da tecnologia!
          </p>
        </div>
        {/* animated button */}
        <div className="w-[360px] h-[300px] hidden md:block relative">
          <Image className='w-full h-full object-cover' src='/feature.png' alt='Dog tecno engineer' />
        </div>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      <br />
      {/* FEATURED POSTS */}
      <h2 className="my-8 text-2xl text-gray-600">Mais Populares</h2>
      <FeaturedPosts />
      {/* POST LIST */}
      <div className='flex flex-col-reverse gap-8 md:flex-row'>
        <div className=''>
          <h1 className="my-8 text-2xl text-gray-600">Posts Recentes</h1>
          <PostList />
        </div>
        <div className=''>
          <FeatureMenu />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
