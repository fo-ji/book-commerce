import { API_KEY, SERVICE_DOMAIN } from '@/config/constants';
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: API_KEY,
});
