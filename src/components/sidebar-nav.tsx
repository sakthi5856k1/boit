
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Gauge,
  MessageSquarePlus,
  Shield,
  UserPlus,
  FileText,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Gauge },
  { href: '/custom-responses', label: 'Custom Responses', icon: MessageSquarePlus },
  { href: '/role-assignment', label: 'Role Assignment', icon: UserPlus },
  { href: '/moderation', label: 'Moderation', icon: Shield },
  { href: '/command-logs', label: 'Command Logs', icon: FileText },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
