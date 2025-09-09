'use client';

import React, { useState } from 'react';
import Header from '@/components/common/header';
import PropertyList from '@/components/property/property-list';
import PropertyMap from '@/components/map/property-map';
import { properties } from '@/lib/mock-data';
import type { Property } from '@/lib/types';
import SearchFilters from '@/components/search/search-filters';

export default function Home() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <aside className="w-full md:w-96 lg:w-[450px] border-r border-border bg-card flex flex-col">
          <div className="p-6 border-b border-border">
            <SearchFilters />
          </div>
          <div className="flex-1 overflow-y-auto">
            <PropertyList 
              properties={properties} 
              onSelectProperty={setSelectedPropertyId}
              selectedPropertyId={selectedPropertyId}
            />
          </div>
        </aside>
        <div className="flex-1 h-64 md:h-full">
          <PropertyMap properties={properties} selectedPropertyId={selectedPropertyId} />
        </div>
      </main>
    </div>
  );
}
