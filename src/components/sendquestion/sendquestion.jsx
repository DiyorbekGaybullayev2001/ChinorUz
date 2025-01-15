import React, { useState } from "react";
import axios from 'axios'
import logo from '../navbar/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendQuestion = () => {

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
            toast.success("Yuborildi")
        }).catch((error)=>{
            // console.log("Error", error)
            toast.error("Xato")
        }).finally(()=>{
            setloading(false)
            setaktiv(false)
        })
    }

    const [aktiv, setaktiv] = useState(false)

    const toggleAktiv = () => {
        setaktiv(!aktiv);
    };

    

    return (
        <div className="container m-auto pt-[70px]">
            
            {
                !aktiv ? 
                <div className="m-auto text-center">
                    <h2 className="m-[10px] text-[25px] sm:text-[32px] md:text-[40px] font-serif">Остались вопросы? </h2>
                    <button onClick={toggleAktiv} className="bg-[#94C11F] rounded-lg px-[35px] py-[20px] hover:bg-[#93c11fd2] m-[10px] text-[20px] text-white">ЗАДАТЬ ВОПРОС</button>
                </div>
                : <div className="fixed inset-0 bg-[#616161bd]  flex flex-col m-auto items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8 ">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    {/* Header */}
                    <div className="text-center mb-6 relative ">

                        <button onClick={toggleAktiv} className="font-bold absolute z-50 right-1 top-0">✕</button>
                        
                    <img
                        src={logo}
                        alt="Logo"
                        className="  sm:h-20 mx-auto"
                    />
                    <h1 className="md:text-4xl font-serif font-semibold mt-4 text-gray-800">
                        Задайте свой вопрос
                    </h1>
                    <p className="text-gray-600 mt-2 text-xs sm:text-base">
                        Оставьте свой вопрос и информацию, и наши специалисты свяжутся с вами
                    </p>
                    </div>

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
                            loading ? "Oтправить вопрос...." : "Oтправить вопрос"
                        }
                    </button>
                    </form>

                    {/* Footer */}
                    <p className="text-sm text-center text-gray-500 mt-4">
                       Ваши данные не будут переданы третьим лицам
                    </p>
                </div>
              </div>
            }

            <ToastContainer />
        </div>
    )
}

export default SendQuestion;