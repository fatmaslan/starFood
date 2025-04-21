import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Meal {
  id: number;
  title: string;
  price: number;
  name: string;
  images: { id: number; image: string }[];
}

interface Category {
  meals: Meal[];
  id: number;
}

const Home = () => {
  const [saladCategory, setSaladCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchSaladCategory = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/category/${1}/`
        );
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
        className="w-full max-w-full mx-auto h-[300px] bg-cover bg-center flex items-center justify-center mt-16 "
        style={{
          backgroundImage: "url('/anasayfa.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-bold text-gray-700 text-5xl mt-8 mr-auto p-5">
          salad <hr /> & <hr /> pasta
        </h1>
      </div>
      <div className="w-full max-w-full h-[300px] bg-cover bg-center flex items-center justify-center md:mt-16 mt-64">
        {saladCategory ? (
          <div className="text-center mb-22 flex ">
            <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-6 justify-center px-4">
              {saladCategory.meals.length > 0 ? (
                saladCategory.meals.map((meal) => (
                  <li
                  key={meal.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[350px] mx-auto"
                >
                  <Link to={`/meals/${meal.id}`}>
                    {meal.images.length > 0 && (
                      <img
                        src={meal.images[0].image}
                        alt={meal.title}
                        className="w-full h-[200px] object-cover"
                      />
                    )}
                  </Link>
                  <p className="text-md text-yellow-600 font-bold text-center py-2 px-2">
                    {meal.title}
                  </p>
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
