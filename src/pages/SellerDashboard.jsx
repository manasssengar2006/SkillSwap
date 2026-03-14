
import { motion } from "framer-motion"

export default function SellerDashboard({ setPage }) {

return (

<div className="min-h-screen bg-[#0f172a] p-10 pt-28">

<h1 className="text-3xl font-semibold mb-8">
Seller Dashboard
</h1>

<div className="grid md:grid-cols-3 gap-6">

{/* Add Skill */}

<motion.div
whileHover={{scale:1.05}}
className="p-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer"
onClick={()=>setPage("sell")}
>

<h2 className="text-xl font-semibold mb-2">➕ Add Skill</h2>

<p className="text-gray-400 text-sm">
Create a new skill listing
</p>

</motion.div>


{/* My Skills */}

<motion.div
whileHover={{scale:1.05}}
className="p-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer"
>

<h2 className="text-xl font-semibold mb-2">🧠 My Skills</h2>

<p className="text-gray-400 text-sm">
Manage your listed skills
</p>

</motion.div>


{/* Orders */}

<motion.div
whileHover={{scale:1.05}}
className="p-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer"
>

<h2 className="text-xl font-semibold mb-2">📦 Orders</h2>

<p className="text-gray-400 text-sm">
View orders from buyers
</p>

</motion.div>

</div>

</div>

)

}

