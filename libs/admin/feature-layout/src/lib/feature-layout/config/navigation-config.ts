import { NavigationItem } from '../models/navigation-model';

export const adminNavigation: NavigationItem[] = [
  {
    id: 'dashboards',
    title: 'Boshqaruv Paneli',
    type: 'group',
    roles: ['admin', 'user'], // admin ham, user ham ko'ra oladi
    children: [
      {
        id: 'dashboard',
        title: 'Asosiy Oyna',
        type: 'basic',
        icon: 'pi pi-home',
        link: '/dashboard',
        roles: ['admin', 'user']
      }
    ]
  },
  {
    id: 'system-divider',
    title: 'Tizim Sozlamalari',
    type: 'divider',
    roles: ['admin'] // Faqat admin uchun
  },
  {
    id: 'settings',
    title: 'Sozlamalar',
    type: 'collapsable',
    icon: 'pi pi-cog',
    roles: ['admin'], // Faqat admin uchun
    children: [
      {
        id: 'users',
        title: 'Foydalanuvchilar',
        type: 'basic',
        icon: 'pi pi-users',
        link: '/users',
        roles: ['admin']
      }
    ]
  }
];
