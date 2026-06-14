export interface MenuItem {
  id: string;
  name: string;
  category: 'entrées' | 'plats' | 'desserts';
  price: number; // in TND
  description: string;
  badge?: 'Signature' | 'Nouveau' | 'Épicé' | 'Populaire';
  tags?: string[];
  image: string; // Unsplash seafood placeholder URL
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  mapLink: string;
  phone: string;
  phoneDisplay: string;
  hours: string;
  ambiance: string;
  coordinates: { lat: number; lng: number };
}

export interface ReservationState {
  branchId: string;
  guestCount: number;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  specialRequests: string;
}
