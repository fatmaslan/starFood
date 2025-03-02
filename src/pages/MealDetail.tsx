import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";

interface Image {
  id: number;
  image: string;
}

interface Meal {
  id: number;
  title: string;
  price: number;
  name: string;
  images?: Image[];
  description: string;
}

const MealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get<Meal>(
          `http://127.0.0.1:8000/api/foods/${id}/`
        );
        setMeal(response.data);
      } catch (error) {
        console.log("An error occurred while loading meal details", error);
      }
    };
    fetchMeal();
  }, [id]);

  if (!meal) {
    return <p>Loading..</p>;
  }

  return (
    <div className="flex flex-col min-h-screen items-center">
    <h1 className="text-3xl font-bold text-yellow-500 pt-36">{meal.title}</h1>
    <div className="flex flex-1/2 p-5 gap-10  ">  
      <div className="flex items-center justify-center p-5 gap-3 mt-0.5 w-full h-[500px] overflow-hidden rounded-4xl">
        {meal.images && meal.images.length > 0 ? (
          <Carousel
            plugins={[plugin.current]}
            className="w-full "
          >
            <CarouselContent className="flex ">
              {meal.images.map((img) => (
                <CarouselItem key={img.id} className="flex-shrink-0 w-full ">
                  <img
                    src={img.image}
                    alt={meal.name}
                    className="object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className="flex flex-col mt-10 ">
        <p className="text-lg text-gray-800 my-4">{meal.description}</p>
        <p className="text-4xl font-bold flex justify-end mt-10 text-yellow-600"> ${meal.price} </p>
      </div>
      </div>
    </div>
  );
};

export default MealDetail;
