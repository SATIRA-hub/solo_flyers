import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getFlyers, getSettings } from "./sanity/sanity-utils";
import Player from "./components/Player";
import Info from "./components/Info";
import Lightbox from "./components/Lightbox";
function App() {
  const [flyers, setFlyers] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const imageSize = {
    small: "?h=250&fm=webp",
    medium: "?h=750&fm=webp",
    full: "?fm=webp",
  };

  useEffect(() => {
    getFlyers()
      .then((data) => setFlyers(data))
      .catch(setError);
    getSettings()
      .then((data) => setSettings(data))
      .catch(setError)
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  if (error) {
    return <div>error: {error.message}</div>;
  }

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <span className="animate-pulse text-xs font-black uppercase">
          fetcheando data...
        </span>
      </div>
    );
  }

  return (
    <>
      <motion.div
        drag
        className="fixed top-0 w-max cursor-move select-none border border-black bg-[#00ff00] px-1 text-center text-6xl font-black uppercase text-black mix-blend-difference sm:left-[calc(50%)] sm:top-[calc(45%)] sm:text-5xl md:sm:pb-1 lg:text-7xl"
      >
        <span className="text-[#000] transition-all hover:blur-[1px] sm:blur-[3px]">
          {settings.titulo}
        </span>
      </motion.div>

      <div
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        className={`fixed bottom-0 left-0 z-50 m-4 flex size-8 cursor-pointer select-none items-center justify-center rounded-full border border-black p-2 text-xl transition-all duration-500 ease-in-out sm:bottom-[48%] ${isInfoOpen ? "text-[#0f0]" : "bg-[#0f0] text-[#000]"}`}
      >
        <div>{isInfoOpen ? "X" : "?"}</div>
      </div>
      <AnimatePresence>
        {isInfoOpen && <Info text={settings.texto && settings.texto} />}
      </AnimatePresence>

      <div className="grid grid-cols-6">
        {flyers &&
          flyers.map((mes) =>
            mes.flyers
              .slice()
              .reverse()
              .filter((flyer) => flyer.asset && flyer.asset.url !== undefined)
              .map((flyer) => (
                <div
                  key={flyer._key}
                  className="flex aspect-square w-full cursor-zoom-in items-center justify-center overflow-hidden transition-all duration-500 ease-in-out sm:hover:invert"
                  onClick={() => setSelectedFlyer(flyer)}
                >
                  <img src={flyer.asset.url + imageSize.medium} />
                </div>
              )),
          )}
      </div>

      {settings.embed && <Player embed={settings.embed} />}

      {selectedFlyer && (
        <Lightbox flyer={selectedFlyer} setSelectedFlyer={setSelectedFlyer} />
      )}
    </>
  );
}

export default App;
