'use client';

import Image from 'next/image';
import { BedDouble, Bath, Scale, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Property } from '@/lib/types';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export default function PropertyCard({ property, onSelect, isSelected }: PropertyCardProps) {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-md",
        isSelected ? "ring-2 ring-primary shadow-lg" : "border-border"
      )}
      onClick={() => onSelect(property.id)}
    >
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={property.images[0]}
            alt={`Image of ${property.address}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint="house exterior"
          />
          {property.matchScore && (
            <Badge 
              variant="default"
              className="absolute top-2 right-2 bg-accent text-accent-foreground"
            >
              {property.matchScore}% Match
            </Badge>
          )}
        </div>
        <div className="p-4 space-y-2">
          <div>
            <div className="text-2xl font-bold text-foreground">
              ${property.price.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground flex items-center">
              <MapPin className="w-4 h-4 mr-1"/>
              {property.address}, {property.city}, {property.state}
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center">
              <BedDouble className="w-4 h-4 mr-1 text-accent" /> {property.bedrooms} beds
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-accent" /> {property.bathrooms} baths
            </div>
            <div className="flex items-center">
              <Scale className="w-4 h-4 mr-1 text-accent" /> {property.sqft.toLocaleString()} sqft
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
