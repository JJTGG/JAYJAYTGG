type KineticHeadingProps = {
  lines: string[];
  accentLine?: number;
  className?: string;
};

export default function KineticHeading({
  lines,
  accentLine = -1,
  className = ""
}: KineticHeadingProps) {
  const accessibleText = lines.join(" ");

  return (
    <h1
      className={`max-w-3xl text-[clamp(3.1rem,6.8vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em] ${className}`.trim()}
    >
      {/* Keep one clear, readable heading for assistive technology */}
      <span className="sr-only">{accessibleText}</span>

      {/* Visual letters can move independently without duplicating spoken text */}
      <span aria-hidden="true" className="kinetic-word">
        {lines.map((line, lineIndex) => (
          <span
            key={`${lineIndex}-${line}`}
            className={`block ${
              lineIndex === accentLine ? "text-[var(--accent)]" : ""
            }`}
          >
            {Array.from(line).map((character, characterIndex) => {
              const delay = Math.min(
                (lineIndex * 12 + characterIndex) * 22,
                650
              );

              return (
                <span
                  key={`${lineIndex}-${characterIndex}`}
                  className="kinetic-letter"
                >
                  <span
                    className="motion-fade-up inline-block"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </h1>
  );
}