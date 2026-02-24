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
        <Link className="underline cursor-pointer" to="/posts?cat=atividades">Atividades</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=cursos">Cursos</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=saude">Saúde</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=tecnologia">Tecnologia</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=gestao">Gestão</Link>
        <Link className="underline cursor-pointer" to="/posts?cat=news">Noticias</Link>
      </div>
    </div>
  );
};

export default FeatureMenu;