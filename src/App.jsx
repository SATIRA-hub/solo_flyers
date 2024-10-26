import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getFlyers, getSettings } from "./sanity/sanity-utils";
import Player from "./components/Player";
import Info from "./components/Info";
function App() {
  const [flyers, setFlyers] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isInfoOpen, setIsInfoOpen] = useState(false);

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
        className="top:0 fixed cursor-move select-none border border-black bg-[#00ff00] px-1 text-center text-xl font-black uppercase text-black sm:left-[calc(50%-285px)] sm:top-[calc(50%-25px)] sm:w-[570px] sm:pb-1 sm:text-7xl"
      >
        <span className="transition-all hover:blur-[1px] sm:blur-[3px]">
          {settings.titulo}
        </span>
      </motion.div>

      <div
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        className={`fixed right-0 top-0 z-50 m-4 flex size-8 cursor-pointer select-none items-center justify-center rounded-full border border-black bg-[#0f0] p-2 text-xl text-[#000] ${isInfoOpen ? "sm:mr-8" : ""}`}
      >
        <div>{isInfoOpen ? "x" : "?"}</div>
      </div>
      {isInfoOpen && <Info text={settings.texto && settings.texto} />}

      <div className="grid grid-cols-6">
        {flyers &&
          flyers.map((mes) =>
            mes.flyers
              .slice()
              .reverse()
              .filter((flyer) => flyer.asset && flyer.asset.url !== undefined)
              .map((flyer) => (
                <img
                  key={flyer._key}
                  src={flyer.asset.url + imageSize.medium}
                />
              )),
          )}
      </div>

      {settings.embed && <Player embed={settings.embed} />}
    </>
  );
}

export default App;
