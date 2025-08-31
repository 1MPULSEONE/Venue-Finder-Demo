'use client'

import { VenueCard } from '~/entities/Venue'
import { AddToFavourite } from '~/feature/Venue/AddToFavourite'
import type { VenueListItemProps } from '../model/types'

export const VenueListItem = ({ venue }: VenueListItemProps) => {
  return (
    <VenueCard
      venue={venue}
      favoriteSlot={<AddToFavourite venueId={venue.id} />}
    />
  )
}
