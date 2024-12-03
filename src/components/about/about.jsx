import React from "react";
import bgimg1 from '../about/bg1.png'
import bgimg2 from '../about/bg2.png'
import imgs1 from '../about/imgs.png'
import imgs2 from '../about/imgs1.png'

const About = () => {
  return (
    <div className="container m-auto pt-[70px] px-5">
      {/* Title Section */}
      <div className=" m-[5px]">
        <h1 className="text-[30px]  md:text-[50px] font-bold">О нас</h1>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-lg shadow-md p-1 flex flex-col items-center">
            <p className="text-gray-700 text-[12px] sm:text-[15px] md:text-[18px]">
            Наша компания ООО “Firdaus Mebel” успешно работает на мебельном рынке с 2008 года. 
            На протяжении этих лет мы накопили бесценный практический опыт. До мелочей отрабатывались все 
            технологические и производственные процессы, отшлифовывалось каждое движение.
            </p>
            <p className="text-gray-700 mt-4 text-[12px] sm:text-[15px] md:text-[18px]">
            Мы предлагаем МЕБЕЛИ под брендом “CHINAR” из искусственного ротанга с большим ассортиментом, 
            а также постоянно пополняется коллекция.
            </p>
        </div>

        <div className="block shadow-lg rounded-lg">
            <img className="h-[250px] rounded-xl object-cover w-full" src={bgimg1} alt="bg" />
            <div className="items-center text-center h-[50px] flex rounded-lg">
                <span className=" text-[40px] text-[#94C11F] ml-[5px]">60+</span>
                <span className=" text-[#94C11F] md:text-[20px] ml-[20px]">Cотрудников</span>
            </div>
        </div>

        <div className="block shadow-lg rounded-lg">
            <img className="h-[250px] rounded-xl object-cover w-full" src={bgimg2} alt="bg2" />
            <div className="items-center text-center h-[50px] flex rounded-lg">
                <span className=" text-[40px] text-[#94C11F] ml-[5px]">7+</span>
                <span className=" text-[#94C11F] md:text-[20px] ml-[20px]">Cтран для экспорта</span>
            </div>
        </div>

        <div className="bg-[#94C11F] p-[10px] rounded-lg shadow-lg">
            <p className="text-[80px] font-serif">16</p>
            <br />
            <p className="text-[20px]">Лет опыта</p>
        </div>

        <div className="bg-[#94C11F] p-[10px] rounded-lg shadow-lg">
            <p className="text-[80px] font-serif">60.000+</p>
            <br />
            <p className="text-[20px]">Довольных клиентов</p>
        </div>

        <div className="bg-[#94C11F] p-[10px] rounded-lg shadow-lg">
            <p className="text-[80px] font-serif">200+</p>
            <br />
            <p className="text-[20px]">Видов продуктов</p>
        </div>    

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[30px] rounded-lg overflow-hidden">
        <img className="rounded-lg md:h-[400px] w-full" src={imgs1} alt="" />
        <img className="rounded-lg md:h-[400px] w-full" src={imgs2} alt="" />
      </div>

    </div>
  );
};

export default About;
