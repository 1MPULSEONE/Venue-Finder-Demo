// Лучше использовать для форм ReactHookForm, чтобы избежать лишних ререндеров
'use client'

import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDebounce } from '~/shared/lib/hooks'
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/shared/ui'
import { CITIES } from '../model/data'
import type { FilterSectionProps } from '../model/types'

export function SearchBar({ filters, updateFilters }: FilterSectionProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(filters.searchTerm)

  const debouncedSearchTerm = useDebounce(localSearchTerm, 500)

  useEffect(() => {
    setLocalSearchTerm(filters.searchTerm)
  }, [filters.searchTerm])

  useEffect(() => {
    if (debouncedSearchTerm !== filters.searchTerm) {
      updateFilters({ searchTerm: debouncedSearchTerm })
    }
  }, [debouncedSearchTerm, filters.searchTerm, updateFilters])

  return (
    <div className='flex gap-2'>
      <div className='relative flex-1'>
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          placeholder='Search venues...'
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          className='pl-10'
        />
      </div>
      <Select
        value={filters.city}
        onValueChange={(city) => updateFilters({ city })}
      >
        <SelectTrigger className='w-48'>
          <SelectValue placeholder='Select city' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All cities</SelectItem>
          {CITIES.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
