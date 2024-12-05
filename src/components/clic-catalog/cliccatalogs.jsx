import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; 

import img1 from './product-imgs/img1.png'
import img2 from './product-imgs/img2.png'
import img3 from './product-imgs/img3.png'
import img4 from './product-imgs/img4.png'
import img5 from './product-imgs/img5.png'
import img6 from './product-imgs/img6.png'
import img7 from './product-imgs/img7.png'
import img8 from './product-imgs/img8.png'
 
const products = [
  
  {
    image: img1,
    name: "Шерона Barhat Grey",
    category: "Двуспальные кровати",
    price: "21 990",
  },
  {
    image: img2,
    name: "Авиньон-1",
    category: "Буфеты",
    price: "18 990",
  },
  {
    image: img3,
    name: "Стелла Дуб Сонома",
    category: "Комоды",
    price: "8 990",
  },
  {
    image: img4,
    name: "Равенна-1 Light",
    category: "Комоды",
    price: "14 990",
  },
  {
    image: img5,
    name: "Бенфлит Grey",
    category: "Журнальные столы",
    price: "7 290",
  },
  {
    image: img6,
    name: "Тиффани Вудлайн Крем",
    category: "Письменные столы",
    price: "10 990",
  },
  {
    image: img7,
    name: "Валенсия Beige",
    category: "Шкафы",
    price: "19 990",
  },
  {
    image: img8,
    name: "Лайт-3-170-240 Белый",
    category: "Шкафы",
    price: "27 290",
  },
];

const ClicCatalog = () => {
  // Like button state initialization
  const [liked, setLiked] = useState(Array(products.length).fill(false));

  const toggleLike = (index) => {
    setLiked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[100px]">
      <h1 className="text-center text-2xl md:text-4xl  font-mono mb-6">
        Каталог готовых изделий
      </h1>
      <p className="text-center text-gray-600 mb-8">
        которые можно купить здесь и сейчас
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
            {/* Image Placeholder */}
            <div className="h-40 w-full mb-4 rounded-md flex">
               <img className="m-auto" src={product.image} alt="mebel" />

                <div
                    onClick={() => toggleLike(index)}
                     className={`cursor-pointer text-2xl ${
                     liked[index] ? "text-red-600" : "text-gray-400"            //like btn 
                    }`}>
                    <FaHeart />
                </div>

            </div>
            
            {/* Product Name */}
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            
            {/* Product Category */}
            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
            
            {/* Product Price */}
            <p className="text-xl font-bold text-[#94C11F] mb-4">{product.price} ₽</p>
            
            {/* Like Icon */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClicCatalog;
