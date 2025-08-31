import type { Venue } from '~/entities/Venue/model/types'
import type { FilterState } from './types'

export function filterVenues(venues: Venue[], filters: FilterState): Venue[] {
  return venues.filter((venue) => {
    if (
      filters.searchTerm &&
      !venue.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
    ) {
      return false
    }

    if (filters.city !== 'all' && venue.city !== filters.city) {
      return false
    }

    if (
      venue.capacity < filters.guestRange[0] ||
      venue.capacity > filters.guestRange[1]
    ) {
      return false
    }

    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
        venue.amenities.includes(amenity)
      )
      if (!hasAllAmenities) {
        return false
      }
    }

    return true
  })
}


export function sortVenues(
  venues: Venue[],
  sortBy: FilterState['sortBy']
): Venue[] {
  const sortedVenues = [...venues]

  switch (sortBy) {
    case 'price_asc':
      return sortedVenues.sort((a, b) => a.price - b.price)
    case 'price_desc':
      return sortedVenues.sort((a, b) => b.price - a.price)
    case 'capacity_asc':
      return sortedVenues.sort((a, b) => a.capacity - b.capacity)
    case 'capacity_desc':
      return sortedVenues.sort((a, b) => b.capacity - a.capacity)
    default:
      return sortedVenues
  }
}

export function applyFiltersAndSort(
  venues: Venue[],
  filters: FilterState
): Venue[] {
  const filtered = filterVenues(venues, filters)
  return sortVenues(filtered, filters.sortBy)
}
