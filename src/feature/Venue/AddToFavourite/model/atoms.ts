import { atom } from 'jotai'
import { atomFamily, atomWithStorage } from 'jotai/utils'

export type FavoriteVenues = Set<string>

export const favoriteVenuesAtom = atomWithStorage<string[]>(
  'favorite-venues',
  []
)

export const toggleFavoriteAtom = atom(null, (get, set, venueId: string) => {
  const current = get(favoriteVenuesAtom)
  const isFav = current.includes(venueId)
  const next = isFav
    ? current.filter((id) => id !== venueId)
    : [...current, venueId]
  set(favoriteVenuesAtom, next)
})

export const isVenueFavoriteAtom = atomFamily((venueId: string) =>
  atom((get) => {
    const favorites = get(favoriteVenuesAtom)
    return favorites.includes(venueId)
  })
)
