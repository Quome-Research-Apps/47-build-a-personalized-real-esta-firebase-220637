'use client';

import type { Property } from '@/lib/types';
import PropertyCard from './property-card';

interface PropertyListProps {
  properties: Property[];
  onSelectProperty: (id: string) => void;
  selectedPropertyId: string | null;
}

export default function PropertyList({ properties, onSelectProperty, selectedPropertyId }: PropertyListProps) {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold tracking-tight">
        {properties.length} Homes For You
      </h2>
      <div className="space-y-4">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onSelect={onSelectProperty}
            isSelected={selectedPropertyId === property.id}
          />
        ))}
      </div>
    </div>
  );
}
