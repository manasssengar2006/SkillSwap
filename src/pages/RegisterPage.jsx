import { useState } from "react"
import API from "../api/api"

export default function RegisterPage({ role, setPage }) {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function register(){

try{

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

}

}

return(

<div className="min-h-screen flex items-center justify-center">

<div className="bg-white/5 border border-white/10 p-10 rounded-2xl w-[420px]">

<h2 className="text-xl mb-6 text-center">
Register as <span className="text-emerald-400">{role}</span>
</h2>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 mb-4 bg-black/40 border border-white/10 rounded-lg"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 mb-4 bg-black/40 border border-white/10 rounded-lg"
/>

<input
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-3 mb-6 bg-black/40 border border-white/10 rounded-lg"
/>

<button
onClick={register}
className="w-full bg-emerald-400 text-black py-3 rounded-xl"
>
Register
</button>

<p className="text-sm text-gray-400 mt-4 text-center">

Already have an account?

<button
onClick={()=>setPage("login")}
className="ml-2 text-emerald-400"
>
Login
</button>

</p>

</div>

</div>

)

}