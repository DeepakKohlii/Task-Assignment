import React from 'react';
import Card from './Card';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const Section = ({ sections, cards, toggleShowAllCards }) => {
  const sectionCards = sections.showAllCards ? cards : cards.slice(0, 3);

  return (
    <div className={`bg-[#1F2128] p-4 mt-8 rounded-lg shadow-lg border border-gray-700 ${sections.cN}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white flex-grow-1 font-custom">{sections.title}</h2>
        <button
          onClick={() => toggleShowAllCards(sections.id)}
          className=" font-custom flex items-center px-2 py-1 bg-[#C2C3C5] text-black rounded-lg shadow-md hover:opacity-75 transition-all duration-300"
        >
          {sections.showAllCards ? 'See Less' : 'See More'}
          {sections.showAllCards ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {sectionCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Section;
