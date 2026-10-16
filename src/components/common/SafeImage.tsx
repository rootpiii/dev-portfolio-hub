import { useState } from "react";

export type SafeImageProps = {
  src?: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
};

type ImageAttemptProps = {
  sources: string[];
  alt: string;
  className: string;
  loading: "lazy" | "eager";
};

function ImageAttempt({
  sources,
  alt,
  className,
  loading,
}: ImageAttemptProps) {
  const [attempt, setAttempt] = useState(0);
  const currentSource = sources[attempt];

  if (!currentSource) {
    return (
      <div
        role="img"
        aria-label={alt || "Image unavailable"}
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
          backgroundColor: "#e2e8f0",
          color: "#334155",
          overflow: "hidden",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8" cy="8" r="1.5" />
          <path d="m3 17 5-5 4 4 3-3 6 6" />
        </svg>

        <span
          style={{
            padding: "0 12px",
            textAlign: "center",
            fontSize: "12px",
            lineHeight: 1.4,
          }}
        >
          {alt || "Image unavailable"}
        </span>
      </div>
    );
  }

  return (
    <img
      key={currentSource}
      src={currentSource}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        setAttempt((current) =>
          current === attempt ? current + 1 : current
        );
      }}
    />
  );
}

export function SafeImage({
  src = "",
  fallbackSrc,
  alt = "",
  className = "",
  loading = "lazy",
}: SafeImageProps) {
  const primary = src.trim();

  const fallback =
    fallbackSrc?.trim() ||
    "https://placehold.co/640x480/1a1a2e/555?text=Image+Not+Found";

  const sources = Array.from(
    new Set([primary, fallback].filter(Boolean))
  );

  return (
    <ImageAttempt
      key={JSON.stringify(sources)}
      sources={sources}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
}

export default SafeImage;