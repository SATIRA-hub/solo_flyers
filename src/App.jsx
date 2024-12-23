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
        <span className="animate-pulse font-[Barlow] text-xs font-black">
          fetcheando data...
        </span>
      </div>
    );
  }

  return (
    <>
      <motion.div
        drag
        className="fixed top-[calc(20%)] w-max cursor-move select-none border border-black bg-[#00ff00] px-1 text-center text-6xl font-black uppercase text-black mix-blend-difference sm:left-[calc(50%)] sm:top-[calc(45%)] sm:text-5xl md:sm:pb-1 lg:text-7xl"
      >
        <span className="text-[#000] blur-[2px] transition-all hover:blur-none">
          <span className="inline-block font-[Sniglet]">solo</span>
          <span className="inline-block font-[Credible]">flyers</span>
        </span>
      </motion.div>

      <div
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        className={`fixed bottom-0 left-0 z-50 m-4 flex size-12 cursor-pointer select-none items-center justify-center rounded-full border border-black p-2 text-xl transition-all duration-500 ease-in-out sm:bottom-[48%] ${isInfoOpen ? "text-[#0f0]" : "bg-[#0f0] text-[#000]"}`}
      >
        <div>
          {isInfoOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#0f0"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z" />
            </svg>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isInfoOpen && <Info text={settings.texto && settings.texto} />}
      </AnimatePresence>

      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
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
                  <img src={flyer.asset.url + imageSize.small} />
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
