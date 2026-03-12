import SkillCard from "../components/SkillCard";

export default function BrowsePage({skills,addToCart}){

return(

<div className="pt-24 max-w-6xl mx-auto px-6">

<h2 className="text-2xl font-bold mb-6">
Browse Skills
</h2>

<div className="grid md:grid-cols-3 gap-6 [perspective:1000px]">

{skills.map(skill=>(
<SkillCard
key={skill.id}
skill={skill}
addToCart={addToCart}
/>
))}

</div>

</div>

)

}