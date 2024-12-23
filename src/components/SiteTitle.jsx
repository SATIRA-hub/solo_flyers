import useIsMobile from "../utils/useIsMobile";
import { motion } from "framer-motion";

export default function SiteTitle() {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <motion.div
          drag
          className="fixed left-[calc(50%)] top-[calc(45%)] w-max cursor-move select-none border border-black bg-[#00ff00] px-1 text-center text-6xl font-black uppercase text-black mix-blend-difference sm:text-5xl lg:text-7xl"
        >
          <TitleText />
        </motion.div>
      ) : (
        <div className="pointer-events-none fixed top-[calc(20%)] w-max border border-black bg-[#00ff00] px-1 text-center text-6xl font-black uppercase text-black mix-blend-difference">
          <TitleText />
        </div>
      )}
    </>
  );
}

function TitleText() {
  return (
    <span className="text-[#000] blur-[2px] transition-all hover:blur-none">
      <span className="inline-block font-[Sniglet]">solo</span>
      <span className="inline-block font-[Credible]">flyers</span>
    </span>
  );
}
