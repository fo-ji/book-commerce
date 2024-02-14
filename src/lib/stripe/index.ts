import { API_URL } from '@/config/constants';

type CheckoutProps = {
  title: string;
  price: number;
};

export const checkout = async ({ title, price }: CheckoutProps) => {
  try {
    const res = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        price,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log({ error });
  }
};
