// import React from 'react';

// const teamMembers = [
//     {
//         name: 'ANU',
//         role: 'role',
//         image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
//         rotation: '-rotate-[4deg]',
//         imgRotation: 'rotate-[4deg]',
//     },
//     {
//         name: 'Rudhra',
//         role: 'role',
//         image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
//         rotation: 'rotate-[3deg]',
//         imgRotation: '-rotate-[3deg]',
//     },
//     {
//         name: 'Akash',
//         role: 'role',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
//         rotation: '-rotate-[4deg]',
//         imgRotation: 'rotate-[4deg]',
//     }
// ];

// const Team = () => {
//     return (
//         <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
//             <div className="bg-Mungo-light rounded-[2.5rem] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

//                 {/* Left Content */}
//                 {/* <div className="lg:w-1/3 space-y-6">
//                     <h2 className="text-4xl md:text-5xl font-jakarta text-Mungo-dark">The Pawzy Team</h2>
//                     <p className="text-Mungo-gray leading-relaxed text-lg">
//                         Pet lovers. Problem solvers. Care partners. We're a team of passionate people working every day to make pet care better for everyone.
//                     </p>
//                 </div> */}

//                 {/* Right Content - Team Profiles */}
//                 <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-6 md:gap-8 lg:gap-10">
//                     {teamMembers.map((member, idx) => (
//                         <div key={idx} className="flex flex-col">
//                             <div className={`w-40 h-48 md:w-48 md:h-56 rounded-2xl border-[3px] border-[#2bc2a7] overflow-hidden relative ${member.rotation} shadow-sm transition-transform hover:scale-105 duration-300`}>
//                                 {/* <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className={`absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] object-cover ${member.imgRotation}`}
//                 /> */}
//                             </div>
//                             {/* <div className="mt-6 ml-2">
//                                 <h3 className="text-xl font-jakarta font-bold text-Mungo-dark">{member.name}</h3>
//                                 <p className="text-Mungo-gray text-base">{member.role}</p>
//                             </div> */}
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Team;
