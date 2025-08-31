import type { Venue } from '~/entities/Venue'

export type VenueListProps = {
  venues: Venue[]
}

export type VenueListItemProps = {
  venue: Venue
}
