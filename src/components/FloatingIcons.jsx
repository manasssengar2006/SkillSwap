import { motion } from "framer-motion"
import { Code, Palette, PenTool, Calculator, Music, Globe } from "lucide-react"

const icons = [Code, Palette, PenTool, Calculator, Music, Globe]

export default function FloatingIcons(){

return(

<div className="absolute inset-0 pointer-events-none overflow-hidden z-10">

{icons.map((Icon,i)=>{

const left = Math.random()*90
const top = Math.random()*90

return(

<motion.div
key={i}
className="absolute text-white/20"

style={{
left:`${left}%`,
top:`${top}%`
}}

animate={{
y:[0,-40,0],
rotate:[0,12,-12,0]
}}

transition={{
duration:10 + Math.random()*5,
repeat:Infinity,
ease:"easeInOut"
}}
>

<Icon
size={70}
strokeWidth={1.2}
className="drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]"
/>

</motion.div>

)

})}

</div>

)

}