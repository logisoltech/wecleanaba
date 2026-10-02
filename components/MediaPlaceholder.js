export default function MediaPlaceholder({
  label = "Media",
  aspect = "video",
  className = "",
  showPlay = false,
}) {
  const ratio =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div
      className={`media-frame ${ratio} w-full ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 p-6 text-center">
        {showPlay && (
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-header/30 bg-white/80 text-header backdrop-blur-sm transition-transform hover:scale-105">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        <p className="max-w-[14rem] text-xs tracking-[0.08em] uppercase text-header/50">
          {label}
        </p>
      </div>
    </div>
  );
}
