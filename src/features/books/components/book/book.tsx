'use client';

import { useDisclosure } from '@/hooks/use-disclosure';
import { checkout } from '@/lib/stripe';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type BookProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export const Book = ({ id, title, thumbnail, price }: BookProps) => {
  const { isOpen, open, close } = useDisclosure();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center m-4">
      <a
        onClick={open}
        className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
      >
        <Image
          priority
          src={thumbnail}
          alt={title}
          width={450}
          height={350}
          className="rounded-t-md"
        />
        <div className="px-4 py-4 bg-slate-100 rounded-b-md">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-2 text-lg text-slate-600">この本は○○...</p>
          <p className="mt-2 text-md text-slate-700">値段: {price}</p>
        </div>
      </a>

      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50 flex justify-center items-center animate-modal">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl mb-4">本を購入しますか？</h3>
            <button
              onClick={async () => {
                if (!session?.user) {
                  close();
                  router.push('/login');
                } else {
                  try {
                    const { checkout_url } = await checkout({
                      title,
                      price,
                      id,
                      userId: (session.user as any).id,
                    });
                    router.push(checkout_url);
                  } catch (error) {
                    console.log({ error });
                  }
                }
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              購入する
            </button>
            <button
              onClick={close}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
