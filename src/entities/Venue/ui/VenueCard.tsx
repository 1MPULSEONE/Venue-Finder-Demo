'use client'

import { MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import { Badge, Card, CardContent } from '~/shared/ui'
import type { VenueCardProps } from '../model/types'

export function VenueCard({ venue, favoriteSlot, children }: VenueCardProps) {
  return (
    <Card className='group cursor-pointer transition-all hover:shadow-lg p-0 gap-0 border-2 border-border overflow-hidden'>
      <div className='relative'>
        <Image
          src={venue.imageUrl}
          alt={venue.name}
          className='h-48 w-full object-cover transition-transform group-hover:scale-105'
          priority
          width={300}
          height={200}
        />
        {favoriteSlot && (
          <div className='absolute right-2 top-2'>{favoriteSlot}</div>
        )}
      </div>

      <CardContent className='p-4'>
        <div className='mb-2'>
          <h3 className='truncate'>{venue.name}</h3>
          <div className='flex items-center gap-1 text-muted-foreground'>
            <MapPin className='h-3 w-3' />
            <span className='text-sm'>{venue.city}</span>
          </div>
        </div>

        <div className='mb-3 flex items-center justify-between'>
          <div className='flex items-center gap-1 text-muted-foreground'>
            <Users className='h-3 w-3' />
            <span className='text-sm'>Up to {venue.capacity} guests</span>
          </div>
          <div>
            <span className='text-lg'>${venue.price}</span>
            <span className='text-sm text-muted-foreground'>/night</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-1'>
          {venue.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant='secondary' className='text-xs'>
              {amenity}
            </Badge>
          ))}
          {venue.amenities.length > 3 && (
            <Badge variant='outline' className='text-xs'>
              +{venue.amenities.length - 3}
            </Badge>
          )}
        </div>

        {children && <div className='mt-3 pt-3 border-t'>{children}</div>}
      </CardContent>
    </Card>
  )
}
