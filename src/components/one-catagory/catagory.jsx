import React from "react";
import catagoryimg1 from '../one-catagory/catagory1.png'
import catagoryimg2 from '../one-catagory/catagory2.png'
import catagoryimg3 from '../one-catagory/catagory3.png'
import catagoryimg4 from '../one-catagory/catagory4.png'



const OneCatagory = () => {
    const categories = [
      {
        title: "Комплекты",
        products: "15 продуктов",
        image: catagoryimg1 
      },
      {
        title: "Подвесные кресла",
        products: "7 продуктов",
        image: catagoryimg2, 
      },
      {
        title: "Диваны и кресла",
        products: "3 продукта",
        image: catagoryimg3, 
      },
      {
        title: "Шезлонги",
        products: "1 продукт",
        image: catagoryimg4, 
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto pt-[70px]">
        <h2 className="text-[45px] font-bold text-center mb-6">
          Производим 4 основных категории мебели
        </h2>
        <p className="text-center text-gray-600 mb-10">
          более 200 видов продуктов во всем ассортименте
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-[#94C11F]">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OneCatagory;



// const OneCatagory = () =>{
//     return(
//         <div className=" container border m-auto pt-[70px]">
//             <div className="text-center">
//                 <h1 className="text-[50px] font-mono">
//                     Производим 4 основных категории мебели
//                 </h1>
//                 <br />
//                 <p className="text-[25px]">более 200 видов продуктов во всем ассортименте</p>
//             </div>


//             <div className="h-[400px] flex gap-2 mt-[30px] m-auto justify-center">

//                 <div className="text-center relative">
//                     <img className="absolute " src={catagoryimg1} alt="" />
//                     <p className="absolute">Комплекты <span className="bg-[#94C11F]">15 продуктов</span></p>
//                 </div>
//                 <div>
//                     <p>Подвесные кресла <span>7 продуктов</span></p>
//                     <img src={catagoryimg2} alt="" />
//                 </div>
//                 <div>
//                     <p>Диваны и кресла <span>3 продукта</span></p>
//                     <img src={catagoryimg3} alt="" />
//                 </div>
//                 <div>
//                     <p>Шезлонги <span>1 продукт</span></p>
//                     <img src={catagoryimg4} alt="" />
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default OneCatagory;



// import React from "react";

