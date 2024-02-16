import { ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}

export function Error({ children }: ErrorProps) {
  return (
    <>
      <h1>Error</h1>
      {children}
    </>
  );
}
