import { SITE } from '../data/site'
import Icon from './Icon'

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 hover:scale-105 transition-transform"
    >
      <Icon name="whatsapp" className="w-7 h-7" />
    </a>
  )
}
