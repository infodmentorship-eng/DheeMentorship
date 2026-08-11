export const SITE = {
  name: 'Dhee Mentorship',
  tagline: 'From Ramanathapuram to the World',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: 'https://wa.me/919876543210',
  email: 'info.dmentorship@gmail.com',
  address: 'DHEE Mentorship, Main Bazaar Road, Ramanathapuram, Tamil Nadu 623501, India',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Ramanathapuram,Tamil%20Nadu&output=embed',
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Study Abroad', to: '/study-abroad' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Visa Assistance', to: '/visa-assistance' },
      { label: 'Apostille & Attestation', to: '/apostille-attestation' },
      { label: 'Document Translation', to: '/document-translation' },
      { label: 'View All Services', to: '/services' },
    ],
  },
  { label: 'Jobs Abroad', to: '/jobs' },
  { label: 'Contact', to: '/contact' },
]
