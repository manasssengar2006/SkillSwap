import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SkillCard({ skill, addToCart }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-emerald-400/40 transition"
    >

      {/* Seller */}
      <div className="flex items-center gap-3 mb-3">

        <div className="w-11 h-11 bg-emerald-400/20 rounded-xl flex items-center justify-center font-bold text-emerald-400">
          {skill.avatar}
        </div>

        <div>
          <p className="text-sm font-semibold">{skill.name}</p>
          <p className="text-xs text-gray-400">{skill.college}</p>
        </div>

      </div>

      {/* Title */}
      <h3 className="font-semibold mb-2">
        {skill.title}
      </h3>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-3">

        {skill.tags.map(tag => (
          <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">

        <div>
          <p className="text-emerald-400 font-bold">
            ₹{skill.price}
          </p>

          <p className="text-xs text-yellow-400">
            ★ {skill.rating}
          </p>
        </div>

        <button
          onClick={(e)=>{
            e.stopPropagation();
            addToCart(skill);
          }}
          className="bg-emerald-400 text-black px-3 py-1 rounded-lg text-sm font-semibold"
        >
          Add
        </button>

      </div>

    </motion.div>
  );
}