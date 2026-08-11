import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | DHEE Mentorship` : 'DHEE Mentorship'
  }, [title])
}
