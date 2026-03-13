import { motion } from "framer-motion";

export default function Navbar({
  setPage,
  cartItems,
  page,
  user
}) {

const links = [
{ name:"Home", id:"home" },
{ name:"Browse", id:"browse" },
{ name:"Sell", id:"sell" }
]

return(

<nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-10 bg-transparent z-50">

{/* Logo */}

<motion.h1
whileHover={{scale:1.05}}
onClick={()=>setPage("home")}
className="text-2xl font-medium tracking-wide cursor-pointer bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
>
SkillSwap
</motion.h1>


{/* Center Links */}

<div className="flex items-center gap-8 text-sm font-light text-gray-300">

{links.map(link => (

<button
key={link.id}
onClick={()=>setPage(link.id)}
className="relative group transition"
>

{link.name}

<span
className={`absolute left-0 -bottom-1 h-[1px] bg-emerald-400 transition-all duration-300
${page===link.id ? "w-full" : "w-0 group-hover:w-full"}`}
></span>

</button>

))}

</div>


{/* Right Section */}

<div className="flex items-center gap-4">

{/* Cart */}

<button
onClick={()=>setPage("cart")}
className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition"
>

🛒

{cartItems.length>0 && (

<span className="absolute -top-1 -right-1 text-[10px] bg-emerald-400 text-black px-[5px] rounded-full">
{cartItems.length}
</span>

)}

</button>


{/* Login/Register */}

{!user && (

<div className="flex gap-3">

<button
onClick={()=>setPage("login")}
className="text-sm text-gray-300 hover:text-white transition"
>
Login
</button>

<button
onClick={()=>setPage("register")}
className="bg-emerald-400 text-black px-4 py-1 rounded-lg text-sm"
>
Register
</button>

</div>

)}


{/* Logged User */}

{user && (

<div className="flex items-center gap-3">

<span className="text-sm text-gray-300">
{user.name}
</span>

<button
onClick={()=>{
localStorage.removeItem("token")
window.location.reload()
}}
className="text-xs text-red-400"
>
Logout
</button>

</div>

)}

</div>

</nav>

)

}