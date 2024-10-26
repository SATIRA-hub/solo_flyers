import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getFlyers, getSettings } from "./sanity/sanity-utils";
import Player from "./components/Player";
function App() {
  const [flyers, setFlyers] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        . . .
      </div>
    );
  }

  console.log(flyers);

  return (
    <>
      <motion.div
        drag
        className="fixed left-[calc(50%-180px)] top-[calc(50%-25px)] h-[50px] w-[360px] cursor-crosshair select-none border border-black bg-[#00ff00] p-4 text-center text-xs uppercase text-black"
      >
        <span className="transition-all hover:blur-[1px] sm:blur-[3px]">
          {settings.titulo}
        </span>
      </motion.div>

      <div className="grid grid-cols-12">
        {flyers &&
          flyers.map((mes) =>
            mes.flyers
              .slice()
              .reverse()
              .filter((flyer) => flyer.asset && flyer.asset.url !== undefined)
              .map((flyer) => (
                <img key={flyer._key} src={flyer.asset.url + imageSize.small} />
              )),
          )}
      </div>

      {settings.embed && <Player embed={settings.embed} />}
    </>
  );
}

export default App;
