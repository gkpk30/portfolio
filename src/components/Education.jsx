// import React from 'react';
// import PierceLogo from '../assets/pierce.png'
// import CsunLogo from '../assets/csun.png'
// const Education = () => {
//   return (
//     <section className="w-full bg-[#0a192f] text-gray-300 py-8">
//       <div className="max-w-[1000px] mx-auto p-4">
//         <h2 className="text-4xl border-b-4 border-pink-600 inline">Education</h2>
//         <p className="py-4">// </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 text-center">
//           <div className="shadow-md  bg-slate-700 p-4">
//             <img className="w-20 mx-auto" src={CsunLogo} alt="Cal State Northridge Logo" />
//             <p className="my-4">Bachelor of Arts in Political Science</p>
//             <p className="text-sm">Cal State Northridge</p>
//           </div>
//           <div className="shadow-md  bg-slate-700 p-4">
//             <img className="w-20 mx-auto" src={PierceLogo} alt="Pierce College Logo" />
//             <p className="my-4">Associate of Arts in Programming</p>
//             <p className="text-sm">Pierce College</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from 'react';
import { PaperClipIcon } from '@heroicons/react/outline';
import CSUNLogo from '../assets/csun.png';
import PierceLogo from '../assets/pierce.png';

const Education = () => {
  return (
    <section className="w-full bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto p-4">
        <h2 className="text-4xl border-b-4 border-pink-600 inline">Education</h2>
        <div className="divide-y divide-white/10">
          <div className="px-4 py-6 flex items-center gap-4">
            <img src={CSUNLogo} alt="CSUN Logo" className="w-12" />
            <div>
              <h3 className="text-lg font-medium leading-6 text-white">Cal State Northridge</h3>
              <p className="text-sm leading-5 text-gray-400">BA in Political Science</p>
            </div>
          </div>
          <div className="px-4 py-6 flex items-center gap-4">
            <img src={PierceLogo} alt="Pierce College Logo" className="w-12" />
            <div>
              <h3 className="text-lg font-medium leading-6 text-white">Pierce College</h3>
              <p className="text-sm leading-5 text-gray-400">AA in Programming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
