import { useAtomValue, useSetAtom } from 'jotai'
import {
  favoriteVenuesAtom,
  isVenueFavoriteAtom,
  toggleFavoriteAtom,
} from './atoms'

export function useFavoriteVenues() {
  const toggleFavorite = useSetAtom(toggleFavoriteAtom)
  const favoriteVenues = useAtomValue(favoriteVenuesAtom)

  return {
    toggleFavorite,
    favoriteVenues,
  }
}

export function useToggleFavorite(venueId: string) {
  const toggleFavorite = useSetAtom(toggleFavoriteAtom)
  const isFavorite = useAtomValue(isVenueFavoriteAtom(venueId))

  const toggle = () => toggleFavorite(venueId)

  return {
    isFavorite,
    toggle,
  }
}
