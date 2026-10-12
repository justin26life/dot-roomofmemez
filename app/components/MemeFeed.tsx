import { useEffect, useRef, useState } from "react";
import { MemeMedia } from "./MemeMedia";
import type { Meme } from "../data/memes";

type Props = { title: string; memes: Meme[] };

export function MemeFeed({ title, memes }: Props) {
  const [activeId, setActiveId] = useState(memes[0]?.id ?? 0);
  const [liked, setLiked] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = Number((entry.target as HTMLElement).dataset.id);
            setActiveId(id);
          }
        }
      },
      { root, threshold: 0.6 }
    );

    root.querySelectorAll("[data-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [memes]);

  function toggleLike(id: number) {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="fixed inset-x-0 top-0 bottom-16 z-40 bg-bg text-white">
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/70 to-transparent px-4 py-3">
        <h2 className="font-bold text-accent">{title}</h2>
      </header>

      {memes.length === 0 ? (
        <p className="flex h-full items-center justify-center text-white/60">
          No memes in this category yet
        </p>
      ) : (
        <div
          ref={containerRef}
          className="no-scrollbar h-full snap-y snap-mandatory overflow-y-scroll"
        >
          {memes.map((m) => (
            <section
              key={m.id}
              data-id={m.id}
              style={{ background: m.media ? "#000" : m.color }}
              className="relative flex h-full snap-start snap-always flex-col items-center justify-center gap-4 p-6 pb-20"
            >
              <div className="flex min-h-0 w-full flex-1 items-center justify-center">
                <MemeMedia meme={m} playing={activeId === m.id} />
              </div>
              <p className="text-center text-2xl font-bold">{m.caption}</p>

              <span className="absolute bottom-6 left-4 rounded-full bg-black/50 px-3 py-1 text-xs">
                {activeId === m.id ? "▶ playing" : "⏸ paused"}
              </span>

              <button
                onClick={() => toggleLike(m.id)}
                className="absolute bottom-6 right-4 flex flex-col items-center text-3xl"
                aria-label="Like"
              >
                <span className={liked.includes(m.id) ? "text-pop" : "text-white"}>
                  {liked.includes(m.id) ? "♥" : "♡"}
                </span>
              </button>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}