
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Tools',
      skills: ['SQL', 'Power BI', 'Excel']
    },
    {
      title: 'Analysis Skills',
      skills: ['Data Cleaning', 'Data Modeling', 'KPI Reporting', 'Dashboard Design']
    },
    {
      title: 'Other Tools',
      skills: ['Python (Basic)', 'REST APIs', 'Jupyter']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Technical Expertise</h2>
          <div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="h-8 w-1 bg-blue-600 rounded-full"></span>
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-slate-200"></div>
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
