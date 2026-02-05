
import React from 'react';

const Impact: React.FC = () => {
  const impactStatements = [
    {
      stat: "Strategic Planning",
      text: "Enabled targeted marketing by identifying highest-performing cities and high-growth brands.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      stat: "Customer Insight",
      text: "Uncovered key demographics and payment preferences to optimize checkout and inventory.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      stat: "Efficiency Gained",
      text: "Reduced manual reporting time by 70% through automated data cleaning and structured Excel models.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <svg className="w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M47.5,-52.1C60.4,-44.5,68.8,-27.7,71.2,-10.1C73.5,7.6,69.9,26.1,60,39.3C50.2,52.5,34.2,60.5,17.1,64.2C0,67.9,-18.2,67.3,-33.5,60.2C-48.7,53.2,-61.1,39.7,-66.2,23.9C-71.3,8,-69.1,-10.1,-61.6,-25.9C-54.2,-41.7,-41.5,-55.1,-26.8,-61.8C-12.1,-68.4,4.5,-68.3,18.7,-64.1C32.9,-59.9,44.5,-51.7,47.5,-52.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-bold">The Business Value I Provide</h2>
            <p className="mt-4 text-blue-200">Translating complex data structures into high-impact visual stories.</p>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {impactStatements.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="bg-white p-3 rounded-lg w-fit mb-6 shadow-lg shadow-blue-950/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-100">{item.stat}</h3>
                <p className="text-blue-50/80 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
