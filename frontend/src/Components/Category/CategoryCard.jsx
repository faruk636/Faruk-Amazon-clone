import {Link} from 'react-router-dom';



const CategoryCard = ({data}) => {
  return (
    <div className="w-[250px] h-[300px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <Link
        to={`/category/${data.name}`}
        className="no-underline text-[rgb(35,35,35)]"
      >
        <h2 className="p-[5px] ml-[10px]">{data.title}</h2>
        <img
          src={data.imageLink}
          alt="category image"
          className="w-[100%] object-contain max-h-[200px] py-0 px-[10px]"
        />
        <p className="p-[5px] ml-[15px] text-[12px] font-bold text-[rgb(9,132,209)]">
          Shop now
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard