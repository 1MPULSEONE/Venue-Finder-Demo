import type { FilterState } from './types'

export const AMENITIES = [
  'WiFi',
  'Pool',
  'Parking',
  'Kitchen',
  'Air Conditioning',
  'Pet Friendly',
  'Gym',
  'Spa',
  'Breakfast',
  'Washer',
] as const

export const CITIES = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Miami',
  'San Francisco',
  'Las Vegas',
  'Seattle',
  'Austin',
] as const

export const DEFAULT_FILTERS: FilterState = {
  searchTerm: '',
  city: 'all',
  guestRange: [1, 9999],
  amenities: [],
  sortBy: 'price_asc',
}
