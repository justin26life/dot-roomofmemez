import { useState } from "react";
import type { Category } from "./CategoryBubbles";
import { MemeMedia } from "./MemeMedia";
import { useInView } from "../hooks/useInView";
import type { Meme } from "../data/memes";

type Props = { meme: Meme; categories: Category[] };

export function MemeCard({ meme, categories }: Props) {
  const [liked, setLiked] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>();

  // Find the full category info (name, icon) for this meme's category ids
  const tags = categories.filter((c) => meme.categoryIds.includes(c.id));

  return (
    <article className="overflow-hidden rounded-2xl bg-surface">
      <div
        ref={ref}
        style={{ background: meme.media ? "#000" : meme.color }}
        className="flex aspect-square items-center justify-center p-4"
      >
        <MemeMedia meme={meme} playing={inView} />
      </div>

      <p className="px-3 pt-3 font-bold">{meme.caption}</p>

      <div className="flex items-center justify-between gap-2 p-3">
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((t) => (
              <span
                key={t.id}
                className="rounded-full bg-white/10 px-2 py-1 text-xs text-accent"
              >
                {t.icon} {t.name}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/50">
              No category
            </span>
          )}
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className={`text-2xl ${liked ? "text-pop" : "text-white"}`}
          aria-label="Like"
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}