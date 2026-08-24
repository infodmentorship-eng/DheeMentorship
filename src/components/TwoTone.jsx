export default function TwoTone({ white, blue, as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`font-bold tracking-tight leading-[1.05] ${className}`}>
      <span className="block text-white">{white}</span>
      <span className="block text-accent">{blue}</span>
    </Tag>
  )
}
