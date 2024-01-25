'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
