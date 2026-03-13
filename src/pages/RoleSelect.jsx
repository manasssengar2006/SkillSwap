import { motion } from "framer-motion"

export default function RoleSelect({ setPage, setRole }) {

return(

<div className="min-h-screen flex items-center justify-center">

<div className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center w-[400px]">

<h2 className="text-2xl mb-8 font-medium">
Login as
</h2>

<div className="flex gap-6 justify-center">

<motion.button
whileHover={{scale:1.05}}
onClick={()=>{
setRole("buyer")
setPage("login")
}}
className="px-8 py-3 bg-emerald-400 text-black rounded-xl"
>
Buyer
</motion.button>

<motion.button
whileHover={{scale:1.05}}
onClick={()=>{
setRole("seller")
setPage("login")
}}
className="px-8 py-3 bg-blue-400 text-black rounded-xl"
>
Seller
</motion.button>

</div>

</div>

</div>

)

}