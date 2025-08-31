'use client'

import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
  useQueryStates,
} from 'nuqs'
import { useMemo } from 'react'
import { DEFAULT_FILTERS } from './data'
import type { FilterState } from './types'

export function useVenueFilters() {
  const [filters, setFilters] = useQueryStates(
    {
      searchTerm: parseAsString.withDefault(DEFAULT_FILTERS.searchTerm),
      city: parseAsString.withDefault(DEFAULT_FILTERS.city),
      guestMin: parseAsInteger.withDefault(DEFAULT_FILTERS.guestRange[0]),
      guestMax: parseAsInteger.withDefault(DEFAULT_FILTERS.guestRange[1]),
      amenities: parseAsArrayOf(parseAsString).withDefault(
        DEFAULT_FILTERS.amenities
      ),
      sortBy: parseAsStringEnum([
        'price_asc',
        'price_desc',
        'capacity_asc',
        'capacity_desc',
      ]).withDefault(DEFAULT_FILTERS.sortBy),
    },
    { shallow: false }
  )

  const filterState: FilterState = useMemo(
    () => ({
      searchTerm: filters.searchTerm,
      city: filters.city,
      guestRange: [filters.guestMin, filters.guestMax] as [number, number],
      amenities: filters.amenities,
      sortBy: filters.sortBy,
    }),
    [filters]
  )

  const updateFilters = (updates: Partial<FilterState>) => {
    const newState = { ...filterState, ...updates }

    setFilters({
      searchTerm: newState.searchTerm,
      city: newState.city,
      guestMin: newState.guestRange[0],
      guestMax: newState.guestRange[1],
      amenities: newState.amenities,
      sortBy: newState.sortBy,
    })
  }

  const clearFilters = () => {
    setFilters({
      searchTerm: DEFAULT_FILTERS.searchTerm,
      city: DEFAULT_FILTERS.city,
      guestMin: DEFAULT_FILTERS.guestRange[0],
      guestMax: DEFAULT_FILTERS.guestRange[1],
      amenities: DEFAULT_FILTERS.amenities,
      sortBy: DEFAULT_FILTERS.sortBy,
    })
  }

  return {
    filters: filterState,
    updateFilters,
    clearFilters,
  }
}

export function useAmenityToggle(
  amenities: string[],
  updateFilters: (updates: Partial<FilterState>) => void
) {
  const toggleAmenity = (amenity: string) => {
    const newAmenities = amenities.includes(amenity)
      ? amenities.filter((a) => a !== amenity)
      : [...amenities, amenity]
    updateFilters({ amenities: newAmenities })
  }

  return { toggleAmenity }
}
