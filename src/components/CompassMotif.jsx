export default function CompassMotif({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.75" />
      <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.75" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.75" />
      <line x1="29" y1="29" x2="171" y2="171" stroke="currentColor" strokeWidth="0.5" />
      <line x1="171" y1="29" x2="29" y2="171" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}
