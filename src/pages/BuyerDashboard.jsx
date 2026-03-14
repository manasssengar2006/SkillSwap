
import { motion } from "framer-motion"

export default function BuyerDashboard({ setPage }) {

return (

<div className="relative min-h-screen bg-[#black] pt-28 px-6">

{/* Grid Background */}

<div className="absolute inset-0 opacity-10">
<div className="h-full w-full bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px]"></div>
</div>


<div className="relative z-10 max-w-6xl mx-auto">

<h1 className="text-3xl md:text-4xl font-semibold mb-10">
Buyer Dashboard
</h1>


<div className="grid md:grid-cols-3 gap-6">


{/* Browse Skills */}

<motion.div
whileHover={{scale:1.05,y:-4}}
className="p-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer backdrop-blur-xl hover:border-emerald-400/40 transition"
onClick={()=>setPage("browse")}
>

<h2 className="text-xl font-semibold mb-2">🔎 Browse Skills</h2>

<p className="text-gray-400 text-sm">
Discover skills from other students
</p>

</motion.div>


{/* Cart */}

<motion.div
whileHover={{scale:1.05,y:-4}}
className="p-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer backdrop-blur-xl hover:border-emerald-400/40 transition"
onClick={()=>setPage("cart")}
>

<h2 className="text-xl font-semibold mb-2">🛒 My Cart</h2>

<p className="text-gray-400 text-sm">
View skills you added to cart
</p>

</motion.div>


{/* Orders */}

<motion.div
whileHover={{scale:1.05,y:-4}}
className="p-6 bg-white/5 border border-white/10 rounded-xl cursor-pointer backdrop-blur-xl hover:border-emerald-400/40 transition"
onClick={()=>setPage("orders")}
>

<h2 className="text-xl font-semibold mb-2">📦 My Orders</h2>

<p className="text-gray-400 text-sm">
Track purchased skills
</p>

</motion.div>


</div>

</div>

</div>

)

}

