import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "waYSKhP_QPM";
const POSTERS = [
  `https://i.ytimg.com/vi/${VIDEO_ID}/oar2.jpg`,
  `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
];

export function ShortsVideo() {
  const [playing, setPlaying] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);

  if (playing) {
    return (
      <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl shadow-elegant ring-1 ring-gold/25 sm:max-w-[340px]">
        <div className="aspect-[9/16] w-full bg-primary">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
            title="Al Huda International Islamic Institute - short video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl shadow-elegant ring-1 ring-gold/25 sm:max-w-[340px]">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label="Play video about Al Huda International Islamic Institute"
        className="group relative block aspect-[9/16] w-full cursor-pointer"
      >
        <img
          src={POSTERS[posterIndex]}
          onError={() => setPosterIndex((i) => Math.min(i + 1, POSTERS.length - 1))}
          alt="Preview of a short video about Al Huda International Islamic Institute"
          width={720}
          height={1280}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-primary/30" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-primary shadow-gold ring-4 ring-gold/30 transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7 translate-x-0.5 fill-current" />
          </span>
        </span>
      </button>
    </div>
  );
}
