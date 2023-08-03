import React, { useState, useEffect } from 'react';
import Section from './Section';
import cards from './cards.json';

const SectionsContainer = () => {
  const [sectionsData, setSectionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    import('./sections.json')
      .then((data) => {
        setSectionsData(data.default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading sections data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const toggleShowAllCards = (sectionId) => {
    setSectionsData((prevData) =>
      prevData.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            showAllCards: !section.showAllCards,
          };
        }
        return section;
      })
    );
  };

  return (
    <div className="container mx-auto mt-14">
      {sectionsData.map((section) => (
        <Section
          key={section.id}
          sections={section}
          cards={cards.filter((card) => card.parent_sec === section.id)}
          toggleShowAllCards={toggleShowAllCards}
        />
      ))}
    </div>
  );
};

export default SectionsContainer;
