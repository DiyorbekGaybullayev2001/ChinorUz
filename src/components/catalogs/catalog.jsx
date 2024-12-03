import React, { useState } from "react";

import stul from '../imgs/stul.png'
import stul2 from '../imgs/stul2.png'
import mebel1 from '../imgs/mebel1.png'
import mebel2 from '../imgs/mebel2.png'
import mebel3 from '../imgs/mebel3.png'
import mebel4 from '../imgs/mebel4.png'
import mebel5 from '../imgs/mebel5.png'
import mebel6 from '../imgs/mebel6.png'
import mebel7 from '../imgs/mebel7.png'
import mebel8 from '../imgs/mebel8.png'
import mebel9 from '../imgs/mebel9.png'






const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Комплекты");

  const categories = ["Комплекты", "Подвесные кресла", "Диваны и кресла", "Шезлонги"];

  const products = [
    // Комплекты категорияси маҳсулотлари
    {
      category: "Комплекты",
      name: "Комплект Рим",
      description: "Серый",
      image: mebel4,
    },
    {
      category: "Комплекты",
      name: "Комплект Милан",
      description: "Коричневый",
      image: mebel2,
    },
    {
      category: "Комплекты",
      name: "Комплект Париж",
      description: "Чёрный",
      image: mebel3,
    },
    {
      category: "Комплекты",
      name: "Комплект Париж",
      description: "Чёрный",
      image: mebel1,
    },
    {
      category: "Комплекты",
      name: "Комплект Париж",
      description: "Чёрный",
      image: mebel9,
    },

    // Подвесные кресла категорияси маҳсулотлари
    {
      category: "Подвесные кресла",
      name: "Стул Венеция",
      description: "Белый",
      image: stul,
    },
    {
      category: "Подвесные кресла",
      name: "Стул ALLY VBP-206",
      description: "Светло бежевый",
      image: stul,
    },
    {
      category: "Подвесные кресла",
      name: "Стул Рио",
      description: "Велюрово синий",
      image: stul2,
    },
    {
      category: "Подвесные кресла",
      name: "Стул Виктория",
      description: "Желтый",
      image: stul,
    },
    {
      category: "Подвесные кресла",
      name: "Стул Рио",
      description: "Велюрово синий",
      image: stul2,
    },
    {
      category: "Подвесные кресла",
      name: "Стул Виктория",
      description: "Желтый",
      image: stul,
    },
    {
      category: "Подвесные кресла",
      name: "Стул Рио",
      description: "Велюрово синий",
      image: stul2,
    },
    {
      category: "Подвесные кресла",
      name: "Стул Виктория",
      description: "Желтый",
      image: stul,
    },

    // Диваны и кресла категорияси маҳсулотлари
    {
      category: "Диваны и кресла",
      name: "Диван Лондон",
      description: "Синий",
      image: mebel2,
    },
    {
      category: "Диваны и кресла",
      name: "Кресло Берлин",
      description: "Серый",
      image: mebel7,
    },
    {
      category: "Диваны и кресла",
      name: "Диван Мадрид",
      description: "Красный",
      image: mebel8,
    },
    {
      category: "Диваны и кресла",
      name: "Кресло Токио",
      description: "Зеленый",
      image: mebel9,
    },
    {
      category: "Диваны и кресла",
      name: "Кресло Токио",
      description: "Зеленый",
      image: mebel1,
    },

    // Шезлонги категорияси маҳсулотлари
    {
      category: "Шезлонги",
      name: "Шезлонг Лагуна",
      description: "Белый",
      image: mebel3,
    },
    {
      category: "Шезлонги",
      name: "Шезлонг Капри",
      description: "Синий",
      image: mebel5,
    },
    {
      category: "Шезлонги",
      name: "Шезлонг Малибу",
      description: "Черный",
      image: mebel6,
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="container mx-auto pt-[70px] px-4">
      <h2 className="text-xl sm:text-2xl md:text-[45px] font-bold text-center mb-4">
        Каталог готовых изделий
      </h2>
      <p className="text-center text-gray-600 mb-6">
        которые можно купить здесь и сейчас
      </p>

      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeCategory === category
                ? "bg-[#94C11F] text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-28 h-28 object-contain mb-5"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="container m-auto items-center text-center mt-[70px]">
        <button className="bg-[#94C11F] w-[300px] h-[50px] text-white font-semibold  items-center rounded-xl">ПЕРЕЙТИ В КАТАЛОГ</button>
      </div>
    </div> 
  );
};

export default Catalog;
























// const Catalog = () => {
//   const [activeCategory, setActiveCategory] = useState("Подвесные кресла");

//   const categories = ["Комплекты", "Подвесные кресла", "Диваны и кресла", "Шезлонги"];

//   const products2 = [
//     {
//       category: "Подвесные кресла",
//       name: "Стул Венеция",
//       description: "Белый",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул ALLY VBP-206",
//       description: "Светло бежевый",
//       image: stul2,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Рио",
//       description: "Велюрово синий",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Виктория",
//       description: "Желтый",
//       image: stul2,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Рио",
//       description: "Велюрово синий",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Виктория",
//       description: "Желтый",
//       image: stul2,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Рио",
//       description: "Велюрово синий",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Виктория",
//       description: "Желтый",
//       image: stul2,
//     },
//   ];
//   const products = [
//     {
//       category: "Подвесные кресла",
//       name: "Стул Венеция",
//       description: "Белый",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул ALLY VBP-206",
//       description: "Светло бежевый",
//       image: stul2,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Рио",
//       description: "Велюрово синий",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Виктория",
//       description: "Желтый",
//       image: stul2,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Рио",
//       description: "Велюрово синий",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Виктория",
//       description: "Желтый",
//       image: stul2,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Рио",
//       description: "Велюрово синий",
//       image: stul,
//     },
//     {
//       category: "Подвесные кресла",
//       name: "Стул Виктория",
//       description: "Желтый",
//       image: stul2,
//     },
//   ];

//   const filteredProducts = products2.filter(
//     (product) => product.category === activeCategory
//   );
//   const filteredProducts1 = products.filter(
//     (product) => product.category === activeCategory
//   );

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-serif font-bold text-center mb-4">
//         Каталог готовых изделий
//       </h2>
//       <p className="text-center text-[15px] md:text-[25px] text-gray-600 mb-6">
//         которые можно купить здесь и сейчас
//       </p>

//       <div className="gap-6 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-x-4 mb-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full font-semibold ${
//               activeCategory === category
//                 ? "bg-[#94C11F] text-white"
//                 : "bg-gray-200 text-black"
//             }`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-24 h-24 object-contain mb-4"
//             />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-500">{product.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredProducts1.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-24 h-24 object-contain mb-4"
//             />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-500">{product.description}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Catalog;



