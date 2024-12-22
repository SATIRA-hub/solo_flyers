import { useState, useEffect } from "react";

export default function Player({ embed }) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [playListId, setPlayListId] = useState(null);

  useEffect(() => {
    setPlayListId(embed.match(/playlists\/(\d+)/)[1]);
  }, [embed]);

  return (
    <div
      className={`fixed bottom-0 z-50 flex w-full flex-col items-end justify-center transition-all duration-500 ease-in-out ${playerOpen ? "translate-y-[0]" : "translate-y-[400px]"} pointer-events-none`}
    >
      <div
        onClick={() => setPlayerOpen(!playerOpen)}
        className="pointer-events-auto m-4 flex size-12 cursor-pointer select-none items-center justify-center rounded-full border border-black bg-[#0f0] p-2 text-xl text-[#000]"
      >
        <div>
          {playerOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#000"
            >
              <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
            </svg>
          )}
        </div>
      </div>
      <div className="pointer-events-auto h-[400px] w-full opacity-95">
        <iframe
          className="grayscale invert"
          width="100%"
          height="400"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playListId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}
        ></iframe>
      </div>
    </div>
  );
}
