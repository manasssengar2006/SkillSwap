import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar({ setPage, cartItems, page, user,setUser }) {

const [menuOpen,setMenuOpen] = useState(false)

const links = [
{ name:"Home", id:"home" },
{ name:"Browse", id:"browse" },
{ name:"Sell", id:"sell" }
]

return(

<nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 md:px-10 backdrop-blur-xl bg-black/40 border-b border-white/10 z-50">

{/* Logo */}

<motion.h1
whileHover={{scale:1.05}}
onClick={()=>setPage("home")}
className="text-xl md:text-2xl font-semibold tracking-wide cursor-pointer bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
>
SkillSwap
</motion.h1>


{/* Desktop Links */}

<div className="hidden md:flex items-center gap-8 text-sm font-light text-gray-300">

{links.map(link => (

<button
key={link.id}
onClick={()=>setPage(link.id)}
className="relative group transition"
>

{link.name}

<span
className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-400 transition-all duration-300
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

<span className="absolute -top-1 -right-1 text-[10px] bg-emerald-400 text-black px-[6px] rounded-full">
{cartItems.length}
</span>

)}

</button>


{/* Desktop Auth */}

<div className="hidden md:flex items-center gap-3">

{!user && (

<>
<button
onClick={()=>setPage("login")}
className="text-sm text-gray-300 hover:text-white transition"
>
Login
</button>

<button
onClick={()=>setPage("register")}
className="bg-emerald-400 hover:bg-emerald-300 text-black px-4 py-1 rounded-lg text-sm transition"
>
Register
</button>
</>

)}

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
className="text-xs text-red-400 hover:text-red-300"
>
Logout
</button>

</div>

)}

</div>


{/* Mobile Menu Button */}

<button
onClick={()=>setMenuOpen(!menuOpen)}
className="md:hidden text-white text-xl"
>
☰
</button>

</div>


{/* Mobile Menu */}

<AnimatePresence>

{menuOpen && (

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-20}}
className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden"
>

{links.map(link => (

<button
key={link.id}
onClick={()=>{
setPage(link.id)
setMenuOpen(false)
}}
className="text-gray-300 text-lg hover:text-emerald-400 transition"
>
{link.name}
</button>

))}

{!user && (

<>
<button
onClick={()=>{
setPage("login")
setMenuOpen(false)
}}
className="text-gray-300 hover:text-white"
>
Login
</button>

<button
onClick={()=>{
setPage("register")
setMenuOpen(false)
}}
className="bg-emerald-400 text-black px-5 py-2 rounded-lg"
>
Register
</button>
</>

)}

{user && (

<>
<span className="text-gray-300">{user.name}</span>

<button
onClick={()=>{
  localStorage.removeItem("token")
  setUser(null)
  setPage("home")
}}
className="text-xs text-red-400"
>
Logout
</button>
</>

)}

</motion.div>

)}

</AnimatePresence>

</nav>

)

}