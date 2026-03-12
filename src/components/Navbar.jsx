import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Navbar({ setPage, cartItems, page }) {

const links = [
{ name:"Home", id:"home" },
{ name:"Browse", id:"browse" },
{ name:"Sell", id:"sell" }
]

return(

<nav className="fixed top-0 left-0 right-0 z-50">

<div className="flex items-center justify-between px-10 h-16">

{/* Logo */}

<motion.h1
whileHover={{ scale:1.06 }}
transition={{ type:"spring", stiffness:300 }}
onClick={()=>setPage("home")}
className="text-2xl font-medium tracking-wide cursor-pointer
bg-gradient-to-r from-purple-400 via-pink-400 to-red-400
bg-clip-text text-transparent"
>
SkillSwap
</motion.h1>


{/* Center Links */}

<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 text-[14px] font-light text-gray-300">

{links.map(link => (

<button
key={link.id}
onClick={()=>setPage(link.id)}
className="relative group tracking-wide"
>

{link.name}

<span
className={`absolute left-0 -bottom-1 h-[1.5px] 
bg-gradient-to-r from-emerald-400 to-cyan-400
transition-all duration-300
${page===link.id ? "w-full" : "w-0 group-hover:w-full"}`}
></span>

</button>

))}

</div>


{/* Cart */}

<button
onClick={()=>setPage("cart")}
className="relative flex items-center justify-center w-10 h-10
rounded-xl hover:bg-white/10 transition-all duration-300"
>

<ShoppingCart size={18} strokeWidth={1.5}/>

{cartItems.length>0 && (

<span className="absolute -top-1 -right-1 text-[10px]
bg-emerald-400 text-black px-[6px] py-[1px] rounded-full">
{cartItems.length}
</span>

)}

</button>

</div>

</nav>

)

}