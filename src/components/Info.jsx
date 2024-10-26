import { PortableText } from "@portabletext/react";
export default function Info({ text }) {
  return (
    <div className="no-doc-scroll fixed left-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-4 bg-[#000] text-[#0f0] opacity-95">
      <div className="max-w-prose px-2 text-center font-serif text-xl">
        <PortableText value={text} />
      </div>
      <div className="text-xs font-black uppercase">
        web:{" "}
        <a href="https://sofja.uno" target="_blank" className="underline">
          sofja
        </a>{" "}
        +{" "}
        <a href="https://astrosuka.xyz" target="_blank" className="underline">
          astrosuka
        </a>
      </div>
    </div>
  );
}
