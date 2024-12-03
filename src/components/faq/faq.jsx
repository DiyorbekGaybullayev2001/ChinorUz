import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Какие условия доставки?",
      answer: "Доставка по Ташкенту от 30,000 сум. Отправляем мебель в другие города Узбекистана, условия доставки обсуждаются индивидуально.",
    },
    {
      question: "Какие есть способы оплаты?",
      answer: "Вы можете оплатить наличными, картой или через онлайн-сервисы.",
    },
    {
      question: "Надежно ?",
      answer: "Конечно, мы производим качественный и надежный бренд",
    },
    {
      question: "Сколько лет они работают ?",
      answer: "С 2008 года мы сделали более 100 000 единиц мебели, 60.000+ Довольных клиентов, 16 Лет опыта",
    },
    {
      question: "Можно ли продавать мебель кридет ?",
      answer: "Конечно, вы заплатите 10% от общей суммы. Остаток суммы в кридет 'UZUM NASIYA' 'ALIF' 'ZOOD'",
    },
    
    // Qo'shimcha savollarni bu yerga qo'shing
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 m-auto pt-[70px]">
      <h1 className="text-xl md:text-[30px] font-semibold mb-6 text-center">
        Вопросы, которые задают нам очень часто
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-y-lime-500">
            <button
              className="flex justify-between items-center w-full py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
