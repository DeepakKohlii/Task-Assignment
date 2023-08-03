import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="bg-[#4A4A54] mb-5 p-4 rounded-md shadow-lg shadow-gray-700 font-custom ">
      <h3 className="text-xl font-bold text-white">{card.card_title}</h3>
      {card.data && (
        <p className="text-white/60">
          {card.data_type === 'progress'
            ? `${card.data_value}% Progress`
            : `${card.data_type}: ${card.data_value}`}
        </p>
      )}
      {card.data_type === 'text' && <p className="mt-2 text-white/60 ">{card.data_value}</p>}
      {card.link && (
        <a href={card.redirect} className="mt-2 block hover:underline text-white">
          {card.link_name}
        </a>
      )}
      {card.button && (
        <button className="mt-3 bg-blue-500 shadow-md
        text-white  px-4 py-1 rounded-lg">
       {card.button_name}
        </button>
      )}
      {card.note && <p className="mt-2 text-sm text-gray-400">{card.note}</p>}
    </div>
  );
};

export default Card;
