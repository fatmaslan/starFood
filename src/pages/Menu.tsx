import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Meal {
  id: number;
  title: string;
  price: number;
  name:string;
  images: { id: number; image: string }[];
}

interface Category {
  id: number;
  name: string;
  meals: Meal[];
}

const Menu = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/category/");
        setCategories(res.data);
      } catch (error) {
        console.log("API error:", error);
      }
    };
    fetchCategory();
  }, []);

  const handleCategoryClick = async (id: number) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/category/${id}/`);
      setSelectedCategory(res.data);
    } catch (error) {
      console.log("Kategori verisi alinirken hata oluştu:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Kategoriler */}
      <div className="mt-32 flex items-center justify-center">
        <div className="flex gap-10 flex-wrap justify-center">
          {categories?.map((category) => (
            <button
              className="text-yellow-600 font-bold text-xl bg-yellow-100 p-4 h-12 rounded-3xl flex items-center shadow-xl hover:bg-yellow-600 hover:text-white transition-all"
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Seçilen Kategorinin Yemekleri */}
      {selectedCategory && (
        <div className="mt-10 flex flex-col items-start px-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategory.meals.length > 0 ? (
              selectedCategory.meals.map((meal) => (
                <li key={meal.id} className="p-4 rounded-lg shadow-md bg-gray-200 ">
                  <p className="text-lg text-yellow-600 font-bold ">{meal.title}</p>
                  {/* Yemek Resimleri */}
                  {meal.images.length > 0 && (
                    <Link to={`/meals/${meal.id}`}>
                    <img
                      key={meal.images[0].id} 
                      src={meal.images[0].image} 
                      alt={meal.name} 
                      className="w-full h-50 object-cover my-5 rounded-md"
                    />
                     </Link> 
                  )}
                </li>
              ))
            ) : (
              <p>There are no dishes in this category.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
