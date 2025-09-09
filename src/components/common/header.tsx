'use client';

import Link from 'next/link';
import { Home, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserNav } from './user-nav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Home className="h-6 w-6 text-accent" />
            <span className="font-bold sm:inline-block">
              HomeWatch AI
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>New Matches</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-12 bg-muted rounded-md" style={{backgroundImage: 'url(https://picsum.photos/800/600?random=1)', backgroundSize: 'cover'}}></div>
                  <div>
                    <p className="font-medium">123 Ocean View Drive</p>
                    <p className="text-sm text-muted-foreground">$5,250,000</p>
                  </div>
                </div>
              </DropdownMenuItem>
               <DropdownMenuItem>
                <div className="flex items-center space-x-2">
                   <div className="w-16 h-12 bg-muted rounded-md" style={{backgroundImage: 'url(https://picsum.photos/800/600?random=5)', backgroundSize: 'cover'}}></div>
                  <div>
                    <p className="font-medium">789 Downtown Loft</p>
                    <p className="text-sm text-muted-foreground">$2,100,000</p>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <UserNav />
        </div>
      </div>
    </header>
  );
}
