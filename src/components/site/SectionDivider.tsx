export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold">
        <path fill="currentColor" d="M12 2l2.4 5.4L20 8l-4 4 1.2 6L12 15l-5.2 3L8 12 4 8l5.6-.6z"/>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
