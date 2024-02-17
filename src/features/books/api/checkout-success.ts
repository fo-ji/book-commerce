import { API_URL } from '@/config/constants';

export const checkoutSuccess = async ({ sessionId }: { sessionId: string }) => {
  return await fetch(`${API_URL}/checkout/success`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sessionId }),
  });
};
