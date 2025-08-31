export type Venue = {
  id: string
  name: string
  city: string
  price: number
  capacity: number
  imageUrl: string
  amenities: string[]
  type: 'hotel' | 'villa' | 'event_venue'
}

export type VenueCardProps = {
  venue: Venue
  children?: React.ReactNode
  favoriteSlot?: React.ReactNode
}
