export default function Lightbox({ flyer, setSelectedFlyer }) {
  return (
    <div
      onClick={() => setSelectedFlyer(null)}
      className="no-doc-scroll fixed left-0 top-0 z-30 flex h-full w-full cursor-zoom-out items-center justify-center bg-black bg-opacity-80"
    >
      <img
        src={flyer.asset.url}
        alt={flyer.alt}
        className="max-h-full max-w-full"
      />
    </div>
  );
}
