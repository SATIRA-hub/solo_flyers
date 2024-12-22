import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

export default function Info({ text }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      className="fixed left-0 z-40 flex h-screen w-full origin-left bg-[#000] text-[#0f0] opacity-95 sm:w-1/2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center gap-4 px-10"
      >
        <div className="max-w-[50%] text-center font-serif text-xl">
          <PortableText value={text} />
        </div>
        <div className="text-xs font-black uppercase">
          web:{" "}
          <a href="https://sofja.uno" target="_blank" className="underline">
            sofja
          </a>{" "}
          +{" "}
          <a href="https://astrosuka.xyz" target="_blank" className="underline">
            astrosuka
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
