import React from 'react';

export const Card = () => {
  const cards = [
    {
      id: 1,
      title: 'Waste Management',
      description:
        'Seamlessly connect waste contributors to biogas producers, ensuring efficient waste collection and utilization.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      link: '#',
    },
    // You can add more cards here as needed
    {
      id: 3,
      title: 'Recycling',
      description:
        'Turn waste materials into reusable materials to reduce environmental impact and create new products.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7l4-4m0 0l4 4m-4-4v12m4 0l4-4m0 0l-4-4m4 4V3"
          />
        </svg>
      ),
      link: '#',
    },
    {
        id: 2,
        title: 'Biogas Distribution',
        description:
          'Enable customers to access clean energy by connecting them directly to biogas producers ready for distribution..',
        icon: (
          <svg
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6" 
          fill="none"
           viewBox="0 0 24 24" 
           stroke="currentColor"          >
            <path
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        ),
        link: '#',
      },
  
  ];

  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
          <span className="inline-block p-3 text-indigo-500 bg-indigo-100 rounded-full dark:text-white dark:bg-indigo-500">
            {card.icon}
          </span>

          <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
            {card.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-300">{card.description}</p>
          <a
            href={card.link}
            className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            <span className="mx-1">Read More</span>
            <svg
              className="w-4 h-4 mx-1 rtl:-scale-x-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};


