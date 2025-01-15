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

import logo from '../navbar/logo.png'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
 
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

  const [purchase, setPurchase] = useState(null);


  const toggleLike = (index) => {
    setLiked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [loading, setloading] = useState(false)


  const SendMessage =(event) =>{
      event.preventDefault();
      setloading(true)
      const token = "8127669466:AAFJr3Fa5QABvCbdyBhjcSRWorauL8TUhwc";
      const chat_id = 6079644484;
      const url = `https://api.telegram.org/bot${token}/SendMessage `;
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const quiz = document.getElementById("question").value;
      const messageContent = `Ismi: ${name} \n Tel: ${phone} \n Savol: ${quiz}`

      axios({
          url:url,
          method:'POST',
          data:{
              "chat_id":chat_id,
              "text":messageContent
          }
      }).then((res)=>{
          document.getElementById("myID").reset();
          // alert("Yuborildi")
          // name("")
          toast.success("Yuborildi")
      }).catch((error)=>{
          // console.log("Error", error)
          toast.error("Xato")
      }).finally(()=>{
          setloading(false)
          // setaktiv(false)
      })
  }

  // const [aktiv, setaktiv] = useState(false)

  // const toggleAktiv = () => {
  //     setaktiv(!aktiv);
  // };









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
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">



                {selectedProduct && (
                  <div
                  className="fixed inset-0 bg-[#ffffff49] bg-opacity-50 flex items-center justify-center z-50"
                  // onClick={() => setSelectedProduct(null)} // Close on outside click
                   >
                  <div className="bg-[#f1f0f0] m-auto rounded-lg shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2">
                      <div
                        className="relative p-[10px]"
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
                        
                    <div className="ml-[20px] p-[10px]">
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



                {
                  purchase && (
                    <div
                  className="fixed inset-0 bg-[#ffffff49] bg-opacity-50 flex items-center justify-center z-50"
                  // onClick={() => setSelectedProduct(null)} // Close on outside click
                   >
                  <div className="bg-[#f1f0f0] m-auto rounded-lg shadow-lg px-[40px] py-[10px] ">
                      
                     <div className="flex  md:w-[400px] text-center mb-6 md:relative ">
                     <img
                     src={logo}
                     alt="Logo"
                     className="sm:h-20"
                    />
                     <button
                      className="md:absolute md:right-0 text-gray-500 hover:text-gray-800 font-extrabold"
                      onClick={() => setPurchase(null)} // Closes the modal 
                      > ✕ </button>
                    </div>
                    
                    <div>

                       {/* Form */}
                    <form id="myID" className="space-y-4" onSubmit={SendMessage}>
                    {/* Имя */}
                    <div>
                        <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Ваше имя
                        </label>
                        <input 
                        required
                        type="text"
                        id="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Введите ваше имя"
                        />
                    </div>

                    {/* Телефон */}
                    <div>
                        <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Номер телефона
                        </label>
                        <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            +998
                        </span>
                        <input
                            required
                            type="number"
                            id="phone"
                            className="mt-1 block w-full pl-12 border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Введите ваш номер"
                        />
                        </div>
                    </div>

                    {/* Вопрос */}
                    <div>
                        <label
                        htmlFor="question"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Ваш вопрос
                        </label>
                        <textarea
                        required
                        id="question"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Введите ваш вопрос"
                        ></textarea>
                    </div>
                    {/* отправить вопрос */}
                    {/* Кнопка отправки */}
                    <button
                        // onClick={notify}
                        loading={loading}
                        type="submit"    
                        className="w-full bg-[#94C11F] text-white py-2 px-4 rounded-md hover:bg-[#93c11fcc] transition duration-300"
                    >
                        {
                            loading ? "Покупка...." : "Покупка"
                        }
                    </button>
                    </form> 
                      
                    </div> 



                  </div>
                </div>
                  )
                }
                



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
            <button onClick={setPurchase} className="h-[40px] bg-[#94C11F] w-[150px] rounded-lg text-white mt-[10px]" >
                       Покупка продукта</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClicCatalog;
