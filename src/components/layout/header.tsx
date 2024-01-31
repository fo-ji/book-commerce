'use client';

import { LogoutButton } from '@/features/auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-slate-600 text-gray-100 shadow-lg">
      <nav className="flex items-center justify-between p-4">
        <Link href={'/'} className="text-xl font-bold">
          Book Commerce
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ホーム
          </Link>
          {session?.user ? (
            <>
              <Link
                href="/profile"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                プロフィール
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link
              href="/login"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              ログイン
            </Link>
          )}
          <Link href={`/profile`}>
            <Image
              width={50}
              height={50}
              alt="profile_icon"
              src={session?.user?.image || '/default_icon.png'}
              className="rounded-full"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
