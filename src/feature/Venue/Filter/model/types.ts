export interface FilterState {
  searchTerm: string
  city: string
  guestRange: [number, number]
  amenities: string[]
  sortBy: 'price_asc' | 'price_desc' | 'capacity_asc' | 'capacity_desc'
}

export interface FilterFormProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export interface FilterSectionProps {
  filters: FilterState
  updateFilters: (updates: Partial<FilterState>) => void
}
