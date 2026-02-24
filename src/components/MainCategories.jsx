import { Link } from "react-router-dom";
import Search from "./Search";

export default function MainCategories() {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-[#165347] text-white rounded-full px-4 py-2"
        >
          Todos
        </Link>
        <Link
          to="/posts?cat=atividades"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Atividades
        </Link>
        <Link
          to="/posts?cat=cursos"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Cursos
        </Link>
        <Link
          to="/posts?cat=saude"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Saúde
        </Link>
        <Link
          to="/posts?cat=tecnologia"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Tecnologia
        </Link>
        <Link
          to="/posts?cat=gestao"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Gestão
        </Link>
        <Link
          to="/posts?cat=news"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Noticias
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  )
}
