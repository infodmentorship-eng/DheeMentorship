export default function TwoTone({ white, blue, as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`font-bold ${className}`}>
      <span className="block text-white">{white}</span>
      <span className="block text-gradient-brand">{blue}</span>
    </Tag>
  )
}
