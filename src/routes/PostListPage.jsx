import { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'
import Helmet from "../components/helmet";
import Footer from '../components/Footer';

export default function PostListPage() {

  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <Helmet
         title="Posts J.T.J.Z"
         largeTwitterCard={true}
         addPostfixTitle={true}
      />
      <h1 className='mb-8 text-2xl'></h1>
      <button 
        onClick={() => setOpen((prev) => !prev)} 
        className='bg-[#165347] text-sm text-white p-4 rounded-2xl mb-4 md:hidden'
      >
        {open ? 'Fechar' : 'Pesquisar ou Filtrar'}
      </button>
      <div className='flex flex-col-reverse gap-8 md:flex-row'>
        <div className=''>
          <PostList />
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu />
        </div>
      </div>
      <Footer />
    </div>
  )
}
