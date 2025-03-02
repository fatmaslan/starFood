import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Meal {
  id: number;
  title: string;
  price: number;
  name:string;
  images: { id: number; image: string }[];
}

interface Category {
  meals:Meal[]
  id:number
}


const Home = () => {
  const [saladCategory, setSaladCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchSaladCategory = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/category/${1}/`);
        setSaladCategory(response.data);
      } catch (error) {
        console.log("Salad kategorisi hatali", error);
      }
    };
    fetchSaladCategory();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/anasayfa.jpg')", backgroundSize: "cover" }}
      >
        <h1 className="font-bold text-gray-700 text-5xl mt-8 mr-auto p-5">
          salad <hr /> & <hr /> pasta
        </h1>
      </div>
      <div className="w-full h-[300px] bg-cover bg-center flex items-center justify-center">
        {saladCategory ? (
          <div className="text-center mb-22">
            <ul className="mt-16 flex gap-10 items-start">
              {saladCategory.meals.length > 0 ? (
                saladCategory.meals.map((meal) => (
                  <li key={meal.id} className="p-2 rounded-lg  ">
                    <Link to={`/meals/${meal.id}`}>
                    {meal.images.length > 0 && (
                      <img
                        key={meal.images[0].id}
                        src={meal.images[0].image}
                        alt={meal.title}
                        className="w-[300px] h-[180px] object-cover my-3 "
                      />
                      
                    )}
                    </Link>
                    <p className="text-lg text-yellow-600 font-bold">{meal.title}</p>
                  </li>
                ))
              ) : (
                <p>There are no meals in this category.</p>
              )}
            </ul>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
