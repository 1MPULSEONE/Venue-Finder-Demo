import { MOCK_VENUES, VenueList } from '~/widget/Venue'

export default function CatalogPage() {
  return (
    <main className='min-h-screen py-8 container mx-auto'>
      <div className='mb-8'>
        <h1 className='mb-2 font-medium text-4xl'>Venue Finder</h1>
        <p className='text-muted-foreground'>
          Discover and book amazing venues for your next event or stay
        </p>
      </div>
      <VenueList venues={MOCK_VENUES} />
    </main>
  )
}
