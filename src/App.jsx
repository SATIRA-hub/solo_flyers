import { motion } from "framer-motion";
function App() {
  return (
    <>
      <motion.h1
        drag
        dragConstraints={{ left: 0, top: 0 }}
        className="animate-pulse cursor-crosshair select-none font-thin"
      >
        ༼ つ ◕_◕ ༽つ⁖ 🚧 archivo de solo flyers! 🚧
      </motion.h1>
    </>
  );
}

export default App;
