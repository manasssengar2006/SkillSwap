import { useState } from "react"
import API from "../api/api"

export default function LoginPage({ role, setPage, setUser }) {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function login(){

try{

const res = await API.post("/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

setUser(res.data.user)

if(res.data.user.role==="seller"){
setPage("dashboard")
}else{
setPage("home")
}

}catch(err){
alert("Login failed")
}

}

return(

<div className="min-h-screen flex items-center justify-center">

<div className="bg-white/5 border border-white/10 p-10 rounded-2xl w-[420px]">

<h2 className="text-xl mb-6 text-center">
Login as <span className="text-emerald-400">{role}</span>
</h2>

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
onClick={login}
className="w-full bg-emerald-400 text-black py-3 rounded-xl"
>
Login
</button>

<p className="text-sm text-gray-400 mt-4 text-center">

Don't have an account?

<button
onClick={()=>setPage("register")}
className="ml-2 text-emerald-400"
>
Register
</button>

</p>

</div>

</div>

)

}