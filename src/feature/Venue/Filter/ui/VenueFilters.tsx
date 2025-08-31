'use client'

import { SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'
import { Button, Card, CardContent } from '~/shared/ui'
import { useVenueFilters } from '../model/hooks'
import { AmenitiesFilter } from './AmenitiesFilter'
import { GuestRangeSelect } from './GuestRangeSelect'
import { SearchBar } from './SearchBar'
import { SortByFilter } from './SortByFilter'

export function VenueFilters() {
  const [showFilters, setShowFilters] = useState(false)
  const { filters, updateFilters, clearFilters } = useVenueFilters()

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <SearchBar filters={filters} updateFilters={updateFilters} />
        <Button
          variant='outline'
          onClick={() => setShowFilters(!showFilters)}
          className='flex items-center gap-2'
        >
          <SlidersHorizontal className='h-4 w-4' />
          Filters
        </Button>
      </div>

      {showFilters && (
        <Card>
          <CardContent className='p-4 space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <GuestRangeSelect
                filters={filters}
                updateFilters={updateFilters}
              />
              <SortByFilter filters={filters} updateFilters={updateFilters} />
              <AmenitiesFilter
                filters={filters}
                updateFilters={updateFilters}
              />
            </div>

            <div className='flex justify-end'>
              <Button variant='outline' onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
