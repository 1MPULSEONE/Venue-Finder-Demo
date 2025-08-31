import type { Venue } from '~/entities/Venue'

export type VenueListProps = {
  venues: Venue[]
}

export type VenueListItemProps = {
  venue: Venue
}
export type FilteredVenueListProps = {
  venues: Venue[]
}
