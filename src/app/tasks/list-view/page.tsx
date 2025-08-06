import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Page title',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return (
    <div>
      // Page content
    </div>
  )
}
