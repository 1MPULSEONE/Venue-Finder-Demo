'use client'

import { Checkbox } from '~/shared/ui'
import { AMENITIES } from '../model/data'
import { useAmenityToggle } from '../model/hooks'
import type { FilterSectionProps } from '../model/types'

export function AmenitiesFilter({
  filters,
  updateFilters,
}: FilterSectionProps) {
  const { toggleAmenity } = useAmenityToggle(filters.amenities, updateFilters)

  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>Amenities</label>
      <div className='grid grid-cols-2 gap-2'>
        {AMENITIES.slice(0, 8).map((amenity) => (
          <div key={amenity} className='flex items-center space-x-2'>
            <Checkbox
              id={amenity}
              checked={filters.amenities.includes(amenity)}
              onCheckedChange={() => toggleAmenity(amenity)}
            />
            <label htmlFor={amenity} className='text-sm cursor-pointer'>
              {amenity}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
