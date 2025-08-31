'use client'

import { useMemo } from 'react'
import type { Venue } from '~/entities/Venue/model/types'
import type { FilterState } from './types'
import { applyFiltersAndSort } from './utils'

export function useFilteredVenues(venues: Venue[], filters: FilterState) {
  return useMemo(() => {
    return applyFiltersAndSort(venues, filters)
  }, [
    venues,
    filters.searchTerm,
    filters.city,
    filters.guestRange[0],
    filters.guestRange[1],
    filters.amenities.join(','),
  ])
}

export function useFilterStats(originalCount: number, filteredCount: number) {
  return useMemo(
    () => ({
      total: originalCount,
      filtered: filteredCount,
      percentage:
        originalCount > 0
          ? Math.round((filteredCount / originalCount) * 100)
          : 0,
      hasFilter: filteredCount !== originalCount,
    }),
    [originalCount, filteredCount]
  )
}
