import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat:category,
      });
    }
  };


  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Pesquisar</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filtrar</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-[#147260] cursor-pointer rounded-sm bg-white checked:bg-[#147260]"
          />
          Mais novo
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-[#147260] cursor-pointer rounded-sm bg-white checked:bg-[#147260]"
          />
          Mais populares
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-[#147260] cursor-pointer rounded-sm bg-white checked:bg-[#147260]"
          />
          Tendências
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-[#147260] cursor-pointer rounded-sm bg-white checked:bg-[#147260]"
          />
          Mais antigo
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categorias</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline cursor-pointer" to="/posts">Todos</Link>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("atividades")}>Atividades</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("cursos")}>Cursos</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("saude")}>Saúde</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("tecnologia")}>Tecnologia</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("gestao")}>Gestão</span>
        <span className="underline cursor-pointer" onClick={()=>handleCategoryChange("news")}>Noticias</span>
      </div>
    </div>
  );
};

export default SideMenu;