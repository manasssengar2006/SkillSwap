
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Navbar({ setPage, cartItems, page, user, setUser }) {

const [menuOpen,setMenuOpen] = useState(false)
const [profileOpen,setProfileOpen] = useState(false)

const links = [
{ name:"Home", id:"home" },
{ name:"Browse", id:"browse" },
{ name:"Sell", id:"sell" }
]

const logout = () => {
localStorage.removeItem("token")
setUser(null)
setPage("home")
setProfileOpen(false)
}

return(

<nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] h-16 flex items-center justify-between px-6 md:px-10
backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] z-50">

{/* Glow Background */}

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-12 left-1/3 w-60 h-60 bg-emerald-400/10 blur-3xl rounded-full"></div>
</div>


{/* Logo */}

<motion.h1
whileHover={{scale:1.06}}
onClick={()=>setPage("home")}
className="text-xl md:text-2xl font-semibold tracking-wide cursor-pointer bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
>
SkillSwap
</motion.h1>


{/* Desktop Links */}

<div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

{links.map(link => (

<button
key={link.id}
onClick={()=>setPage(link.id)}
className="relative group"
>

{link.name}

<span
className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300
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

{cartItems?.length > 0 && (

<span className="absolute -top-1 -right-1 text-[10px] bg-emerald-400 text-black px-[6px] rounded-full font-semibold">
{cartItems.length}
</span>

)}

</button>


{/* Auth Section */}

{!user && (

<div className="hidden md:flex items-center gap-3">

<button
onClick={()=>setPage("login")}
className="text-sm text-gray-300 hover:text-white transition"
>
Login
</button>

<button
onClick={()=>setPage("register")}
className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-4 py-1 rounded-lg text-sm font-medium"
>
Register
</button>

</div>

)}


{/* User Profile */}

{user && (

<div className="relative hidden md:flex">

<button
onClick={()=>setProfileOpen(!profileOpen)}
className="flex items-center gap-2"
>

<div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-semibold">
{user.name?.charAt(0)}
</div>

</button>


{/* Profile Dropdown */}

<AnimatePresence>

{profileOpen && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
className="absolute right-0 top-12 w-44 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg flex flex-col py-2"
>

<button
onClick={()=>{
if(user.role === "seller"){
setPage("sellerDashboard")
}else{
setPage("buyerDashboard")
}
setProfileOpen(false)
}}
className="px-4 py-2 text-left text-sm hover:bg-white/5"
>
Dashboard
</button>

<button
onClick={()=>setPage("orders")}
className="px-4 py-2 text-left text-sm hover:bg-white/5"
>
Orders
</button>

<button
onClick={()=>setPage("settings")}
className="px-4 py-2 text-left text-sm hover:bg-white/5"
>
Settings
</button>

<button
onClick={logout}
className="px-4 py-2 text-left text-sm text-red-400 hover:bg-white/5"
>
Logout
</button>

</motion.div>

)}

</AnimatePresence>

</div>

)}


{/* Mobile Menu Button */}

{/* Mobile Controls */}

<div className="flex items-center gap-3 md:hidden">

{/* Profile Avatar */}

{user && (

<div className="relative">

<button
onClick={()=>setProfileOpen(!profileOpen)}
className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-black font-semibold"
>
{user.name?.charAt(0)}
</button>

<AnimatePresence>

{profileOpen && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
className="absolute right-0 top-12 w-44 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg flex flex-col py-2"
>

<button
onClick={()=>{
if(user.role === "seller"){
setPage("sellerDashboard")
}else{
setPage("buyerDashboard")
}
setProfileOpen(false)
}}
className="px-4 py-2 text-left text-sm hover:bg-white/5"
>
Dashboard
</button>

<button
onClick={()=>setPage("orders")}
className="px-4 py-2 text-left text-sm hover:bg-white/5"
>
Orders
</button>

<button
onClick={()=>setPage("settings")}
className="px-4 py-2 text-left text-sm hover:bg-white/5"
>
Settings
</button>

<button
onClick={logout}
className="px-4 py-2 text-left text-sm text-red-400 hover:bg-white/5"
>
Logout
</button>

</motion.div>

)}

</AnimatePresence>

</div>

)}

{/* Burger Menu */}

<button
onClick={()=>setMenuOpen(!menuOpen)}
className="text-white text-xl"
>
☰
</button>

</div>
</div>


{/* Mobile Menu */}

<AnimatePresence>

{menuOpen && (

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-20}}
className="absolute top-20 left-0 right-0 backdrop-blur-2xl bg-black/90 border border-white/10 rounded-2xl flex flex-col items-center py-6 gap-6 md:hidden"
>

{links.map(link => (

<button
key={link.id}
onClick={()=>{
setPage(link.id)
setMenuOpen(false)
}}
className="text-gray-300 text-lg hover:text-emerald-400"
>
{link.name}
</button>

))}

{!user && (

<>
<button
onClick={()=>setPage("login")}
className="text-gray-300"
>
Login
</button>

<button
onClick={()=>setPage("register")}
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
onClick={logout}
className="text-red-400"
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

