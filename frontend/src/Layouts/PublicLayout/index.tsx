import { ReactNode } from 'react';

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <h1>PublicLayout</h1>
      {children}
    </>
  );
}
