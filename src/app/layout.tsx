
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { Bot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Discord Ace',
  description: 'A multipurpose discord bot dashboard.',
};

const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
            <Sidebar>
              <SidebarContent className="flex flex-col">
                <SidebarHeader>
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Bot className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h1 className="text-xl font-semibold">Discord Ace</h1>
                  </Link>
                </SidebarHeader>
                <div className="flex-1">
                  <SidebarNav />
                </div>
                <div className="p-2">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start gap-2 p-2 h-auto">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={userAvatar?.imageUrl} alt="User" data-ai-hint={userAvatar?.imageHint} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-medium text-sm">Admin User</p>
                          <p className="text-xs text-muted-foreground">admin@discordace.com</p>
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">Admin User</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            admin@discordace.com
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <div className="min-h-screen">
                {children}
              </div>
            </SidebarInset>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
