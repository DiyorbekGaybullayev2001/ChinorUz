import React from "react";
import img1 from '../imgs/mebel1.png'
import img2 from '../imgs/mebel2.png'
import img3 from '../imgs/mebel3.png'
import img4 from '../imgs/mebel4.png'
import img5 from '../imgs/mebel5.png'
import img6 from '../imgs/mebel6.png'
import img7 from '../imgs/mebel7.png'
import img8 from '../imgs/mebel8.png'
import img9 from '../imgs/mebel9.png'
 
const Mebel = () => {
  const cards = [
    {
      id: 1,
      text: "Плетеная мебель часто используется в садах, на террасах и балконах",
      image: img1,
    },
    {
      id: 2,
      text: "Плетеные диваны и кресла могут добавить легкости и элегантности гостиной",
      image: img2,
    },
    {
      id: 3,
      text: "Мебель для кухни и столовой комнаты",
      image: img3,
    },
    {
      id: 4,
      text: "Плетеные мебели могут добавить спальне нотку романтики и естественности.",
      image: img4,
    },
    {
      id: 5,
      text: "Комплекты мебели для ресторанов и кафе",
      image: img5,
    },
    {
      id: 6,
      text: "Плетеное кресло-качалка может стать идеальным местом для отдыха в любом уголке дома или сада.",
      image: img6,
    },
  ];

  return (
    <div id="garanty" className=" container m-auto pt-[70px]">

      <h2 className="md:text-[35px] font-serif ml-[10px]">С 2008 года мы сделали более</h2>
      <h2 className="md:text-[30px] font-serif ml-[10px]"><span className="text-[#94C11F]">100 000 единиц</span> мебели</h2>
      <p className="ml-[10px] text-[20px]">Разной сложности и конфигурации</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-[#94C11F] h-full">
              <p className="text-gray-800 font-medium">{card.text}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-[70px] text-center p-[50px]">
        <h1 className="md:text-[40px] font-semibold">Новая летняя коллекция от Chinar</h1>
        <h1 className="md:text-[40px] font-semibold"> для вашего дома и заведения</h1>
        <div className="mt-[30px] grid grid-flow-col">
            <img className="md:h-[500px] w-full" src={img7} alt="" />
        </div>
        <div className="grid grid-cols-2 ">
            <img className=" sm:h-[300px] md:h-[400px] w-full" src={img8} alt="" />
            <img className=" sm:h-[300px] md:h-[400px] w-full" src={img9} alt="" />
        </div> 
      </div>
    </div>
  );
};

export default Mebel;
