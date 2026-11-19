/** Abstract rising-signal crest — inspired by Team Legacy posters, not a trademark mark. */
export default function SignalCrest({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crestGlow" x1="120" y1="10" x2="120" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C084FC" stopOpacity="0.85" />
          <stop offset="0.55" stopColor="#7C3AED" stopOpacity="0.55" />
          <stop offset="1" stopColor="#3B0764" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="beamGold" x1="120" y1="0" x2="120" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5C518" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F5C518" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Twin signal beams */}
      <path d="M120 8 L78 72 L162 72 Z" fill="url(#beamGold)" opacity="0.55" />
      {/* Winged crest silhouette */}
      <path
        d="M20 78 C48 52 78 44 120 44 C162 44 192 52 220 78 C188 70 156 66 120 66 C84 66 52 70 20 78 Z"
        fill="url(#crestGlow)"
      />
      <path
        d="M42 92 C70 74 94 68 120 68 C146 68 170 74 198 92 C168 82 146 78 120 78 C94 78 72 82 42 92 Z"
        fill="#7C3AED"
        opacity="0.45"
      />
      <circle cx="120" cy="58" r="6" fill="#F5C518" opacity="0.9" />
    </svg>
  );
}
