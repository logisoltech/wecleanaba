export default function Stars({ className = "" }) {
  return (
    <div className={`flex items-center gap-0.5 text-accent ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.9L22 10l-5 4.5L18.2 22 12 18.2 5.8 22 7 14.5 2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}
