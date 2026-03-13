import { useState } from "react"
import { motion } from "framer-motion"
import API from "../api/api"

export default function RegisterPage({ role, setPage }) {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
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

<div className="min-h-screen flex items-center justify-center px-6">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full max-w-md shadow-2xl"
>

{/* Glow Background */}
<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full"></div>


{/* Title */}

<h2 className="text-2xl font-semibold mb-2 text-center">
Register as
</h2>

<p className="text-center text-emerald-400 mb-8 text-lg font-medium">
{role}
</p>


{/* Name */}

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 mb-4 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-400 transition"
/>


{/* Email */}

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 mb-4 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-400 transition"
/>


{/* Password */}

<input
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 mb-6 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-400 transition"
/>


{/* Register Button */}

<button
onClick={register}
disabled={loading}
className="w-full bg-emerald-400 hover:bg-emerald-300 text-black py-3 rounded-xl font-medium transition flex items-center justify-center gap-2"
>

{loading ? (

<motion.div
animate={{rotate:360}}
transition={{repeat:Infinity,duration:1,ease:"linear"}}
className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
/>

) : "Create Account"}

</button>


{/* Login Link */}

<p className="text-sm text-gray-400 mt-6 text-center">

Already have an account?

<button
onClick={()=>setPage("login")}
className="ml-2 text-emerald-400 hover:text-emerald-300 transition"
>
Login
</button>

</p>

</motion.div>

</div>

)

}