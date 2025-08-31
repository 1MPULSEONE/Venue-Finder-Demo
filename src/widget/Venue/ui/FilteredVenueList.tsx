'use client'

import {
  VenueFilters,
  useFilterStats,
  useFilteredVenues,
  useVenueFilters,
} from '~/feature/Venue/Filter'
import type { FilteredVenueListProps } from '../model/types'
import { VenueList } from './VenueList'

export const FilteredVenueList = ({ venues }: FilteredVenueListProps) => {
  const { filters } = useVenueFilters()
  const filteredVenues = useFilteredVenues(venues, filters)
  const stats = useFilterStats(venues.length, filteredVenues.length)

  return (
    <div className='space-y-6'>
      <VenueFilters />

      <div className='flex justify-between items-center'>
        <div className='space-y-1'>
          <p className='text-sm text-muted-foreground'>
            {stats.filtered} venue{stats.filtered !== 1 ? 's' : ''} found
            {stats.hasFilter && (
              <span className='ml-1'>
                ({stats.percentage}% of {stats.total} total)
              </span>
            )}
          </p>
        </div>
      </div>

      <VenueList venues={filteredVenues} />
    </div>
  )
}
