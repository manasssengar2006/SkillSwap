
import { useState } from "react"
import { motion } from "framer-motion"
import API from "../api/api"

export default function RegisterPage({ setPage }) {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("buyer")
const [loading,setLoading] = useState(false)

async function register(){

try{

setLoading(true)

await API.post("/auth/register",{
name,
email,
password,
role
})

alert("Account created")
setPage("login")

}catch(err){
alert("Registration failed")
}finally{
setLoading(false)
}

}

return(

<div className="min-h-screen flex items-center justify-center px-6 bg-[#0f172a]">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full max-w-md"
>

<h2 className="text-3xl font-semibold text-center mb-6">
Create Account
</h2>

{/* ROLE SELECTOR */}

<p className="text-sm text-gray-400 mb-3 text-center">
Choose how you want to use SkillSwap
</p>

<div className="grid grid-cols-2 gap-4 mb-6">

{/* BUYER CARD */}

<div
onClick={()=>setRole("buyer")}
className={`cursor-pointer p-4 rounded-xl border transition
${role==="buyer"
? "border-emerald-400 bg-emerald-400/10"
: "border-white/10 hover:border-emerald-300"}
`}
>

<h3 className="font-semibold mb-1">🛒 Buyer</h3>

<p className="text-xs text-gray-400">
Purchase skills from other students
</p>

</div>


{/* SELLER CARD */}

<div
onClick={()=>setRole("seller")}
className={`cursor-pointer p-4 rounded-xl border transition
${role==="seller"
? "border-emerald-400 bg-emerald-400/10"
: "border-white/10 hover:border-emerald-300"}
`}
>

<h3 className="font-semibold mb-1">💼 Seller</h3>

<p className="text-xs text-gray-400">
Sell your skills and earn money
</p>

</div>

</div>


{/* NAME */}

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 mb-4 bg-black/40 border border-white/10 rounded-xl"
/>


{/* EMAIL */}

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 mb-4 bg-black/40 border border-white/10 rounded-xl"
/>


{/* PASSWORD */}

<input
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 mb-6 bg-black/40 border border-white/10 rounded-xl"
/>


{/* REGISTER BUTTON */}

<button
onClick={register}
disabled={loading}
className="w-full bg-emerald-400 hover:bg-emerald-300 text-black py-3 rounded-xl font-medium"
>
{loading ? "Creating..." : "Create Account"}
</button>


<p className="text-sm text-gray-400 mt-6 text-center">

Already have an account?

<button
onClick={()=>setPage("login")}
className="ml-2 text-emerald-400"
>
Login
</button>

</p>

</motion.div>

</div>

)

}

