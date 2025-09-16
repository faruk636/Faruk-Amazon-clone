import { categoryInfo } from "./categoryInfo";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="relative -mt-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2.5">
      {categoryInfo?.map((infos) => {
        return <CategoryCard key={infos.name} data={infos} />;
      })}
    </div>
  );
};

export default Category;
