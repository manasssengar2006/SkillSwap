export default function CategoryCard({cat,onClick}){

return(

<div
onClick={onClick}
className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-emerald-400/40 cursor-pointer"
>

<div className="text-2xl mb-2">
{cat.icon}
</div>

<p className="font-semibold">
{cat.label}
</p>

</div>

)

}