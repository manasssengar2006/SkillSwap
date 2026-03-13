import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">

      <div className="relative flex items-center justify-center">

        {/* Glow */}
        <div className="absolute w-32 h-32 bg-emerald-400 blur-3xl opacity-30 rounded-full"></div>

        {/* Orb */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="w-20 h-20 rounded-full border-4 border-transparent 
          border-t-emerald-400 border-r-cyan-400 border-b-purple-500"
        />

      </div>

      {/* Text */}
      <p className="absolute bottom-20 text-gray-400 text-sm tracking-wide">
        Loading SkillSwap...
      </p>

    </div>
  );
}