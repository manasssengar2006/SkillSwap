import { motion } from "framer-motion";
import {
  Code,
  Palette,
  PenTool,
  Calculator,
  Music,
  Globe,
  BookOpen,
  Lightbulb
} from "lucide-react";

const icons = [
  Code,
  Palette,
  PenTool,
  Calculator,
  Music,
  Globe,
  BookOpen,
  Lightbulb
];

export default function FloatingSkills() {

  return (

    <div className="absolute inset-0 -z-10 pointer-events-none">

      {icons.map((Icon, i) => {

        const left = Math.random() * 100;
        const top = Math.random() * 100;

        return (

          <motion.div
            key={i}

            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`
            }}

            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0]
            }}

            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}

            className="text-white/30"
          >

            <Icon
              size={70}
              strokeWidth={1.2}
              className="drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            />

          </motion.div>

        )

      })}

    </div>

  )

}