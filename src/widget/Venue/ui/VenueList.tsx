'use client'
import type { VenueListProps } from '../model/types'
import { NotFoundFallback } from './NotFoundFallback'
import { VenueListItem } from './VenueListItem'

export const VenueList: React.FC<VenueListProps> = ({ venues }) => {
  return venues.length > 0 ? (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {venues.map((venue) => (
        <VenueListItem key={venue.id} venue={venue} />
      ))}
    </div>
  ) : (
    <NotFoundFallback />
  )
}
