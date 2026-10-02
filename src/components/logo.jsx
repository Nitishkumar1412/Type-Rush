function Logo({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3d28a" />
          <stop offset="1" stopColor="#b8893a" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#logoGold)" />
      <rect x="12" y="14" width="40" height="36" rx="8" fill="#14161c" />
      <path d="M35 18 L24 34 H31 L28 46 L40 29 H33 Z" fill="#f3d28a" />
    </svg>
  );
}

export default Logo;