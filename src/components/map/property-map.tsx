'use client';

import React, { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import type { Property } from '@/lib/types';
import { Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyMapProps {
  properties: Property[];
  selectedPropertyId: string | null;
}

const getCenter = (properties: Property[]) => {
  if (properties.length === 0) {
    return { lat: 34.052235, lng: -118.243683 }; // Default to LA
  }
  const { lat, lng } = properties.reduce(
    (acc, prop) => ({
      lat: acc.lat + prop.location.lat,
      lng: acc.lng + prop.location.lng,
    }),
    { lat: 0, lng: 0 }
  );
  return { lat: lat / properties.length, lng: lng / properties.length };
};

export default function PropertyMap({ properties, selectedPropertyId }: PropertyMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [center, setCenter] = useState(getCenter(properties));

  useEffect(() => {
    if (selectedPropertyId) {
      const selectedProperty = properties.find(p => p.id === selectedPropertyId);
      if (selectedProperty) {
        setCenter(selectedProperty.location);
      }
    } else {
        setCenter(getCenter(properties));
    }
  }, [selectedPropertyId, properties]);

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-muted">
        <p className="text-muted-foreground">Google Maps API key is missing.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        mapId="homewatch-ai-map"
        center={center}
        zoom={10}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        className="w-full h-full"
      >
        {properties.map((property) => (
          <AdvancedMarker key={property.id} position={property.location}>
             <div className={cn(
               "w-8 h-8 rounded-full flex items-center justify-center transition-all",
               selectedPropertyId === property.id ? "bg-primary scale-125" : "bg-accent"
             )}>
                <Home className={cn(
                  "w-5 h-5",
                  selectedPropertyId === property.id ? "text-primary-foreground" : "text-accent-foreground"
                  )} />
             </div>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
