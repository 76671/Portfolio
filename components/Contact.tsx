
import React from 'react';

const Contact: React.FC = () => {
  const resumeLink = "https://drive.google.com/uc?export=download&id=1mc7rNIJO7zK7OvFKXssF7_2f5588yM-r";

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm currently seeking entry-level opportunities in Data Analysis and SQL Development. 
              Feel free to reach out to discuss how I can help your organization with data-driven insights!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:viveksaurav64@gmail.com" 
                className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">viveksaurav64@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vivek-saurav-b11984225" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="font-medium">linkedin.com/in/vivek-saurav</span>
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
             <a 
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all transform hover:-translate-y-1 text-center"
             >
                Download Resume PDF
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
