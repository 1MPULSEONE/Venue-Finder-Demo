import Link from 'next/link'
import { Button } from '~/shared/ui'

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      <div className='text-center space-y-6'>
        <h1 className='font-bold text-4xl '>VENUE-FINDER-DEMO</h1>
        <p className='text-lg text-muted-foreground'>
          Test assignment for venue searching
        </p>

        <div className='space-y-4'>
          <Link href='/catalog'>
            <Button size='lg'>Go to Catalog</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
