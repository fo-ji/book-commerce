import { API_URL } from '@/config/constants';

type CheckoutProps = {
  id: string;
  title: string;
  price: number;
  userId: string;
};

export const checkout = async ({ id, title, price, userId }: CheckoutProps) => {
  try {
    const res = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        price,
        userId,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log({ error });
  }
};
