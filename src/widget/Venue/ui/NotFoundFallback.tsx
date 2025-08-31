import { Search } from 'lucide-react'

export const NotFoundFallback = () => {
  return (
    <div className='flex flex-col items-center justify-center h-64 text-center space-y-4'>
      <div className='relative'>
        <div className='w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center'>
          <Search className='w-8 h-8 text-muted-foreground/60' />
        </div>
        <div className='absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-muted flex items-center justify-center'>
          <span className='text-xs text-muted-foreground'>0</span>
        </div>
      </div>
      <div className='space-y-2'>
        <h3 className='font-medium text-foreground'>No venues found</h3>
        <p className='text-sm text-muted-foreground max-w-sm'>
          Try adjusting your search criteria or filters to find more venues.
        </p>
      </div>
    </div>
  )
}
