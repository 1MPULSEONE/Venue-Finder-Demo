'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/shared/ui'
import type { FilterSectionProps, FilterState } from '../model/types'

export function SortByFilter({ filters, updateFilters }: FilterSectionProps) {
  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>Sort by</label>
      <Select
        value={filters.sortBy}
        onValueChange={(sortBy) =>
          updateFilters({ sortBy: sortBy as FilterState['sortBy'] })
        }
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='price_asc'>Price: Low to High</SelectItem>
          <SelectItem value='price_desc'>Price: High to Low</SelectItem>
          <SelectItem value='capacity_asc'>Capacity: Low to High</SelectItem>
          <SelectItem value='capacity_desc'>Capacity: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
