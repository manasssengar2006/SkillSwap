import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";

export default function HomePage({ setPage }) {

return (

<div className="relative overflow-hidden">

{/* Floating Icons */}
<FloatingIcons/>

{/* Grid Background */}

<div className="absolute inset-0 z-0 opacity-10">
<div className="h-full w-full bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px]"></div>
</div>


<section className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-6xl mx-auto">


{/* Badge */}

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="mb-6 px-4 py-1 text-xs sm:text-sm tracking-wide bg-white/5 border border-white/10 rounded-full text-gray-300"
>
🎓 Built for students • Learn, earn & collaborate
</motion.div>


{/* Headline */}

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-3xl sm:text-4xl md:text-6xl leading-tight"
>

Turn your campus skills into
<br/>

<span
className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
style={{ fontFamily: "Playfair Display, serif" }}
>
REAL OPPORTUNITIES
</span>

</motion.h1>


{/* Description */}

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3,duration:0.7}}
className="text-gray-400 mt-6 max-w-2xl text-sm sm:text-base leading-relaxed"
>

SkillSwap is a student-powered micro-marketplace where you can 
<strong className="text-white"> sell what you know and find what you need.</strong>

Whether it's debugging code, tutoring calculus, sharing notes, designing interfaces, 
or teaching a language — connect with talented students across campuses and exchange knowledge effortlessly.

</motion.p>


{/* Buttons */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.5}}
className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto justify-center"
>

<button
onClick={()=>setPage("browse")}
className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-3 rounded-xl font-medium transition shadow-lg shadow-emerald-400/20 w-full sm:w-auto"
>
Browse Skills
</button>

<button
onClick={()=>setPage("sell")}
className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-gray-200 transition w-full sm:w-auto"
>
Sell Your Skill
</button>

</motion.div>


{/* Stats */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.7}}
className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-16 sm:mt-20 text-center text-sm text-gray-400 w-full"
>

<div>
<p className="text-2xl font-semibold text-white">2,400+</p>
<p>Student Sellers</p>
</div>

<div>
<p className="text-2xl font-semibold text-white">9,000+</p>
<p>Skills Exchanged</p>
</div>

<div>
<p className="text-2xl font-semibold text-white">50+</p>
<p>Universities</p>
</div>

</motion.div>

</section>

</div>

)
}