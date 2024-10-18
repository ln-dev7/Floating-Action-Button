import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  const images = ["/1.svg", "/2.svg", "/3.svg", "/4.svg"];

  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10 bg-white">
      <div className="w-full relative flex items-start justify-center">
        <div className="flex items-center justify-center relative gap-4">
          <motion.div
            className="absolute left-0 bg-white w-full rounded-[40px] z-10"
            animate={{
              x: active ? "calc(100% + 20px)" : 0,
            }}
            transition={{ type: "ease-in", duration: 0.5 }}
          >
            <motion.button
              className="size-20 rounded-full flex items-center justify-center bg-zinc-400"
              onClick={() => setActive(!active)}
              animate={{ rotate: active ? 45 : 0 }}
              transition={{
                type: "ease-in",
                duration: 0.5,
              }}
            >
              <Plus size={40} strokeWidth={3} className="text-white" />
            </motion.button>
          </motion.div>
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-full size-16"
              animate={{
                filter: active ? "blur(0px)" : "blur(2px)",
                scale: active ? 1 : 0.9,
                rotate: active ? 0 : 45,
              }}
              transition={{
                type: "ease-in",
                duration: 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
