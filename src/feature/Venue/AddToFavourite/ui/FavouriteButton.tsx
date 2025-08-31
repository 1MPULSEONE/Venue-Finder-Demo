'use client'

import { Heart } from 'lucide-react'
import { memo, useCallback } from 'react'
import { cn } from '~/shared/lib/styles'
import { Button } from '~/shared/ui'
import { useToggleFavorite } from '../model/hooks'
import type { AddToFavouriteProps } from '../model/types'

export const AddToFavourite: React.FC<AddToFavouriteProps> = memo(
  ({ venueId, onClick, className }) => {
    const { isFavorite, toggle } = useToggleFavorite(venueId)

    const handleClick = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation()
        toggle()
        onClick?.(venueId)
      },
      [toggle, onClick, venueId]
    )

    return (
      <Button
        size='icon'
        variant='ghost'
        onClick={handleClick}
        className={cn(
          'rounded-full transition-all duration-200 hover:scale-110',
          isFavorite
            ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg'
            : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500 shadow-md',
          className
        )}
      >
        <Heart
          className='h-4 w-4 transition-transform duration-200'
          fill={isFavorite ? 'currentColor' : 'none'}
          strokeWidth={isFavorite ? 0 : 2}
        />
      </Button>
    )
  }
)

AddToFavourite.displayName = 'AddToFavourite'
