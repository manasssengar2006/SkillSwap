
import { useState } from "react"
import { motion } from "framer-motion"
import API from "../api/api"

export default function LoginPage({ setPage, setUser }) {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("buyer")
const [loading,setLoading] = useState(false)

async function login(){

try{

setLoading(true)

const res = await API.post("/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

setUser(res.data.user)

if(res.data.user.role === "seller"){
setPage("sellerDashboard")
}else{
setPage("buyerDashboard")
}

}catch(err){
alert("Login failed")
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
className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full max-w-md shadow-2xl"
>

{/* Glow Background */}

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full"></div>

<h2 className="text-3xl font-semibold text-center mb-6">
Login
</h2>


{/* Role Selector */}

<p className="text-sm text-gray-400 mb-3 text-center">
Login as
</p>

<div className="grid grid-cols-2 gap-4 mb-6">

{/* Buyer */}

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
Purchase skills
</p>

</div>


{/* Seller */}

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
Sell your skills
</p>

</div>

</div>


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


{/* Login Button */}

<button
onClick={login}
disabled={loading}
className="w-full bg-emerald-400 hover:bg-emerald-300 text-black py-3 rounded-xl font-medium transition flex items-center justify-center gap-2"
>

{loading ? (

<motion.div
animate={{rotate:360}}
transition={{repeat:Infinity,duration:1,ease:"linear"}}
className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
/>

) : "Login"}

</button>


{/* Register */}

<p className="text-sm text-gray-400 mt-6 text-center">

Don't have an account?

<button
onClick={()=>setPage("register")}
className="ml-2 text-emerald-400 hover:text-emerald-300 transition"
>
Register
</button>

</p>

</motion.div>

</div>

)

}

