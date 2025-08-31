'use client'

import {
  LoadingSwap,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/shared/ui'
import type { FilterSectionProps } from '../model/types'

const GUEST_OPTIONS: Array<{ label: string; value: [number, number] }> = [
  { label: 'All guests', value: [1, 9999] },
  { label: '1–10', value: [1, 10] },
  { label: '11–20', value: [11, 20] },
  { label: '21–35', value: [21, 35] },
  { label: '36–50', value: [36, 50] },
  { label: '50+', value: [50, 9999] },
]

export function GuestRangeSelect({
  filters,
  updateFilters,
  isReady = true,
}: FilterSectionProps & { isReady?: boolean }) {
  const current = GUEST_OPTIONS.find(
    (o) =>
      o.value[0] === filters.guestRange[0] &&
      o.value[1] === filters.guestRange[1]
  )

  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>Guests</label>
      <LoadingSwap isLoading={!isReady}>
        <Select
          value={
            current ? `${current.value[0]}-${current.value[1]}` : undefined
          }
          onValueChange={(v) => {
            const parts = (v ?? '').split('-')
            const min = parseInt(parts[0]!, 10)
            const max = parseInt(parts[1]!, 10)
            updateFilters({ guestRange: [min, max] })
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select guests' />
          </SelectTrigger>
          <SelectContent>
            {GUEST_OPTIONS.map((o) => (
              <SelectItem key={o.label} value={`${o.value[0]}-${o.value[1]}`}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </LoadingSwap>
    </div>
  )
}
