import { Link } from "react-router-dom";
import Search from "./Search";

const FeatureMenu = () => {

  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Pesquisar</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Categorias</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline cursor-pointer" to="/posts">Todos</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=jogos">Jogos</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=tecnologia">Tecnologia</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=programação">Programação</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=marketing">Marketing</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=news">News</Link>
      </div>
    </div>
  );
};

export default FeatureMenu;