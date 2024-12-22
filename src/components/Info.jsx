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
        <div className="max-w-[80%] text-center font-[Barlow] text-4xl">
          <PortableText value={text} />
        </div>
        <div className="absolute bottom-8 text-sm font-black uppercase">
          <span className="font-[Credible]">web x (</span>
          <a
            href="https://sofja.uno"
            target="_blank"
            className="font-[Sniglet] hover:invert"
          >
            sofja
          </a>
          <span className="font-[Credible]"> + </span>
          <a
            href="https://astrosuka.xyz"
            target="_blank"
            className="font-[Sniglet] hover:invert"
          >
            astrosuka
          </a>
          <span className="font-[Credible]">)</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
