import { API_ENDPOINT } from '@/config/constants';
import { client } from '@/lib/microcms/client';
import type { BookType } from '../types';

export const getBooks = async () => {
  return await client.getList<BookType>({
    endpoint: API_ENDPOINT,
  });
};
