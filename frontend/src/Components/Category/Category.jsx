import { categoryInfo } from "./categoryInfo";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="relative -mt-[10%] grid grid-cols-4 place-items-center">
      {categoryInfo.map((infos) => {
        return <CategoryCard key={infos.name} data={infos} />;
      })}
    </div>
  );
};

export default Category;
