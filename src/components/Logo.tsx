const Logo = ({ className = "h-8" }: { className?: string }) => (
  <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="10" y="10" width="80" height="180" rx="4" fill="darkgreen" />
    <text x="50" y="135" textAnchor="middle" fontSize="120" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">T</text>
    <text x="110" y="80" fontSize="48" fontFamily="Arial, sans-serif" fill="currentColor" fontWeight="600">TIMELESS</text>
    <text x="110" y="140" fontSize="48" fontFamily="Arial, sans-serif" fill="currentColor" fontWeight="600">TECHNOLOGY</text>
  </svg>
);

export default Logo;
