'use client';

import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      ログアウト
    </button>
  );
};
