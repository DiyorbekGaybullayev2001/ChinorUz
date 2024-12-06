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
    colors: "Black White choco",
    widths: "200",
    heights: "110:60",
    weight: "300",
    quality: "100 %"
    
  },
  {
    image: img2,
    name: "Авиньон-1",
    category: "Буфеты",
    price: "18 990",
    colors: "Black White  choco",
    widths: "120",
    heights: "200",
    weight: "300",
    quality: "100 %"
  },
  {
    image: img3,
    name: "Стелла Дуб Сонома",
    category: "Комоды",
    price: "8 990",
    colors: "Black White  choco",
    widths: "110",
    heights: "110",
    weight: "125",
    quality: "100 %"
  },
  {
    image: img4,
    name: "Равенна-1 Light",
    category: "Комоды",
    price: "14 990",
    colors: "Black White  choco",
    widths: "100",
    heights: "100",
    weight: "105",
    quality: "100 %"
  },
  {
    image: img5,
    name: "Бенфлит Grey",
    category: "Журнальные столы",
    price: "7 290",
    colors: "Black White choco",
    widths: "50",
    heights: "50",
    weight: "20",
    quality: "100 %"
  },
  {
    image: img6,
    name: "Тиффани Вудлайн Крем",
    category: "Письменные столы",
    price: "10 990",
    colors: "Black White  choco",
    widths: "200",
    heights: "70",
    weight: "50",
    quality: "100 %"
  },
  {
    image: img7,
    name: "Валенсия Beige",
    category: "Шкафы",
    price: "19 990",
    colors: "Black White choco",
    widths: "170",
    heights: "200",
    weight: "350",
    quality: "100 %"
  },
  {
    image: img8,
    name: "Лайт-3-170-240 Белый",
    category: "Шкафы",
    price: "27 290",
    colors: "Black White choco",
    widths: "200",
    heights: "220",
    weight: "400",
    quality: "100 %"
  },
];

const ClicCatalog = () => {
  // Like button state initialization
  const [liked, setLiked] = useState(Array(products.length).fill(false));

  const [selectedProduct, setSelectedProduct] = useState(null);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer relative">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
           
            >

                    {/* Modal */}
              {/* {selectedProduct && (
                <div className="fixed inset-0 bg-[#ffffff49] bg-opacity-50 flex items-center justify-center">
                  <div className="bg-[#f1f0f0] rounded-lg shadow-lg w-96 p-6 relative">
                    <button
                      className="absolute z-50 top-3 right-3 text-gray-500 hover:text-gray-800 "
                      onClick={() => setSelectedProduct(null)}
                    >
                      ✕
                    </button>
                    <img src={selectedProduct.image} alt="" />
                    <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
                    <p className="text-gray-700 mb-4">{selectedProduct.category}</p>
                    <p className="text-[#94C11F] font-bold text-lg">{selectedProduct.price}</p>
                  </div>
                </div>
              )} */}

                {selectedProduct && (
                  <div
                    className="fixed inset-0 bg-[#ffffff49] bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedProduct(null)} // Close on outside click
                  >
                    <div className="bg-[#f1f0f0] flex m-auto  rounded-lg shadow-lg  p-6">
                        <div
                          className="relative"
                          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                          >
                          {/* Close Button */}
                         
                          <img
                            className="object-contain h-44 w-full"
                            src={selectedProduct.image}
                            alt=""
                            />
                            <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-extrabold"
                            onClick={() => setSelectedProduct(null)} // Closes the modal
                            >
                            ✕
                          </button>
                            

                          </div>
                          
                      <div className="ml-[20px]">
                        <h2 className="text-xl font-bold mb-4">Имя: {selectedProduct.name}</h2>
                        <p className="text-gray-700 mb-4">Раздел: {selectedProduct.category}</p>
                        <p className="text-gray-700 mb-4">Цвета: {selectedProduct.colors} </p>
                        <p className="text-gray-700 mb-4">Высота: {selectedProduct.widths} cm</p>
                        <p className="text-gray-700 mb-4">Ширина {selectedProduct.heights} cm</p>
                        <p className="text-gray-700 mb-4">Вес: {selectedProduct.weight} kg</p>
                        <p className="text-gray-700 mb-4">Качество: {selectedProduct.quality}</p>
                        <p className="text-[#94C11F] font-bold text-lg">Стоимость: {selectedProduct.price} ₽</p>
                      </div>
                      
                      
                        </div>
                  </div>
                )}



            {/* Image Placeholder */}
            <div
              
            className="h-40 w-full mb-4 rounded-md flex">
               <img  onClick={() => setSelectedProduct(product)} className="m-auto" src={product.image} alt="mebel" />

                <div
                    onClick={() => toggleLike(index)}
                     className={` z-40 cursor-pointer text-2xl ${
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
