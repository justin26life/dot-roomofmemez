import { useEffect, useRef } from "react";
import type { Meme } from "../data/memes";

type Props = { meme: Meme; playing: boolean };

export function MemeMedia({ meme, playing }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play the clip when it's on screen, pause it when it's not
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [playing]);

  // No media: show the emoji, like before
  if (!meme.media) {
    return <span className="text-8xl">{meme.emoji}</span>;
  }

  if (meme.media.type === "clip") {
    return (
      <video
        ref={videoRef}
        src={meme.media.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="max-h-full max-w-full object-contain"
      />
    );
  }

  // "image" and "gif" are both shown with an <img> tag
  return (
    <img
      src={meme.media.src}
      alt={meme.caption}
      loading="lazy"
      className="max-h-full max-w-full object-contain"
    />
  );
}