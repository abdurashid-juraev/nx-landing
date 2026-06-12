export interface NavigationItem {
  id?: string;
  title?: string;
  type?: 'group' | 'collapsable' | 'basic' | 'divider';
  icon?: string;
  link?: string;
  children?: NavigationItem[];
  badge?: {
    title?: string;
    classes?: string;
  };
  roles?: ('admin' | 'user')[];
  hidden?: boolean;
}
