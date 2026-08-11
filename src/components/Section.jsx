export default function Section({ children, className = '', containerClassName = '' }) {
  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
