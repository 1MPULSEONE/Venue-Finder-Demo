import type { Venue } from '~/entities/Venue'

// Mock venue data
export const MOCK_VENUES: Venue[] = [
  {
    id: '1',
    name: 'Grand Palace Hotel',
    city: 'New York',
    price: 450,
    capacity: 200,
    imageUrl:
      'https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjYyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Pool', 'Parking', 'Gym', 'Spa'],
    type: 'hotel',
  },
  {
    id: '2',
    name: 'Modern Villa Retreat',
    city: 'Los Angeles',
    price: 850,
    capacity: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1702267292528-085187ed3bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzU2NjYzNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Air Conditioning', 'Pet Friendly'],
    type: 'villa',
  },
  {
    id: '3',
    name: 'Crystal Ballroom',
    city: 'Chicago',
    price: 1200,
    capacity: 300,
    imageUrl:
      'https://images.unsplash.com/photo-1571929711205-14aae07834ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwYmFsbHJvb218ZW58MXx8fHwxNzU2NjY1Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Parking', 'Air Conditioning', 'Kitchen'],
    type: 'event_venue',
  },
  {
    id: '4',
    name: 'Boutique Harbor Hotel',
    city: 'Miami',
    price: 320,
    capacity: 80,
    imageUrl:
      'https://images.unsplash.com/photo-1682221568203-16f33b35e57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwbG9iYnl8ZW58MXx8fHwxNzU2NTc2NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Pool', 'Parking', 'Pet Friendly'],
    type: 'hotel',
  },
  {
    id: '5',
    name: 'Garden Wedding Venue',
    city: 'San Francisco',
    price: 950,
    capacity: 150,
    imageUrl:
      'https://images.unsplash.com/photo-1634507554990-2043ccc61e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBnYXJkZW58ZW58MXx8fHwxNzU2NTk1OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Parking', 'Kitchen', 'Air Conditioning'],
    type: 'event_venue',
  },
  {
    id: '6',
    name: 'Beachfront Paradise',
    city: 'Miami',
    price: 680,
    capacity: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1585544314038-a0d3769d0193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHJlbnRhbCUyMGJlYWNoZnJvbnR8ZW58MXx8fHwxNzU2NjY1Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Pet Friendly'],
    type: 'villa',
  },
  {
    id: '7',
    name: 'Executive Conference Center',
    city: 'Las Vegas',
    price: 750,
    capacity: 120,
    imageUrl:
      'https://images.unsplash.com/photo-1634041441461-a1789d008830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjYyNjMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Parking', 'Air Conditioning', 'Kitchen'],
    type: 'event_venue',
  },
  {
    id: '8',
    name: 'Cozy Mountain Lodge',
    city: 'Seattle',
    price: 280,
    capacity: 25,
    imageUrl:
      'https://images.unsplash.com/photo-1682221568203-16f33b35e57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwbG9iYnl8ZW58MXx8fHwxNzU2NTc2NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    amenities: ['WiFi', 'Parking', 'Kitchen', 'Pet Friendly'],
    type: 'hotel',
  },
]
