export default function Lightbox({ flyer, setSelectedFlyer }) {
  return (
    <div className="no-doc-scroll fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
      {/* <div
        className="fixed right-4 top-4 z-50 cursor-pointer select-none rounded-full border border-black bg-[#0f0] px-2 text-xl text-black"
        onClick={() => setSelectedFlyer(null)}
      >
        X
      </div> */}
      <img
        src={flyer.asset.url}
        alt={flyer.alt}
        className="max-h-full max-w-full cursor-zoom-out"
        onClick={() => setSelectedFlyer(null)}
      />
    </div>
  );
}
