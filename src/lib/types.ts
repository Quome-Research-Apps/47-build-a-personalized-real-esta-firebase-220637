export type Property = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  images: string[];
  location: {
    lat: number;
    lng: number;
  };
  aiSummary?: string;
  matchScore?: number;
};
