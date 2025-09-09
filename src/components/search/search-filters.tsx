'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Map, Save } from 'lucide-react';

export default function SearchFilters() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-tight">Find Your Home</h3>
        <p className="text-sm text-muted-foreground">Adjust the filters to match your dream criteria.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="price-range">Price Range</Label>
          <Slider defaultValue={[250000, 1500000]} max={5000000} step={10000} id="price-range" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$250k</span>
            <span>$5M+</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bedrooms">Beds</Label>
            <Select defaultValue="any">
              <SelectTrigger id="bedrooms">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bathrooms">Baths</Label>
            <Select defaultValue="any">
              <SelectTrigger id="bathrooms">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sqft">Square Feet</Label>
          <Input id="sqft" placeholder="1200+ sqft" />
        </div>

        <Button variant="outline" className="w-full">
          <Map className="mr-2 h-4 w-4" />
          Draw on Map
        </Button>
      </div>
      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        <Save className="mr-2 h-4 w-4" />
        Save Search
      </Button>
    </div>
  );
}
